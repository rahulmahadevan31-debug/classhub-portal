import React, { useState, useEffect, useMemo } from 'react';

const Icon = ({ name, className = "w-5 h-5", ...props }) => {
  const icons = {
    home: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    ),
    academic: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    ),
    assignments: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    ),
    subjects: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    ),
    cpTracker: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    ),
    attendance: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    rollCall: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    ),
    tasks: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    ),
    users: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    ),
    notices: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    ),
    plus: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
    ),
    check: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    ),
    x: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    ),
    search: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    ),
    moon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    ),
    sun: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    ),
    alert: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    ),
    trash: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    ),
    star: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    ),
    user: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    ),
    download: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    )
  };

  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      {icons[name] || icons.home}
    </svg>
  );
};

// ZERO-DATA CLEAN SLATE: Only faculties create classes, subjects, students, and curriculum.
const EMPTY_INITIAL_DATA = {
  classes: [],     // { id, name, section, academicYear }
  students: [],    // { id, name, email, roll, classId }
  faculties: [
    { id: "fac-admin-1", name: "Dr. Faculty Admin", email: "admin.faculty@psgim.ac.in", designation: "Faculty Coordinator" }
  ],
  subjects: [],    // { id, classId, code, name, facultyEmail, facultyName, credits, totalClasses }
  assignments: [], // { id, classId, subjectId, title, desc, due, maxMarks, rubricWeights, postedBy }
  submissions: [], // { id, asgId, studentEmail, studentName, content, submittedAt, marks, rubric, feedback }
  cpLogs: [],      // { id, classId, subjectId, studentEmail, studentName, facultyEmail, points, category, note, date }
  rollCalls: [],   // { id, classId, subjectId, date, presentEmails: [] }
  notices: [],     // { id, classId, title, category, msg, pinned, author, date }
  tasks: []        // { id, studentEmail, classId, title, topic, due, priority, done }
};

const STORAGE_KEY = "classhub_isolated_db_v2";

export default function App() {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed.classes)) return parsed;
      }
    } catch (e) {
      console.warn("Storage load error:", e);
    }
    return EMPTY_INITIAL_DATA;
  });

  // Current session user: either Faculty (Admin) or a specific enrolled Student
  const [currentUser, setCurrentUser] = useState(() => {
    return {
      role: "faculty",
      name: "Dr. Faculty Admin",
      email: "admin.faculty@psgim.ac.in",
      designation: "Program Coordinator"
    };
  });

  const [activeTab, setActiveTab] = useState("home");
  const [selectedClassId, setSelectedClassId] = useState("");
  const [theme, setTheme] = useState(() => localStorage.getItem("classhub_theme") || "light");

  // Custom alert & confirmation modals (Zero browser alerts/confirms)
  const [toast, setToast] = useState(null);
  const showToast = (message, type = "info") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3600);
  };

  const [confirmModal, setConfirmModal] = useState(null);

  // Form modals state
  const [showClassModal, setShowClassModal] = useState(false);
  const [showSubjectModal, setShowSubjectModal] = useState(false);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [showCsvStudentModal, setShowCsvStudentModal] = useState(false);
  const [showAsgModal, setShowAsgModal] = useState(false);
  const [showGradeModal, setShowGradeModal] = useState(null);
  const [showCpModal, setShowCpModal] = useState(false);
  const [showRollCallModal, setShowRollCallModal] = useState(false);
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showSwitchUserModal, setShowSwitchUserModal] = useState(false);

  // Roll call dynamic state
  const [rollCallSubId, setRollCallSubId] = useState("");
  const [rollCallRoster, setRollCallRoster] = useState({});

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (err) {
      console.error("Local persistence error:", err);
    }
  }, [data]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("classhub_theme", theme);
  }, [theme]);

  // Keep a valid active class selected if classes exist
  useEffect(() => {
    if (data.classes.length > 0 && (!selectedClassId || !data.classes.some(c => c.id === selectedClassId))) {
      setSelectedClassId(data.classes[0].id);
    }
  }, [data.classes, selectedClassId]);

  const isFaculty = currentUser.role === "faculty";
  const isStudent = currentUser.role === "student";

  // If student is logged in, their class is strictly their enrolled class!
  const effectiveClassId = isStudent ? currentUser.classId : selectedClassId;
  const currentClass = useMemo(() => {
    return data.classes.find(c => c.id === effectiveClassId) || null;
  }, [data.classes, effectiveClassId]);

  // STRICT ISOLATION 1: Subjects strictly belonging to this Class
  const classSubjects = useMemo(() => {
    if (!effectiveClassId) return [];
    return data.subjects.filter(s => s.classId === effectiveClassId);
  }, [data.subjects, effectiveClassId]);

  // STRICT ISOLATION 2: The faculties for this class (e.g. 9 faculties for 9 subjects)
  const classFaculties = useMemo(() => {
    const facultyMap = new Map();
    classSubjects.forEach(sub => {
      if (sub.facultyEmail && !facultyMap.has(sub.facultyEmail)) {
        facultyMap.set(sub.facultyEmail, {
          name: sub.facultyName || "Subject Professor",
          email: sub.facultyEmail,
          subjects: []
        });
      }
      if (sub.facultyEmail) {
        facultyMap.get(sub.facultyEmail).subjects.push(sub.name);
      }
    });
    return Array.from(facultyMap.values());
  }, [classSubjects]);

  // STRICT ISOLATION 3: Students strictly enrolled in this Class
  const classStudents = useMemo(() => {
    if (!effectiveClassId) return [];
    return data.students.filter(s => s.classId === effectiveClassId);
  }, [data.students, effectiveClassId]);

  // STRICT ISOLATION 4: Assignments strictly for this Class's subjects
  const classAssignments = useMemo(() => {
    if (!effectiveClassId) return [];
    return data.assignments.filter(a => a.classId === effectiveClassId);
  }, [data.assignments, effectiveClassId]);

  // STRICT ISOLATION 5: Class notices
  const classNotices = useMemo(() => {
    if (!effectiveClassId) return [];
    return data.notices.filter(n => n.classId === effectiveClassId || n.classId === "all");
  }, [data.notices, effectiveClassId]);

  // Attendance radar calculation for student (against 75% rule)
  const studentAttendanceStats = useMemo(() => {
    if (!isStudent || !currentClass) return [];

    return classSubjects.map(sub => {
      // Find all roll calls conducted for this subject in this class
      const subjectSessions = data.rollCalls.filter(rc => rc.classId === effectiveClassId && rc.subjectId === sub.id);
      const totalSessions = Math.max(subjectSessions.length, sub.totalClasses ? Math.min(subjectSessions.length, sub.totalClasses) : subjectSessions.length);
      
      const attendedCount = subjectSessions.filter(rc => rc.presentEmails && rc.presentEmails.includes(currentUser.email)).length;
      const effectiveTotal = Math.max(1, subjectSessions.length);
      const percentage = subjectSessions.length === 0 ? 100 : Math.round((attendedCount / effectiveTotal) * 100);
      const isAtRisk = percentage < 75;

      let classesNeededToClear = 0;
      if (isAtRisk && subjectSessions.length > 0) {
        classesNeededToClear = Math.max(1, Math.ceil((0.75 * effectiveTotal - attendedCount) / 0.25));
      }

      return {
        subject: sub,
        attended: attendedCount,
        conducted: subjectSessions.length,
        percentage,
        isAtRisk,
        classesNeededToClear
      };
    });
  }, [isStudent, currentClass, classSubjects, data.rollCalls, effectiveClassId, currentUser]);

  const formatDate = (iso) => {
    if (!iso) return "No date";
    try {
      return new Date(iso).toLocaleDateString("en-IN", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch (e) {
      return iso;
    }
  };

  const handleResetToClean = () => {
    setConfirmModal({
      title: "Wipe All Data & Start Fresh?",
      message: "This will remove all classes, subjects, students, assignments, and attendance logs. Only clean admin faculty access will remain.",
      confirmText: "Wipe Everything",
      onConfirm: () => {
        setData(EMPTY_INITIAL_DATA);
        setSelectedClassId("");
        setCurrentUser({
          role: "faculty",
          name: "Dr. Faculty Admin",
          email: "admin.faculty@psgim.ac.in",
          designation: "Program Coordinator"
        });
        showToast("Database cleared to zero-data state!", "success");
        setConfirmModal(null);
      }
    });
  };

  const handleExportBackup = () => {
    try {
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `classhub_data_${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast("Data backup saved as JSON.", "success");
    } catch (e) {
      showToast("Export failed.", "error");
    }
  };

  const navTabs = [
    { id: "home", label: "Dashboard", icon: "home" },
    ...(isFaculty 
      ? [
          { id: "classes", label: "Classes & 9 Subjects", icon: "academic" },
          { id: "students", label: "Cohort Students", icon: "users", badge: classStudents.length },
          { id: "rollcall", label: "Lecture Roll-Call", icon: "rollCall" },
          { id: "cp", label: "CP & Cold-Calls", icon: "cpTracker" },
        ]
      : [
          { id: "subjects", label: "My 9 Subjects & Faculty", icon: "subjects" },
          { id: "attendance", label: "75% Attendance Radar", icon: "attendance" },
          { id: "mycp", label: "My CP Performance", icon: "cpTracker" },
          { id: "tasks", label: "Task Checklist", icon: "tasks" },
        ]
    ),
    { id: "asg", label: "Assignments", icon: "assignments", badge: classAssignments.length },
    { id: "notices", label: "Circulars", icon: "notices" }
  ];

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* Toast popup */}
      {toast && (
        <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl border text-xs font-semibold animate-fadeIn ${
          toast.type === "error" 
            ? "bg-rose-50 border-rose-200 text-rose-800 dark:bg-rose-950 dark:border-rose-800 dark:text-rose-200"
            : toast.type === "success"
            ? "bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-950 dark:border-emerald-800 dark:text-emerald-200"
            : "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-200"
        }`}>
          <Icon name={toast.type === "error" ? "alert" : "check"} className="w-4 h-4 flex-shrink-0" />
          <span>{toast.message}</span>
          <button onClick={() => setToast(null)} className="ml-2 hover:opacity-70">
            <Icon name="x" className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Confirmation modal */}
      {confirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center gap-3 text-rose-600 mb-3">
              <Icon name="alert" className="w-6 h-6" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{confirmModal.title}</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {confirmModal.message}
            </p>
            <div className="flex justify-end gap-2.5">
              <button 
                onClick={() => setConfirmModal(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
              <button 
                onClick={confirmModal.onConfirm}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-700 text-white shadow-sm"
              >
                {confirmModal.confirmText || "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header bar */}
      <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 lg:px-8 py-2.5 flex items-center justify-between gap-4">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-500/20">
            C
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base tracking-tight bg-gradient-to-r from-blue-700 to-indigo-600 dark:from-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">
                ClassHub
              </span>
              <span className={`text-[10px] uppercase font-black tracking-wider px-2 py-0.5 rounded border ${
                isFaculty 
                  ? "bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-800"
                  : "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800"
              }`}>
                {isFaculty ? "Faculty Admin Mode" : "Student Mode"}
              </span>
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
              {currentClass ? `Class: ${currentClass.name} (${currentClass.section || "Sec 1"})` : "No Class Selected"}
            </p>
          </div>
        </div>

        {/* Faculty Active Class Picker */}
        {isFaculty && data.classes.length > 0 && (
          <div className="hidden md:flex items-center gap-2">
            <span className="text-xs text-slate-400 font-medium">Managing Class:</span>
            <select
              value={selectedClassId}
              onChange={(e) => setSelectedClassId(e.target.value)}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none"
            >
              {data.classes.map(c => (
                <option key={c.id} value={c.id}>{c.name} ({c.section})</option>
              ))}
            </select>
          </div>
        )}

        {/* Profile and Switcher Controls */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setShowSwitchUserModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-blue-300 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold hover:bg-blue-100 transition shadow-sm"
          >
            <Icon name="user" className="w-3.5 h-3.5" />
            <span>Switch Role / User</span>
          </button>

          <button
            onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition"
            title="Toggle Theme"
          >
            <Icon name={theme === 'light' ? 'moon' : 'sun'} className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Layout Area */}
      <div className="flex-1 flex max-w-[1600px] w-full mx-auto">
        
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex flex-col w-64 p-4 border-r border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm sticky top-[57px] h-[calc(100vh-57px)] justify-between">
          <div className="space-y-6">
            
            {/* Active User Card */}
            <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs">
              <div className="text-[10px] uppercase font-bold text-slate-400">Logged In As</div>
              <div className="font-extrabold text-slate-900 dark:text-white truncate mt-0.5">{currentUser.name}</div>
              <div className="text-[11px] text-slate-500 truncate">{currentUser.email}</div>
              {isStudent && (
                <div className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-700 font-mono text-[11px] text-blue-600 dark:text-blue-400">
                  Roll: {currentUser.roll || "N/A"}
                </div>
              )}
            </div>

            {/* Navigation Tabs */}
            <nav className="space-y-1">
              <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                {isFaculty ? "Faculty Controls" : "My Student Portal"}
              </p>
              {navTabs.map(t => {
                const active = activeTab === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition ${
                      active
                        ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-600/20"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon name={t.icon} className={`w-4 h-4 ${active ? "text-white" : "text-slate-400"}`} />
                      <span>{t.label}</span>
                    </div>
                    {t.badge > 0 && (
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        active ? "bg-white/20 text-white" : "bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300"
                      }`}>
                        {t.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

          </div>

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
            <button
              onClick={handleExportBackup}
              className="w-full flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-[11px] font-semibold transition"
            >
              <Icon name="download" className="w-3.5 h-3.5 text-blue-500" />
              <span>Export JSON Backup</span>
            </button>
            {isFaculty && (
              <button
                onClick={handleResetToClean}
                className="w-full text-left px-3 py-1 text-slate-400 hover:text-rose-500 text-[11px] font-medium transition"
              >
                Clean Wipe (Zero Data)
              </button>
            )}
          </div>
        </aside>

        <main className="flex-1 p-4 lg:p-8 pb-24 md:pb-8 overflow-y-auto">
          
          {/* TAB 1: DASHBOARD */}
          {activeTab === "home" && (
            <div className="space-y-6 animate-fadeIn">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-black text-slate-900 dark:text-white">
                    Hello, {currentUser.name.split(" ")[0]} 👋
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {isFaculty 
                      ? "Faculty Management Console • Create and administer classes, 9 subjects, and student cohorts."
                      : `Enrolled in ${currentClass?.name || "Class"} • Showing your respective faculties and subjects.`}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {isFaculty ? (
                    <>
                      <button
                        onClick={() => setShowClassModal(true)}
                        className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition"
                      >
                        <Icon name="plus" className="w-4 h-4" />
                        <span>Create Class</span>
                      </button>
                      {currentClass && (
                        <button
                          onClick={() => setShowSubjectModal(true)}
                          className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                        >
                          <Icon name="plus" className="w-4 h-4 text-blue-600" />
                          <span>Add Subject & Faculty</span>
                        </button>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => setShowTaskModal(true)}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition shadow-sm"
                    >
                      <Icon name="plus" className="w-4 h-4" />
                      <span>Add Study Task</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Zero-Class Warning for First Launch */}
              {!currentClass && (
                <div className="p-8 text-center bg-white dark:bg-slate-900 border-2 border-dashed border-slate-300 dark:border-slate-800 rounded-2xl space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600">
                    <Icon name="academic" className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                      No Classes Created Yet
                    </h3>
                    <p className="text-xs text-slate-500 max-w-md mx-auto mt-1">
                      As a faculty member, you have full admin permissions. Click "Create Class" above to set up your first cohort (e.g. MBA Batch 2025-27 Section A), then add up to 9 subjects with their respective faculties.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowClassModal(true)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow-sm"
                  >
                    + Create First Class
                  </button>
                </div>
              )}

              {/* Metrics Grid */}
              {currentClass && (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Enrolled Students
                    </div>
                    <div className="text-2xl font-black text-slate-900 dark:text-white">
                      {classStudents.length}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">In this class</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Subjects & Professors
                    </div>
                    <div className="text-2xl font-black text-blue-600 dark:text-blue-400">
                      {classSubjects.length}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">{classFaculties.length} faculty members</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Assignments
                    </div>
                    <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
                      {classAssignments.length}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">For this syllabus</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Roll-Call Sessions
                    </div>
                    <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                      {data.rollCalls.filter(r => r.classId === effectiveClassId).length}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">Classes conducted</div>
                  </div>
                </div>
              )}

              {/* Student Debarment Alert if At Risk */}
              {isStudent && studentAttendanceStats.some(s => s.isAtRisk) && (
                <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-900 dark:text-rose-200 flex items-start gap-3">
                  <Icon name="alert" className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 text-xs">
                    <span className="font-bold">Debarment Warning:</span> You have an attendance shortage in{" "}
                    {studentAttendanceStats.filter(s => s.isAtRisk).map(s => `${s.subject.name} (${s.percentage}%)`).join(", ")}.
                    PSGIM regulations require a minimum of 75% attendance to sit for end-term comprehensive exams.
                  </div>
                  <button 
                    onClick={() => setActiveTab("attendance")}
                    className="px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold transition flex-shrink-0"
                  >
                    View Debarment Radar
                  </button>
                </div>
              )}

              {/* Respective Faculties & 9 Subjects Card */}
              {currentClass && (
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                        <Icon name="subjects" className="w-4 h-4 text-blue-600" />
                        <span>Curriculum Subjects & Assigned Faculties</span>
                      </h3>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {isStudent ? "You can only view your enrolled class's subjects and respective professors." : "Manage the 9 subjects and map each to its designated faculty member."}
                      </p>
                    </div>

                    {isFaculty && (
                      <button
                        onClick={() => setShowSubjectModal(true)}
                        className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold transition"
                      >
                        + Add Subject
                      </button>
                    )}
                  </div>

                  {classSubjects.length === 0 ? (
                    <div className="p-6 text-center text-xs text-slate-400 bg-slate-50 dark:bg-slate-850 rounded-xl">
                      No subjects added to this class yet. {isFaculty && "Click '+ Add Subject' to configure the 9 subjects."}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {classSubjects.map((sub, idx) => (
                        <div key={sub.id} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-xs space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                              {sub.code || `SUB-${idx+1}`}
                            </span>
                            <span className="text-[10px] text-slate-400 font-semibold">
                              {sub.credits || 3} Credits
                            </span>
                          </div>

                          <div className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                            {sub.name}
                          </div>

                          <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-[11px]">
                            <div className="text-slate-600 dark:text-slate-300 truncate">
                              👨‍🏫 <span className="font-semibold">{sub.facultyName || "Faculty"}</span>
                            </div>
                            <span className="text-[10px] text-slate-400">
                              {sub.totalClasses || 24} Classes
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

            </div>
          )}

          {/* TAB 2: FACULTY - CLASSES & SUBJECTS SETUP */}
          {activeTab === "classes" && isFaculty && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-black text-slate-900 dark:text-white">
                    Class & Subject Configuration
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Set up your MBA classes and define the 9 subjects and their respective faculty members.
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowClassModal(true)}
                    className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition"
                  >
                    + New Class
                  </button>
                </div>
              </div>

              {/* Classes List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.classes.map(c => {
                  const subs = data.subjects.filter(s => s.classId === c.id);
                  const stus = data.students.filter(s => s.classId === c.id);
                  const isCurrent = c.id === selectedClassId;

                  return (
                    <div 
                      key={c.id} 
                      className={`p-5 rounded-2xl border transition bg-white dark:bg-slate-900 space-y-4 ${
                        isCurrent ? "border-blue-500 ring-2 ring-blue-500/20 shadow-md" : "border-slate-200 dark:border-slate-800"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                            Academic Cohort
                          </span>
                          <h3 className="font-black text-lg text-slate-900 dark:text-white">
                            {c.name} ({c.section})
                          </h3>
                          <div className="text-xs text-slate-400">{c.academicYear || "Year 2025-27"}</div>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => {
                              setSelectedClassId(c.id);
                              showToast(`Switched active management to ${c.name}`, "info");
                            }}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                              isCurrent 
                                ? "bg-blue-600 text-white" 
                                : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                            }`}
                          >
                            {isCurrent ? "Active Class" : "Select Class"}
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-850">
                          <span className="text-slate-400 block text-[10px] font-bold">STUDENTS</span>
                          <span className="font-extrabold text-sm">{stus.length} Candidates</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-850">
                          <span className="text-slate-400 block text-[10px] font-bold">SUBJECTS</span>
                          <span className="font-extrabold text-sm">{subs.length} Registered</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs">
                        <button
                          onClick={() => {
                            setSelectedClassId(c.id);
                            setShowSubjectModal(true);
                          }}
                          className="font-bold text-blue-600 hover:underline"
                        >
                          + Add Subject to this Class
                        </button>
                        <button
                          onClick={() => {
                            setConfirmModal({
                              title: `Delete Class ${c.name}?`,
                              message: "This will remove this class and its respective subjects and student roster.",
                              onConfirm: () => {
                                setData(prev => ({
                                  ...prev,
                                  classes: prev.classes.filter(x => x.id !== c.id),
                                  subjects: prev.subjects.filter(s => s.classId !== c.id),
                                  students: prev.students.filter(s => s.classId !== c.id)
                                }));
                                setConfirmModal(null);
                                showToast("Class deleted.", "info");
                              }
                            });
                          }}
                          className="text-slate-400 hover:text-rose-500"
                        >
                          <Icon name="trash" className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: FACULTY - COHORT STUDENTS ENROLLMENT */}
          {activeTab === "students" && isFaculty && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-black text-slate-900 dark:text-white">
                    {currentClass?.name || "Class"} • Student Roster
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Only faculty can enroll students into this class.
                  </p>
                </div>
                {currentClass && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowStudentModal(true)}
                      className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition"
                    >
                      + Add Student
                    </button>
                    <button
                      onClick={() => setShowCsvStudentModal(true)}
                      className="px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                    >
                      Bulk CSV Import
                    </button>
                  </div>
                )}
              </div>

              {classStudents.length === 0 ? (
                <div className="p-8 text-center bg-white dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-800 rounded-2xl text-xs text-slate-400">
                  No students enrolled in this class yet. Click "+ Add Student" or "Bulk CSV Import" to register students.
                </div>
              ) : (
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-slate-400 font-bold uppercase tracking-wider">
                      <tr>
                        <th className="p-3.5">Student Name</th>
                        <th className="p-3.5">Roll No</th>
                        <th className="p-3.5">Email</th>
                        <th className="p-3.5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {classStudents.map(stu => (
                        <tr key={stu.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition">
                          <td className="p-3.5 font-bold text-slate-900 dark:text-slate-100">
                            {stu.name}
                          </td>
                          <td className="p-3.5 font-mono text-slate-500">
                            {stu.roll}
                          </td>
                          <td className="p-3.5 font-mono text-slate-500">
                            {stu.email}
                          </td>
                          <td className="p-3.5 text-right">
                            <button
                              onClick={() => {
                                // Login preview as this student!
                                setCurrentUser({
                                  role: "student",
                                  name: stu.name,
                                  email: stu.email,
                                  roll: stu.roll,
                                  classId: stu.classId
                                });
                                setActiveTab("home");
                                showToast(`Previewing as student ${stu.name}`, "info");
                              }}
                              className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 font-bold text-[11px] hover:bg-blue-100 transition mr-2"
                            >
                              View As Student
                            </button>
                            <button
                              onClick={() => {
                                setData(prev => ({
                                  ...prev,
                                  students: prev.students.filter(s => s.id !== stu.id)
                                }));
                                showToast("Student removed from class.", "info");
                              }}
                              className="text-slate-400 hover:text-rose-500 transition"
                            >
                              <Icon name="x" className="w-4 h-4 inline" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: FACULTY - LECTURE ROLL CALL */}
          {activeTab === "rollcall" && isFaculty && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-black text-slate-900 dark:text-white">
                    Lecture Roll-Call Session
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Conduct roll call for any of the 9 subjects. Attendance percentage and debarment radars update live.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <select
                    value={rollCallSubId}
                    onChange={(e) => setRollCallSubId(e.target.value)}
                    className="px-3 py-2 text-xs font-bold rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700"
                  >
                    <option value="">-- Choose Subject --</option>
                    {classSubjects.map(s => (
                      <option key={s.id} value={s.id}>{s.code} - {s.name} ({s.facultyName})</option>
                    ))}
                  </select>
                </div>
              </div>

              {!rollCallSubId ? (
                <div className="p-8 text-center bg-white dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-800 rounded-2xl text-xs text-slate-400">
                  Please select one of the subjects above to begin taking roll call.
                </div>
              ) : (
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-5 space-y-4">
                  <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200 dark:border-slate-800">
                    <span className="font-bold text-slate-600 dark:text-slate-300">
                      Cohort: {currentClass?.name} • {classStudents.length} Students
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          const updated = {};
                          classStudents.forEach(s => { updated[s.email] = true; });
                          setRollCallRoster(updated);
                        }}
                        className="px-2.5 py-1 text-[11px] rounded font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                      >
                        Mark All Present
                      </button>
                      <button
                        onClick={() => {
                          const updated = {};
                          classStudents.forEach(s => { updated[s.email] = false; });
                          setRollCallRoster(updated);
                        }}
                        className="px-2.5 py-1 text-[11px] rounded font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300"
                      >
                        Mark All Absent
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {classStudents.map(stu => {
                      const isPresent = rollCallRoster[stu.email] !== false;
                      return (
                        <div key={stu.email} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 flex items-center justify-between text-xs">
                          <div>
                            <div className="font-bold text-slate-800 dark:text-slate-100">{stu.name}</div>
                            <div className="text-[11px] text-slate-400 font-mono">{stu.roll}</div>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setRollCallRoster(prev => ({ ...prev, [stu.email]: true }))}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                                isPresent 
                                  ? "bg-emerald-600 text-white shadow-sm" 
                                  : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                              }`}
                            >
                              Present
                            </button>
                            <button
                              onClick={() => setRollCallRoster(prev => ({ ...prev, [stu.email]: false }))}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                                !isPresent 
                                  ? "bg-rose-600 text-white shadow-sm" 
                                  : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                              }`}
                            >
                              Absent
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                    <button
                      onClick={() => {
                        const presentList = classStudents
                          .filter(s => rollCallRoster[s.email] !== false)
                          .map(s => s.email);

                        const newRollCall = {
                          id: `rc-${Date.now()}`,
                          classId: effectiveClassId,
                          subjectId: rollCallSubId,
                          date: new Date().toISOString(),
                          presentEmails: presentList
                        };

                        setData(prev => ({
                          ...prev,
                          rollCalls: [newRollCall, ...prev.rollCalls]
                        }));

                        showToast("Lecture roll-call committed to student attendance records!", "success");
                      }}
                      className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition"
                    >
                      Commit Attendance Record
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 5: FACULTY - CP & COLD CALL TRACKER */}
          {activeTab === "cp" && isFaculty && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-black text-slate-900 dark:text-white">
                    Class Participation (CP) Tracker
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Log Harvard-style case contribution points for students in {currentClass?.name}.
                  </p>
                </div>
                <button
                  onClick={() => setShowCpModal(true)}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition shadow-sm"
                >
                  + Log CP Score
                </button>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-bold uppercase tracking-wider text-slate-500">
                    Cohort CP Leaderboard ({classStudents.length} Students)
                  </span>
                  <span className="text-slate-400">Total Logs: {data.cpLogs.filter(c => c.classId === effectiveClassId).length}</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-slate-400 font-bold uppercase tracking-wider">
                      <tr>
                        <th className="p-3.5">Student</th>
                        <th className="p-3.5">Roll No</th>
                        <th className="p-3.5">Total CP</th>
                        <th className="p-3.5">Recent Quality</th>
                        <th className="p-3.5 text-right">Quick Award</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {classStudents.map(stu => {
                        const studentLogs = data.cpLogs.filter(l => l.studentEmail === stu.email && l.classId === effectiveClassId);
                        const total = studentLogs.reduce((acc, curr) => acc + curr.points, 0);
                        const latest = studentLogs[0];

                        return (
                          <tr key={stu.email} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition">
                            <td className="p-3.5 font-bold text-slate-900 dark:text-slate-100">{stu.name}</td>
                            <td className="p-3.5 font-mono text-slate-500">{stu.roll}</td>
                            <td className="p-3.5">
                              <span className="px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-extrabold text-xs">
                                ⭐ {total} pts
                              </span>
                            </td>
                            <td className="p-3.5">
                              {latest ? (
                                <span className="px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-[11px] font-semibold">
                                  {latest.category} ({latest.points}pts)
                                </span>
                              ) : (
                                <span className="text-slate-400 italic">No score yet</span>
                              )}
                            </td>
                            <td className="p-3.5 text-right space-x-1">
                              {[1, 2, 3].map(pts => (
                                <button
                                  key={pts}
                                  onClick={() => {
                                    const newLog = {
                                      id: `cp-${Date.now()}-${pts}`,
                                      classId: effectiveClassId,
                                      subjectId: classSubjects[0]?.id || "sub-1",
                                      studentEmail: stu.email,
                                      studentName: stu.name,
                                      facultyEmail: currentUser.email,
                                      points: pts,
                                      category: pts === 3 ? "Breakthrough Insight" : pts === 2 ? "Framework Rigor" : "Cold-Call",
                                      note: `Quick +${pts} awarded during discussion.`,
                                      date: new Date().toISOString()
                                    };
                                    setData(prev => ({ ...prev, cpLogs: [newLog, ...prev.cpLogs] }));
                                    showToast(`Awarded +${pts} CP to ${stu.name}!`, "success");
                                  }}
                                  className="px-2 py-1 rounded bg-slate-100 hover:bg-amber-100 dark:bg-slate-800 dark:hover:bg-amber-950 text-slate-700 hover:text-amber-800 dark:text-slate-300 dark:hover:text-amber-200 font-bold text-[10px] transition"
                                >
                                  +{pts}
                                </button>
                              ))}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB: STUDENT - MY 9 SUBJECTS & FACULTY */}
          {activeTab === "subjects" && isStudent && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h1 className="text-2xl font-black text-slate-900 dark:text-white">
                  My 9 Curriculum Subjects & Respective Faculty
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Enrolled in {currentClass?.name}. Only your respective professors and course codes are shown.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {classSubjects.map((sub, i) => (
                  <div key={sub.id} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                        {sub.code || `SUB-${i+1}`}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">{sub.credits || 3} Credits</span>
                    </div>

                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      {sub.name}
                    </h3>

                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1 text-xs">
                      <div className="text-slate-600 dark:text-slate-300">
                        Faculty: <span className="font-bold text-slate-900 dark:text-white">{sub.facultyName || "Professor"}</span>
                      </div>
                      <div className="text-slate-400 font-mono text-[11px] truncate">
                        {sub.facultyEmail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: STUDENT - 75% ATTENDANCE RADAR */}
          {activeTab === "attendance" && isStudent && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h1 className="text-2xl font-black text-slate-900 dark:text-white">
                  Attendance Debarment Radar
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Real-time monitoring across your 9 subjects against the mandatory 75% b-school examination rule.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {studentAttendanceStats.map(item => (
                  <div 
                    key={item.subject.id} 
                    className={`p-5 rounded-2xl border transition bg-white dark:bg-slate-900 ${
                      item.isAtRisk 
                        ? "border-rose-400 dark:border-rose-800 bg-rose-50/15" 
                        : "border-slate-200 dark:border-slate-800"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          {item.subject.code}
                        </span>
                        <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                          {item.subject.name}
                        </h3>
                        <div className="text-[11px] text-slate-400 mt-0.5">Faculty: {item.subject.facultyName}</div>
                      </div>

                      <div className={`px-3 py-1 rounded-xl text-sm font-black ${
                        item.isAtRisk 
                          ? "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300"
                          : "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                      }`}>
                        {item.percentage}%
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1">
                        <span>Attended: {item.attended} / {item.conducted} lectures</span>
                        <span>Required: 75%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-500 ${
                            item.isAtRisk ? "bg-rose-600" : "bg-emerald-500"
                          }`} 
                          style={{ width: `${Math.min(100, item.percentage)}%` }}
                        />
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                      {item.isAtRisk ? (
                        <div className="text-rose-600 dark:text-rose-400 font-bold flex items-center gap-1.5">
                          <Icon name="alert" className="w-4 h-4 flex-shrink-0" />
                          <span>Debarment Risk: Must attend next {item.classesNeededToClear} lectures consecutively to reach 75%!</span>
                        </div>
                      ) : (
                        <div className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                          <Icon name="check" className="w-4 h-4 flex-shrink-0" />
                          <span>Safe: Above the 75% threshold.</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: STUDENT - MY CP PERFORMANCE */}
          {activeTab === "mycp" && isStudent && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h1 className="text-2xl font-black text-slate-900 dark:text-white">
                  My Case Participation (CP) Record
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Scores awarded by your respective subject professors during case discussions.
                </p>
              </div>

              <div className="space-y-3">
                {data.cpLogs.filter(l => l.studentEmail === currentUser.email).map(log => {
                  const sub = classSubjects.find(s => s.id === log.subjectId);
                  return (
                    <div key={log.id} className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4 shadow-sm">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                            {sub?.code || "SUB"} • {sub?.name}
                          </span>
                          <span className="text-xs font-extrabold text-amber-500">
                            +{log.points} Points
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 font-medium">
                          "{log.note}"
                        </p>
                      </div>
                      <span className="text-[11px] text-slate-400 whitespace-nowrap">
                        {formatDate(log.date)}
                      </span>
                    </div>
                  );
                })}

                {data.cpLogs.filter(l => l.studentEmail === currentUser.email).length === 0 && (
                  <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 text-xs text-slate-400">
                    No CP points awarded yet. Participate actively in case lectures!
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 6: CASE STUDIES & ASSIGNMENTS */}
          {activeTab === "asg" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-black text-slate-900 dark:text-white">
                    Case Studies & Assignments
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {isFaculty ? "Post case studies for any of the 9 subjects and grade submissions." : "Submit case analyses and view scores from your respective professors."}
                  </p>
                </div>
                {isFaculty && currentClass && (
                  <button
                    onClick={() => setShowAsgModal(true)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition"
                  >
                    <Icon name="plus" className="w-4 h-4" />
                    <span>Post Assignment</span>
                  </button>
                )}
              </div>

              {classAssignments.length === 0 ? (
                <div className="p-8 text-center bg-white dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-800 rounded-2xl text-xs text-slate-400">
                  No assignments posted for this class yet.
                </div>
              ) : (
                <div className="space-y-4">
                  {classAssignments.map(asg => {
                    const subject = classSubjects.find(s => s.id === asg.subjectId);
                    const submissions = data.submissions.filter(s => s.asgId === asg.id);
                    const mySub = submissions.find(s => s.studentEmail === currentUser.email);

                    return (
                      <div key={asg.id} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                          <div>
                            <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                              {subject?.code} • {subject?.name}
                            </span>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                              {asg.title}
                            </h3>
                          </div>
                          <div className="text-right text-xs text-slate-400">
                            Due: {formatDate(asg.due)} • Max {asg.maxMarks} marks
                          </div>
                        </div>

                        <p className="text-xs text-slate-600 dark:text-slate-300 p-3 rounded-xl bg-slate-50 dark:bg-slate-850">
                          {asg.desc}
                        </p>

                        {/* Faculty Submissions Inspector */}
                        {isFaculty ? (
                          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-2">
                            <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-300">
                              <span>Student Submissions ({submissions.length})</span>
                            </div>
                            {submissions.map(sub => (
                              <div key={sub.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 flex items-center justify-between text-xs">
                                <div>
                                  <div className="font-bold">{sub.studentName}</div>
                                  <div className="text-[11px] text-slate-400 font-mono truncate max-w-xs">{sub.content}</div>
                                </div>
                                <div className="flex items-center gap-3">
                                  <span className="font-extrabold text-blue-600">
                                    {sub.marks !== null ? `${sub.marks}/${asg.maxMarks}` : "Pending"}
                                  </span>
                                  <button
                                    onClick={() => setShowGradeModal({ ...sub, maxMarks: asg.maxMarks, asgTitle: asg.title })}
                                    className="px-3 py-1 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700"
                                  >
                                    Grade
                                  </button>
                                </div>
                              </div>
                            ))}
                            {submissions.length === 0 && (
                              <p className="text-xs text-slate-400 italic">No student submissions yet.</p>
                            )}
                          </div>
                        ) : (
                          /* Student Submission View */
                          <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                            {mySub ? (
                              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs space-y-1">
                                <span className="font-bold text-emerald-700 dark:text-emerald-300">✓ Submitted on {formatDate(mySub.submittedAt)}</span>
                                <div className="font-mono text-[11px] truncate text-slate-600 dark:text-slate-300">{mySub.content}</div>
                                {mySub.marks !== null && (
                                  <div className="font-bold text-blue-600 mt-1">Score: {mySub.marks} / {asg.maxMarks}</div>
                                )}
                                {mySub.feedback && (
                                  <div className="italic text-slate-500 mt-1">Faculty remarks: "{mySub.feedback}"</div>
                                )}
                              </div>
                            ) : (
                              <form 
                                onSubmit={(e) => {
                                  e.preventDefault();
                                  const text = e.target.elements.subVal.value.trim();
                                  if (!text) return;

                                  const newSub = {
                                    id: `sub-${Date.now()}`,
                                    asgId: asg.id,
                                    studentEmail: currentUser.email,
                                    studentName: currentUser.name,
                                    content: text,
                                    submittedAt: new Date().toISOString(),
                                    marks: null,
                                    feedback: ""
                                  };

                                  setData(prev => ({ ...prev, submissions: [...prev.submissions, newSub] }));
                                  showToast("Case assignment submitted!", "success");
                                  e.target.reset();
                                }}
                                className="flex gap-2"
                              >
                                <input
                                  name="subVal"
                                  placeholder="Paste Drive link or executive summary..."
                                  required
                                  className="flex-1 px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                                />
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold">
                                  Submit
                                </button>
                              </form>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* TAB 7: CIRCULARS & NOTICES */}
          {activeTab === "notices" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-black text-slate-900 dark:text-white">
                    Class Circulars & Notices
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Official memos posted for {currentClass?.name || "your cohort"}.
                  </p>
                </div>
                {isFaculty && (
                  <button
                    onClick={() => setShowNoticeModal(true)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition"
                  >
                    <Icon name="plus" className="w-4 h-4" />
                    <span>Publish Notice</span>
                  </button>
                )}
              </div>

              <div className="space-y-3">
                {classNotices.map(n => (
                  <div key={n.id} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                        {n.category || "Academic"}
                      </span>
                      <span className="text-xs text-slate-400">{formatDate(n.date)}</span>
                    </div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">{n.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{n.msg}</p>
                    <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                      Author: <span className="font-semibold">{n.author}</span>
                    </div>
                  </div>
                ))}

                {classNotices.length === 0 && (
                  <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 text-xs text-slate-400">
                    No notices posted yet for this class.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 8: STUDENT TASKS */}
          {activeTab === "tasks" && isStudent && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-black text-slate-900 dark:text-white">
                    Personal Task Checklist
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Manage your own study deadlines, case preparations, and group sprint work.
                  </p>
                </div>
                <button
                  onClick={() => setShowTaskModal(true)}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition"
                >
                  + Add Task
                </button>
              </div>

              <div className="space-y-2">
                {data.tasks.filter(t => t.studentEmail === currentUser.email).map(task => (
                  <div key={task.id} className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={task.done}
                        onChange={() => {
                          setData(prev => ({
                            ...prev,
                            tasks: prev.tasks.map(t => t.id === task.id ? { ...t, done: !t.done } : t)
                          }));
                        }}
                        className="w-4 h-4 rounded text-blue-600 accent-blue-600 cursor-pointer"
                      />
                      <span className={`font-semibold ${task.done ? "line-through text-slate-400" : ""}`}>
                        {task.title} ({task.topic})
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setData(prev => ({
                          ...prev,
                          tasks: prev.tasks.filter(t => t.id !== task.id)
                        }));
                      }}
                      className="text-slate-400 hover:text-rose-500"
                    >
                      <Icon name="x" className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>
      </div>

      {/* MODAL 1: CREATE CLASS (FACULTY ONLY) */}
      {showClassModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Create New Class / Section</h3>
              <button onClick={() => setShowClassModal(false)} className="text-slate-400 hover:text-slate-600">
                <Icon name="x" className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const name = form.className.value.trim();
                const section = form.section.value.trim();
                const year = form.academicYear.value.trim();

                const newClass = {
                  id: `class-${Date.now()}`,
                  name,
                  section,
                  academicYear: year
                };

                setData(prev => ({ ...prev, classes: [...prev.classes, newClass] }));
                setSelectedClassId(newClass.id);
                showToast(`Class ${name} created!`, "success");
                setShowClassModal(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="font-semibold block mb-1">Class / Batch Name:</label>
                <input name="className" required placeholder="e.g. MBA Full Time 2025-27" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold block mb-1">Section:</label>
                  <input name="section" defaultValue="Section A" required className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
                </div>
                <div>
                  <label className="font-semibold block mb-1">Academic Year:</label>
                  <input name="academicYear" defaultValue="2025-27" required className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
                </div>
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button type="button" onClick={() => setShowClassModal(false)} className="px-4 py-2 border rounded-xl font-semibold">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold">
                  Create Class
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: ADD SUBJECT & ASSIGN FACULTY (FACULTY ONLY) */}
      {showSubjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Add Subject & Faculty</h3>
                <div className="text-xs text-slate-400">Target Class: {currentClass?.name} ({currentClass?.section})</div>
              </div>
              <button onClick={() => setShowSubjectModal(false)} className="text-slate-400 hover:text-slate-600">
                <Icon name="x" className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const newSub = {
                  id: `sub-${Date.now()}`,
                  classId: effectiveClassId,
                  code: form.code.value.trim().toUpperCase(),
                  name: form.name.value.trim(),
                  facultyName: form.facName.value.trim(),
                  facultyEmail: form.facEmail.value.trim().toLowerCase(),
                  credits: Number(form.credits.value) || 3,
                  totalClasses: Number(form.totalClasses.value) || 24
                };

                setData(prev => ({ ...prev, subjects: [...prev.subjects, newSub] }));
                showToast(`Subject ${newSub.code} added and mapped to ${newSub.facultyName}!`, "success");
                setShowSubjectModal(false);
              }}
              className="space-y-3 text-xs"
            >
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold block mb-1">Subject Code:</label>
                  <input name="code" required placeholder="e.g. MKT601" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
                </div>
                <div>
                  <label className="font-semibold block mb-1">Credits:</label>
                  <input name="credits" type="number" defaultValue="3" min="1" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
                </div>
              </div>

              <div>
                <label className="font-semibold block mb-1">Subject Name:</label>
                <input name="name" required placeholder="e.g. Marketing Management" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold block mb-1">Assigned Faculty Name:</label>
                  <input name="facName" required placeholder="e.g. Dr. R. Ramanathan" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
                </div>
                <div>
                  <label className="font-semibold block mb-1">Faculty Email:</label>
                  <input name="facEmail" type="email" required placeholder="ramanathan@psgim.ac.in" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
                </div>
              </div>

              <div>
                <label className="font-semibold block mb-1">Planned Lecture Count:</label>
                <input name="totalClasses" type="number" defaultValue="24" min="1" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button type="button" onClick={() => setShowSubjectModal(false)} className="px-4 py-2 border rounded-xl font-semibold">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold">
                  Save Subject
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: ENROLL STUDENT (FACULTY ONLY) */}
      {showStudentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Enroll Student</h3>
              <button onClick={() => setShowStudentModal(false)} className="text-slate-400 hover:text-slate-600">
                <Icon name="x" className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const newStudent = {
                  id: `stu-${Date.now()}`,
                  name: form.stuName.value.trim(),
                  email: form.stuEmail.value.trim().toLowerCase(),
                  roll: form.stuRoll.value.trim().toUpperCase(),
                  classId: effectiveClassId
                };

                setData(prev => ({ ...prev, students: [...prev.students, newStudent] }));
                showToast(`Enrolled ${newStudent.name} in ${currentClass?.name}!`, "success");
                setShowStudentModal(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="font-semibold block mb-1">Student Full Name:</label>
                <input name="stuName" required placeholder="e.g. Aarav Sharma" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold block mb-1">Roll Number:</label>
                  <input name="stuRoll" required placeholder="e.g. 25MBA001" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
                </div>
                <div>
                  <label className="font-semibold block mb-1">Student Email:</label>
                  <input name="stuEmail" type="email" required placeholder="aarav.s25@psgim.ac.in" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
                </div>
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button type="button" onClick={() => setShowStudentModal(false)} className="px-4 py-2 border rounded-xl font-semibold">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold">
                  Enroll Student
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 4: BULK CSV IMPORT (FACULTY ONLY) */}
      {showCsvStudentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Bulk Enroll Students (CSV)</h3>
              <button onClick={() => setShowCsvStudentModal(false)} className="text-slate-400 hover:text-slate-600">
                <Icon name="x" className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const text = e.target.csvText.value.trim();
                if (!text) return;

                const lines = text.split("\n");
                const newStudents = [];

                lines.forEach((line, idx) => {
                  const parts = line.split(",").map(p => p.trim());
                  if (parts.length >= 2) {
                    newStudents.push({
                      id: `stu-${Date.now()}-${idx}`,
                      name: parts[0],
                      email: parts[1].toLowerCase(),
                      roll: parts[2] || `25MBA${100 + idx}`,
                      classId: effectiveClassId
                    });
                  }
                });

                if (newStudents.length === 0) {
                  showToast("No valid rows found. Use: Name, Email, Roll", "error");
                  return;
                }

                setData(prev => ({
                  ...prev,
                  students: [...prev.students, ...newStudents]
                }));

                showToast(`Enrolled ${newStudents.length} candidates in ${currentClass?.name}!`, "success");
                setShowCsvStudentModal(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="font-semibold block mb-1">
                  Paste rows (Format: Name, Email, Roll):
                </label>
                <textarea
                  name="csvText"
                  rows="5"
                  required
                  placeholder="Aarav Sharma, aarav.s25@psgim.ac.in, 25MBA001&#10;Priya Nair, priya.n25@psgim.ac.in, 25MBA002"
                  className="w-full font-mono text-[11px] px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                ></textarea>
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button type="button" onClick={() => setShowCsvStudentModal(false)} className="px-4 py-2 border rounded-xl font-semibold">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold">
                  Import Students
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 5: LOG CP SCORE (FACULTY ONLY) */}
      {showCpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Award Case Participation</h3>
              <button onClick={() => setShowCpModal(false)} className="text-slate-400 hover:text-slate-600">
                <Icon name="x" className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const studentEmail = form.student.value;
                const studentObj = classStudents.find(s => s.email === studentEmail);
                const points = Number(form.points.value);

                const newLog = {
                  id: `cp-${Date.now()}`,
                  classId: effectiveClassId,
                  subjectId: form.subject.value,
                  studentEmail,
                  studentName: studentObj?.name || "Student",
                  facultyEmail: currentUser.email,
                  points,
                  category: form.category.value,
                  note: form.note.value.trim(),
                  date: new Date().toISOString()
                };

                setData(prev => ({ ...prev, cpLogs: [newLog, ...prev.cpLogs] }));
                showToast(`Awarded +${points} CP to ${studentObj?.name}!`, "success");
                setShowCpModal(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="font-semibold block mb-1">Student:</label>
                <select name="student" required className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
                  {classStudents.map(s => (
                    <option key={s.email} value={s.email}>{s.name} ({s.roll})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-semibold block mb-1">Subject:</label>
                <select name="subject" required className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
                  {classSubjects.map(s => (
                    <option key={s.id} value={s.id}>{s.code} - {s.name}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold block mb-1">Points:</label>
                  <select name="points" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
                    <option value="1">1 pt - Adequate</option>
                    <option value="2">2 pts - Framework Rigor</option>
                    <option value="3">3 pts - Breakthrough</option>
                  </select>
                </div>
                <div>
                  <label className="font-semibold block mb-1">Category:</label>
                  <select name="category" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
                    <option>Breakthrough Insight</option>
                    <option>Framework Rigor</option>
                    <option>Cold-Call Response</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-semibold block mb-1">Faculty Remarks:</label>
                <textarea name="note" rows="2" placeholder="e.g. Sharply critiqued CAC model..." className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"></textarea>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button type="button" onClick={() => setShowCpModal(false)} className="px-4 py-2 border rounded-xl font-semibold">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold">
                  Save Score
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 6: POST ASSIGNMENT (FACULTY ONLY) */}
      {showAsgModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Post Case Study Assignment</h3>
              <button onClick={() => setShowAsgModal(false)} className="text-slate-400 hover:text-slate-600">
                <Icon name="x" className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const newAsg = {
                  id: `asg-${Date.now()}`,
                  classId: effectiveClassId,
                  subjectId: form.subject.value,
                  title: form.title.value.trim(),
                  desc: form.desc.value.trim(),
                  due: new Date(form.due.value).toISOString(),
                  maxMarks: Number(form.maxMarks.value) || 20,
                  postedBy: currentUser.name
                };

                setData(prev => ({ ...prev, assignments: [newAsg, ...prev.assignments] }));
                showToast("Assignment published!", "success");
                setShowAsgModal(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="font-semibold block mb-1">Subject:</label>
                <select name="subject" required className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
                  {classSubjects.map(s => (
                    <option key={s.id} value={s.id}>{s.code} - {s.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-semibold block mb-1">Case Study Title:</label>
                <input name="title" required placeholder="e.g. HBS Case: Nike Direct Strategy" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold block mb-1">Max Marks:</label>
                  <input name="maxMarks" type="number" defaultValue="20" min="1" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
                </div>
                <div>
                  <label className="font-semibold block mb-1">Due Date & Time:</label>
                  <input name="due" type="datetime-local" required className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
                </div>
              </div>

              <div>
                <label className="font-semibold block mb-1">Instructions:</label>
                <textarea name="desc" rows="3" required placeholder="State questions, required appendices, and formatting..." className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"></textarea>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button type="button" onClick={() => setShowAsgModal(false)} className="px-4 py-2 border rounded-xl font-semibold">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold">
                  Publish Case
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 7: GRADE SUBMISSION (FACULTY ONLY) */}
      {showGradeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Grade Submission</h3>
                <div className="text-xs text-slate-400">{showGradeModal.studentName}</div>
              </div>
              <button onClick={() => setShowGradeModal(null)} className="text-slate-400 hover:text-slate-600">
                <Icon name="x" className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-xs space-y-1">
              <span className="font-bold text-slate-500">Student Submission:</span>
              <p className="text-slate-800 dark:text-slate-200 font-mono break-all">{showGradeModal.content}</p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const marks = Number(e.target.marks.value);
                const feedback = e.target.feedback.value.trim();

                if (marks > showGradeModal.maxMarks) {
                  showToast(`Marks cannot exceed max ${showGradeModal.maxMarks}!`, "error");
                  return;
                }

                setData(prev => ({
                  ...prev,
                  submissions: prev.submissions.map(s => 
                    s.id === showGradeModal.id ? { ...s, marks, feedback } : s
                  )
                }));

                showToast("Grade published!", "success");
                setShowGradeModal(null);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="font-semibold block mb-1">Marks Awarded (out of {showGradeModal.maxMarks}):</label>
                <input name="marks" type="number" min="0" max={showGradeModal.maxMarks} defaultValue={showGradeModal.marks ?? ""} required className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
              </div>
              <div>
                <label className="font-semibold block mb-1">Feedback Remarks:</label>
                <textarea name="feedback" rows="2" defaultValue={showGradeModal.feedback || ""} placeholder="Add remarks..." className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"></textarea>
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button type="button" onClick={() => setShowGradeModal(null)} className="px-4 py-2 border rounded-xl font-semibold">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold">
                  Publish Grade
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 8: PUBLISH NOTICE (FACULTY ONLY) */}
      {showNoticeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Publish Notice</h3>
              <button onClick={() => setShowNoticeModal(false)} className="text-slate-400 hover:text-slate-600">
                <Icon name="x" className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const newNotice = {
                  id: `nt-${Date.now()}`,
                  classId: effectiveClassId,
                  title: form.title.value.trim(),
                  category: form.category.value,
                  msg: form.msg.value.trim(),
                  date: new Date().toISOString(),
                  author: currentUser.name
                };

                setData(prev => ({ ...prev, notices: [newNotice, ...prev.notices] }));
                showToast("Notice published!", "success");
                setShowNoticeModal(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="font-semibold block mb-1">Title:</label>
                <input name="title" required placeholder="e.g. Mid-term Comprehensive Exam Dates" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
              </div>
              <div>
                <label className="font-semibold block mb-1">Category:</label>
                <select name="category" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
                  <option>Academic</option>
                  <option>Placements</option>
                  <option>Examinations</option>
                </select>
              </div>
              <div>
                <label className="font-semibold block mb-1">Message:</label>
                <textarea name="msg" rows="3" required placeholder="Write message..." className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"></textarea>
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button type="button" onClick={() => setShowNoticeModal(false)} className="px-4 py-2 border rounded-xl font-semibold">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold">
                  Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 9: ADD STUDY TASK (STUDENT ONLY) */}
      {showTaskModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Add Personal Study Task</h3>
              <button onClick={() => setShowTaskModal(false)} className="text-slate-400 hover:text-slate-600">
                <Icon name="x" className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const newTask = {
                  id: `tsk-${Date.now()}`,
                  studentEmail: currentUser.email,
                  classId: effectiveClassId,
                  title: form.title.value.trim(),
                  topic: form.topic.value.trim(),
                  done: false
                };

                setData(prev => ({ ...prev, tasks: [newTask, ...prev.tasks] }));
                showToast("Task created!", "success");
                setShowTaskModal(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="font-semibold block mb-1">Task Title:</label>
                <input name="title" required placeholder="e.g. Read HBR Case on Capital Allocation" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
              </div>
              <div>
                <label className="font-semibold block mb-1">Subject / Course:</label>
                <input name="topic" required placeholder="e.g. Marketing Management" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button type="button" onClick={() => setShowTaskModal(false)} className="px-4 py-2 border rounded-xl font-semibold">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold">
                  Save Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 10: SWITCH USER / LOGIN MODAL */}
      {showSwitchUserModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">Switch Role & User</h3>
                <p className="text-xs text-slate-400">Toggle between Faculty Administrator or an enrolled student.</p>
              </div>
              <button onClick={() => setShowSwitchUserModal(false)} className="text-slate-400 hover:text-slate-600">
                <Icon name="x" className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              
              {/* Option A: Faculty Admin */}
              <div className="p-4 rounded-xl border border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/30 flex items-center justify-between">
                <div>
                  <div className="font-bold text-purple-900 dark:text-purple-200 flex items-center gap-1.5">
                    <span>Dr. Faculty Admin</span>
                    <span className="text-[10px] bg-purple-200 dark:bg-purple-900 px-1.5 py-0.5 rounded font-black">ADMIN</span>
                  </div>
                  <div className="text-[11px] text-slate-500">Full administration: manage classes, 9 subjects, & grading</div>
                </div>
                <button
                  onClick={() => {
                    setCurrentUser({
                      role: "faculty",
                      name: "Dr. Faculty Admin",
                      email: "admin.faculty@psgim.ac.in",
                      designation: "Program Coordinator"
                    });
                    setActiveTab("home");
                    setShowSwitchUserModal(false);
                    showToast("Switched to Faculty Admin view.", "info");
                  }}
                  className="px-3 py-1.5 rounded-xl bg-purple-600 text-white font-bold hover:bg-purple-700 transition"
                >
                  Switch
                </button>
              </div>

              {/* Option B: Enrolled Students */}
              <div className="space-y-2">
                <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px] block">
                  Enrolled Students in {currentClass?.name || "Classes"} ({data.students.length}):
                </span>

                {data.students.length === 0 ? (
                  <p className="text-slate-400 italic py-2">
                    No students have been enrolled by faculty yet.
                  </p>
                ) : (
                  <div className="max-h-48 overflow-y-auto space-y-1.5 pr-1">
                    {data.students.map(stu => {
                      const studentClass = data.classes.find(c => c.id === stu.classId);
                      const isCurrent = currentUser.email === stu.email;

                      return (
                        <div key={stu.id} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-between">
                          <div>
                            <div className="font-bold text-slate-900 dark:text-white">{stu.name}</div>
                            <div className="text-[11px] text-slate-400 font-mono">
                              {stu.roll} • {studentClass ? studentClass.name : "Class"}
                            </div>
                          </div>

                          <button
                            onClick={() => {
                              setCurrentUser({
                                role: "student",
                                name: stu.name,
                                email: stu.email,
                                roll: stu.roll,
                                classId: stu.classId
                              });
                              setActiveTab("home");
                              setShowSwitchUserModal(false);
                              showToast(`Logged in as student ${stu.name}`, "info");
                            }}
                            className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                              isCurrent 
                                ? "bg-emerald-600 text-white" 
                                : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white"
                            }`}
                          >
                            {isCurrent ? "Active" : "Login as Student"}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 flex items-center justify-around px-2 py-1.5">
        {navTabs.slice(0, 5).map(t => {
          const active = activeTab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`flex flex-col items-center gap-0.5 p-1.5 rounded-xl transition ${
                active ? "text-blue-600 dark:text-blue-400 font-bold" : "text-slate-400"
              }`}
            >
              <Icon name={t.icon} className="w-5 h-5" />
              <span className="text-[10px] tracking-tight">{t.label.split(" ")[0]}</span>
            </button>
          );
        })}
      </nav>

    </div>
  );
}
