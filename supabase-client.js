// ══════════════════════════════════════════════════════════
//  supabase-client.js — Supabase client + data layer
// ══════════════════════════════════════════════════════════

// ╔══════════════════════════════════════════════════════════════╗
// ║  🔧  SUPABASE CONFIG — replace with your actual values      ║
// ║  Go to: Supabase Dashboard → Settings → API                 ║
// ╚══════════════════════════════════════════════════════════════╝
const SUPABASE_URL     = 'https://hibqteoaibvwpgcceijv.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_wyM87t_BtGvOJbCLsdKwAQ_HGg2E0Zn';

const { createClient } = supabase;
const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    // Email confirmation enabled in Supabase dashboard
    // The user will receive a link to set their password
    autoRefreshToken: true,
    persistSession: true,
  }
});

// ── Auth helpers ──────────────────────────────────────────
async function sbGetSession() {
  const { data: { session } } = await sb.auth.getSession();
  return session;
}

async function sbGetProfile(uid) {
  const { data, error } = await sb.from('profiles').select('*').eq('id', uid).single();
  if (error) return null;
  return data;
}

async function sbSignIn(email, password) {
  return await sb.auth.signInWithPassword({ email, password });
}

async function sbSignOut() {
  return await sb.auth.signOut();
}

// ── Register: invite user so Supabase sends email with link ──
// Uses signUp — Supabase will send a confirmation/magic link
// In Supabase Dashboard → Auth → Email Templates → Confirm signup
// The user clicks the link and is prompted to set their password
async function sbRegister(name, email, department) {
  // We use signUp without a password — Supabase sends a "Confirm your email" link
  // After clicking the link, the user can set their password via the redirect
  // This requires: Auth → Settings → "Enable email confirmations" = ON
  // and set Site URL to the URL of this app
  return await sb.auth.signUp({
    email,
    password: crypto.randomUUID(), // temporary — user will reset via email link
    options: {
      data: { name, department, role: 'trainee' },
      emailRedirectTo: window.location.origin + (window.location.pathname.includes('index') ? window.location.pathname : '/index.html') + '?setpassword=1',
    }
  });
}

// ── Courses ───────────────────────────────────────────────
async function sbLoadCourses() {
  const { data, error } = await sb
    .from('courses_with_count')
    .select('*, course_agenda(*), course_requirements(*)')
    .order('created_at', { ascending: false });
  if (error) { console.error('loadCourses', error); return []; }
  return data || [];
}

async function sbLoadMyEnrollments(userId) {
  const { data } = await sb
    .from('enrollments')
    .select('course_id')
    .eq('user_id', userId);
  return (data || []).map(e => e.course_id);
}

async function sbEnroll(userId, courseId) {
  return await sb.from('enrollments').insert({ user_id: userId, course_id: courseId });
}

// ── Users (manager view) ──────────────────────────────────
async function sbLoadAllUsers() {
  const { data } = await sb.from('enrollments_with_profile').select('*');
  const map = {};
  (data || []).forEach(e => {
    if (!map[e.user_id]) map[e.user_id] = { id: e.user_id, name: e.user_name, email: e.user_email, department: e.user_department, courses: [] };
    map[e.user_id].courses.push(e.course_id);
  });
  return Object.values(map);
}

// ── Attendance ────────────────────────────────────────────
async function sbLoadAttendance(courseId, userId = null) {
  let q = sb.from('attendance').select('*').eq('course_id', courseId);
  if (userId) q = q.eq('user_id', userId);
  const { data } = await q;
  const map = {};
  (data || []).forEach(r => {
    if (!map[r.user_id]) map[r.user_id] = [];
    map[r.user_id][r.day_number - 1] = r.present;
  });
  return map;
}

async function sbMarkAttendance(courseId, userId, dayNumber, present, markedBy) {
  return await sb.from('attendance').upsert(
    { course_id: courseId, user_id: userId, day_number: dayNumber, present, marked_by: markedBy },
    { onConflict: 'user_id,course_id,day_number' }
  );
}

// ── Course CRUD ───────────────────────────────────────────
async function sbSaveCourse(courseData, editId, agenda, reqs) {
  let courseId = editId;
  if (editId) {
    const { error } = await sb.from('courses').update(courseData).eq('id', editId);
    if (error) return { error };
  } else {
    const { data, error } = await sb.from('courses').insert(courseData).select().single();
    if (error) return { error };
    courseId = data.id;
  }

  // Replace agenda
  await sb.from('course_agenda').delete().eq('course_id', courseId);
  if (agenda.length) {
    const { error } = await sb.from('course_agenda').insert(
      agenda.map((d, i) => ({
        course_id: courseId,
        day_number: d.day_number || i + 1,
        title: d.title || '',
        topics: d.topics || [],
        time_from: d.time_from || '',
        time_to: d.time_to || ''
      }))
    );
    if (error) console.error('agenda insert', error);
  }

  // Replace requirements
  await sb.from('course_requirements').delete().eq('course_id', courseId);
  const validReqs = reqs.filter(r => r.trim());
  if (validReqs.length) {
    await sb.from('course_requirements').insert(
      validReqs.map((r, i) => ({ course_id: courseId, requirement: r.trim(), sort_order: i + 1 }))
    );
  }

  return { courseId, error: null };
}

async function sbDeleteCourse(id) {
  return await sb.from('courses').delete().eq('id', id);
}
