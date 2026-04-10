// ══════════════════════════════════════════════════════════
//  i18n.js — Arabic / English translations
// ══════════════════════════════════════════════════════════

const TRANSLATIONS = {
  ar: {
    // ── App ──────────────────────────────────────────────
    appName: 'صندوق الرحمن',
    appSub: 'التكافلي الاجتماعي',
    appSystem: 'نظام إدارة الدورات التدريبية المتكامل',

    // ── Login ────────────────────────────────────────────
    login: 'تسجيل الدخول',
    loginSub: 'أدخل بيانات حسابك للمتابعة',
    email: 'البريد الإلكتروني',
    password: 'كلمة المرور',
    enterBtn: 'دخول',
    noAccount: 'ليس لديك حساب؟',
    createAccount: 'إنشاء حساب جديد',
    featLive: 'تسجيل حضور آني',
    featCert: 'شهادات معتمدة',
    featReport: 'تقارير مفصّلة',

    // ── Register ─────────────────────────────────────────
    registerTitle: 'إنشاء حساب جديد',
    registerSub: 'أدخل بياناتك وسيصلك رابط إنشاء كلمة المرور',
    fullName: 'الاسم الكامل',
    department: 'القسم / الجهة',
    registerBtn: 'إنشاء الحساب وإرسال الرابط',
    backToLogin: '← العودة لتسجيل الدخول',
    emailWillSend: 'سيصلك رابط على بريدك لإنشاء كلمة المرور',

    // ── Trainee ──────────────────────────────────────────
    traineePortal: 'بوابة المتدربين',
    welcomeMsg: 'أهلاً وسهلاً،',
    welcomeSub: 'اختر دورة تدريبية وابدأ رحلة تطويرك المهني',
    trainee: 'متدرب',
    logout: 'خروج',
    allCourses: 'جميع الدورات',
    myCourses: 'دوراتي',
    available: 'متاحة',
    availableCourses: 'الدورات المتاحة',
    myEnrolled: 'دوراتي المسجّلة',
    activeCourses: 'الدورات النشطة',
    completedCourses: 'الدورات المكتملة',
    noCoursesFilter: 'لا توجد دورات في هذا التصنيف',

    // ── Course card ──────────────────────────────────────
    enrolled: 'مسجّل',
    attendanceRecord: 'سجل الحضور',
    attendedDays: 'حضور',
    days: 'أيام',

    // ── Course detail ────────────────────────────────────
    overview: 'نظرة عامة',
    agenda: 'جدول الأيام',
    requirements: 'الشروط',
    myAttendance: 'حضوري',
    startDate: 'تاريخ البداية',
    endDate: 'تاريخ الانتهاء',
    duration: 'المدة',
    instructor: 'المدرب',
    location: 'المكان',
    seatsLeft: 'المقاعد المتبقية',
    readyToJoin: 'هل أنت مستعد للانضمام؟',
    freeCourse: 'الدورة مجانية بالكامل — تأكد من استيفاء الشروط أولاً',
    enrollFree: 'التسجيل مجاناً',
    seatsFull: 'المقاعد ممتلئة',
    free: 'مجانية',
    dayLabel: 'اليوم',
    requirementsTitle: 'شروط ومتطلبات الالتحاق',
    requirementsNote: 'هذه الدورة مجانية بالكامل وتقدمها المنشأة لمنتسبيها. عدم الالتزام بالشروط قد يؤدي إلى إلغاء التسجيل.',
    enrollToTrack: 'سجّل في الدورة لمتابعة حضورك',
    presentDays: 'أيام الحضور',
    absentDays: 'أيام الغياب',
    upcomingDays: 'أيام قادمة',
    present: 'حاضر',
    absent: 'غائب',
    notRecorded: 'لم يسجّل',
    certEligible: 'مؤهّل للحصول على الشهادة!',
    attendancePct: 'نسبة حضورك',
    back: '← رجوع',

    // ── Manager ──────────────────────────────────────────
    managerDash: 'لوحة تحكم المدير',
    managerDashSub: 'نظرة شاملة على الدورات التدريبية والمتدربين',
    newCourse: 'دورة جديدة',
    courseManager: 'مدير الدورة',
    totalCourses: 'إجمالي الدورات',
    totalTrainees: 'إجمالي المتدربين',
    totalEnrollments: 'إجمالي التسجيلات',
    trainingCourses: 'الدورات التدريبية',
    enrolledTrainees: 'المتدربون المسجّلون',
    courseCol: 'الدورة',
    categoryCol: 'الفئة',
    durationCol: 'المدة',
    dateCol: 'التاريخ',
    traineesCol: 'المتدربون',
    statusCol: 'الحالة',
    actionsCol: 'إجراءات',
    nameCol: 'الاسم',
    emailCol: 'البريد الإلكتروني',
    regDateCol: 'تاريخ التسجيل',
    coursesCol: 'الدورات',
    attendanceBtn: 'الحضور',
    editBtn: 'تعديل',
    deleteBtn: 'حذف',
    deleteConfirm: 'هل أنت متأكد من حذف هذه الدورة؟',

    // ── Status badges ────────────────────────────────────
    statusActive: 'نشطة',
    statusUpcoming: 'قادمة',
    statusEnded: 'منتهية',

    // ── Attendance ───────────────────────────────────────
    attendanceTitle: 'إدارة سجل الحضور والغياب',
    attendanceSub: 'سجل الحضور —',
    noTrainees: 'لا يوجد متدربون مسجّلون بعد',
    summary: 'الملخص',

    // ── Editor ───────────────────────────────────────────
    createCourse: 'إنشاء دورة جديدة',
    editCourse: 'تعديل بيانات الدورة',
    savePublish: 'حفظ ونشر',
    cancel: 'إلغاء',
    basicInfo: 'المعلومات الأساسية',
    courseTitleLbl: 'عنوان الدورة *',
    courseTitlePh: 'مثال: دورة إدارة المشاريع الاحترافية',
    courseDescLbl: 'وصف الدورة',
    categoryLbl: 'الفئة',
    instructorLbl: 'المدرب / المحاضر',
    instructorPh: 'د. محمد أحمد',
    startDateLbl: 'تاريخ البداية',
    endDateLbl: 'تاريخ الانتهاء',
    daysLbl: 'عدد الأيام',
    locationLbl: 'مكان الدورة',
    locationPh: 'قاعة التدريب A',
    maxSeatsLbl: 'الحد الأقصى للمتدربين',
    statusLbl: 'الحالة',
    courseIcon: 'أيقونة الدورة',
    courseColor: 'لون الدورة',
    enrollReqs: 'شروط الالتحاق',
    addReq: '+ إضافة شرط',
    daySchedule: 'جدول الأيام',
    addDay: '+ إضافة يوم',
    savePublishBtn: 'حفظ ونشر الدورة',
    enterTitleErr: 'يرجى إدخال عنوان الدورة',
    fieldsFillErr: 'يرجى ملء جميع الحقول',
    savedMsg: '✅ تم حفظ التعديلات',
    publishedMsg: '🎉 تم نشر الدورة!',
    enrolledMsg: '✅ تم التسجيل في',
    enrolledMsg2: 'بنجاح!',
    deletedMsg: 'تم حذف الدورة',
    loginErr: 'بيانات الدخول غير صحيحة',
    fillAllErr: 'يرجى ملء جميع الحقول',
    welcomeNotif: 'أهلاً بك،',
    registerOk: '✅ تم! تحقق من بريدك الإلكتروني للرابط',
    reqPh: 'الشرط',
    dayTitlePh: 'عنوان اليوم...',
    topicsPh: 'المواضيع مفصولة بفاصلة...',
    timeFrom: 'من',
    timeTo: 'إلى',

    // ── Categories ───────────────────────────────────────
    catAdmin: 'إدارية',
    catTech: 'تقنية',
    catOps: 'تشغيلية',
    catLead: 'قيادية',
    catFin: 'مالية',
    catHR: 'موارد بشرية',

    // ── Icon labels ──────────────────────────────────────
    iconBook: 'عام',
    iconShield: 'سلامة',
    iconTrophy: 'قيادة',
    iconChart: 'إدارة',
    iconTeacher: 'تعليمي',
    iconUsers: 'جماعي',
    iconRocket: 'تطوير',
    iconAtt: 'حضور',

    // ── Language switcher ────────────────────────────────
    langLabel: 'EN',
  },

  en: {
    // ── App ──────────────────────────────────────────────
    appName: 'Al-Rahman Fund',
    appSub: 'Social Solidarity',
    appSystem: 'Integrated Training Course Management System',

    // ── Login ────────────────────────────────────────────
    login: 'Sign In',
    loginSub: 'Enter your account credentials to continue',
    email: 'Email Address',
    password: 'Password',
    enterBtn: 'Sign In',
    noAccount: "Don't have an account?",
    createAccount: 'Create New Account',
    featLive: 'Live Attendance Tracking',
    featCert: 'Accredited Certificates',
    featReport: 'Detailed Reports',

    // ── Register ─────────────────────────────────────────
    registerTitle: 'Create New Account',
    registerSub: 'Enter your details and a password setup link will be emailed to you',
    fullName: 'Full Name',
    department: 'Department / Organization',
    registerBtn: 'Create Account & Send Link',
    backToLogin: '← Back to Sign In',
    emailWillSend: 'A setup link will be sent to your email',

    // ── Trainee ──────────────────────────────────────────
    traineePortal: 'Trainee Portal',
    welcomeMsg: 'Welcome,',
    welcomeSub: 'Choose a training course and start your professional development journey',
    trainee: 'Trainee',
    logout: 'Sign Out',
    allCourses: 'All Courses',
    myCourses: 'My Courses',
    available: 'Available',
    availableCourses: 'Available Courses',
    myEnrolled: 'My Enrolled Courses',
    activeCourses: 'Active Courses',
    completedCourses: 'Completed Courses',
    noCoursesFilter: 'No courses in this category',

    // ── Course card ──────────────────────────────────────
    enrolled: 'Enrolled',
    attendanceRecord: 'Attendance Record',
    attendedDays: 'Attended',
    days: 'days',

    // ── Course detail ────────────────────────────────────
    overview: 'Overview',
    agenda: 'Day Schedule',
    requirements: 'Requirements',
    myAttendance: 'My Attendance',
    startDate: 'Start Date',
    endDate: 'End Date',
    duration: 'Duration',
    instructor: 'Instructor',
    location: 'Location',
    seatsLeft: 'Seats Remaining',
    readyToJoin: 'Ready to Join?',
    freeCourse: 'This course is completely free — make sure you meet the requirements first',
    enrollFree: 'Enroll for Free',
    seatsFull: 'Seats Full',
    free: 'Free',
    dayLabel: 'Day',
    requirementsTitle: 'Enrollment Requirements',
    requirementsNote: 'This course is completely free and provided by the organization to its members. Non-compliance with requirements may result in enrollment cancellation.',
    enrollToTrack: 'Enroll in the course to track your attendance',
    presentDays: 'Days Present',
    absentDays: 'Days Absent',
    upcomingDays: 'Upcoming Days',
    present: 'Present',
    absent: 'Absent',
    notRecorded: 'Not Recorded',
    certEligible: 'Eligible for Certificate!',
    attendancePct: 'Your attendance rate is',
    back: '← Back',

    // ── Manager ──────────────────────────────────────────
    managerDash: 'Manager Dashboard',
    managerDashSub: 'Comprehensive overview of training courses and trainees',
    newCourse: 'New Course',
    courseManager: 'Course Manager',
    totalCourses: 'Total Courses',
    totalTrainees: 'Total Trainees',
    totalEnrollments: 'Total Enrollments',
    trainingCourses: 'Training Courses',
    enrolledTrainees: 'Enrolled Trainees',
    courseCol: 'Course',
    categoryCol: 'Category',
    durationCol: 'Duration',
    dateCol: 'Date',
    traineesCol: 'Trainees',
    statusCol: 'Status',
    actionsCol: 'Actions',
    nameCol: 'Name',
    emailCol: 'Email',
    regDateCol: 'Registration Date',
    coursesCol: 'Courses',
    attendanceBtn: 'Attendance',
    editBtn: 'Edit',
    deleteBtn: 'Delete',
    deleteConfirm: 'Are you sure you want to delete this course?',

    // ── Status badges ────────────────────────────────────
    statusActive: 'Active',
    statusUpcoming: 'Upcoming',
    statusEnded: 'Ended',

    // ── Attendance ───────────────────────────────────────
    attendanceTitle: 'Attendance & Absence Management',
    attendanceSub: 'Attendance Record —',
    noTrainees: 'No enrolled trainees yet',
    summary: 'Summary',

    // ── Editor ───────────────────────────────────────────
    createCourse: 'Create New Course',
    editCourse: 'Edit Course Details',
    savePublish: 'Save & Publish',
    cancel: 'Cancel',
    basicInfo: 'Basic Information',
    courseTitleLbl: 'Course Title *',
    courseTitlePh: 'e.g. Professional Project Management',
    courseDescLbl: 'Course Description',
    categoryLbl: 'Category',
    instructorLbl: 'Instructor / Lecturer',
    instructorPh: 'Dr. Mohammed Ahmed',
    startDateLbl: 'Start Date',
    endDateLbl: 'End Date',
    daysLbl: 'Number of Days',
    locationLbl: 'Course Location',
    locationPh: 'Training Hall A',
    maxSeatsLbl: 'Maximum Trainees',
    statusLbl: 'Status',
    courseIcon: 'Course Icon',
    courseColor: 'Course Color',
    enrollReqs: 'Enrollment Requirements',
    addReq: '+ Add Requirement',
    daySchedule: 'Day Schedule',
    addDay: '+ Add Day',
    savePublishBtn: 'Save & Publish Course',
    enterTitleErr: 'Please enter a course title',
    fieldsFillErr: 'Please fill in all fields',
    savedMsg: '✅ Changes saved',
    publishedMsg: '🎉 Course published!',
    enrolledMsg: '✅ Successfully enrolled in',
    enrolledMsg2: '!',
    deletedMsg: 'Course deleted',
    loginErr: 'Invalid credentials',
    fillAllErr: 'Please fill in all fields',
    welcomeNotif: 'Welcome,',
    registerOk: '✅ Done! Check your email for the setup link',
    reqPh: 'Requirement',
    dayTitlePh: 'Day title...',
    topicsPh: 'Topics separated by comma...',
    timeFrom: 'From',
    timeTo: 'To',

    // ── Categories ───────────────────────────────────────
    catAdmin: 'Administrative',
    catTech: 'Technical',
    catOps: 'Operational',
    catLead: 'Leadership',
    catFin: 'Financial',
    catHR: 'Human Resources',

    // ── Icon labels ──────────────────────────────────────
    iconBook: 'General',
    iconShield: 'Safety',
    iconTrophy: 'Leadership',
    iconChart: 'Management',
    iconTeacher: 'Educational',
    iconUsers: 'Group',
    iconRocket: 'Development',
    iconAtt: 'Attendance',

    // ── Language switcher ────────────────────────────────
    langLabel: 'عربي',
  }
};

// ── Current language state ────────────────────────────────
let LANG = localStorage.getItem('lang') || 'ar';

function t(key) {
  return TRANSLATIONS[LANG][key] || TRANSLATIONS['ar'][key] || key;
}

function setLang(lang) {
  LANG = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  // Re-render current page
  if (typeof onLangChange === 'function') onLangChange();
}

function toggleLang() {
  setLang(LANG === 'ar' ? 'en' : 'ar');
}

// Apply on load
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.lang = LANG;
  document.documentElement.dir = LANG === 'ar' ? 'rtl' : 'ltr';
});
