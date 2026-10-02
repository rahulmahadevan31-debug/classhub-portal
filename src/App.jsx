import React, { useState, useEffect, useMemo } from 'react';

const Icon = ({ name, className = "w-5 h-5", ...props }) => {
  const icons = {
    home: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    ),
    tasks: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    ),
    assignments: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    ),
    teams: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    ),
    calendar: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    ),
    notices: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    ),
    batch: (
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
    pin: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
    ),
    clock: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    user: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    ),
    star: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
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

const INITIAL_DATA = {
  batches: [
    {
      id: "b25",
      name: "Batch 2025-27",
      degree: "MBA - Full Time",
      students: [
        { 
          name: "Aarav Sharma", 
          email: "aarav.s25@psgim.ac.in", 
          roll: "25MBA001", 
          spec: "Marketing & Finance",
          attendance: { s1: { attended: 22, total: 24 }, s2: { attended: 17, total: 24 }, s3: { attended: 21, total: 22 }, s4: { attended: 14, total: 20 } }
        },
        { 
          name: "Priya Nair", 
          email: "priya.n25@psgim.ac.in", 
          roll: "25MBA014", 
          spec: "Operations & HR",
          attendance: { s1: { attended: 24, total: 24 }, s2: { attended: 23, total: 24 }, s3: { attended: 22, total: 22 }, s4: { attended: 19, total: 20 } }
        },
        { 
          name: "Vikram Rathore", 
          email: "vikram.r25@psgim.ac.in", 
          roll: "25MBA028", 
          spec: "Business Analytics",
          attendance: { s1: { attended: 16, total: 24 }, s2: { attended: 18, total: 24 }, s3: { attended: 18, total: 22 }, s4: { attended: 15, total: 20 } }
        },
        { 
          name: "Divya Subramanian", 
          email: "divya.s25@psgim.ac.in", 
          roll: "25MBA042", 
          spec: "Finance & Fintech",
          attendance: { s1: { attended: 23, total: 24 }, s2: { attended: 22, total: 24 }, s3: { attended: 20, total: 22 }, s4: { attended: 18, total: 20 } }
        },
        { 
          name: "Karthik Raja", 
          email: "karthik.r25@psgim.ac.in", 
          roll: "25MBA055", 
          spec: "General Management",
          attendance: { s1: { attended: 15, total: 24 }, s2: { attended: 16, total: 24 }, s3: { attended: 15, total: 22 }, s4: { attended: 12, total: 20 } }
        }
      ]
    },
    {
      id: "b26",
      name: "Batch 2026-28",
      degree: "MBA - Executive",
      students: [
        { 
          name: "Sneha Menon", 
          email: "sneha.m26@psgim.ac.in", 
          roll: "26MBA003", 
          spec: "Business Analytics",
          attendance: { s1: { attended: 12, total: 12 } }
        },
        { 
          name: "Rohan Varma", 
          email: "rohan.v26@psgim.ac.in", 
          roll: "26MBA019", 
          spec: "Marketing & Retail",
          attendance: { s1: { attended: 11, total: 12 } }
        }
      ]
    }
  ],
  subjects: [
    { id: "s1", code: "MKT601", name: "Marketing Management", fac: "Dr. R. Ramanathan", credits: 3, totalClasses: 24 },
    { id: "s2", code: "FIN602", name: "Financial Accounting & Reporting", fac: "Prof. Lakshmi Narayanan", credits: 3, totalClasses: 24 },
    { id: "s3", code: "OPR603", name: "Operations & Supply Chain Strategy", fac: "Dr. S. Karthik", credits: 3, totalClasses: 22 },
    { id: "s4", code: "ANL604", name: "Business Analytics & Python", fac: "Dr. Anita Roy", credits: 3, totalClasses: 20 }
  ],
  cpLogs: [
    { id: "cp-1", studentEmail: "aarav.s25@psgim.ac.in", studentName: "Aarav Sharma", subjectId: "s1", points: 3, category: "Breakthrough Insight", note: "Sharply quantified unit economics in Nike's DTC pivot.", date: new Date(Date.now() - 24 * 3600 * 1000).toISOString() },
    { id: "cp-2", studentEmail: "priya.n25@psgim.ac.in", studentName: "Priya Nair", subjectId: "s1", points: 2, category: "Framework Rigor", note: "Applied Porter's Five Forces to channel partner leverage.", date: new Date(Date.now() - 24 * 3600 * 1000).toISOString() },
    { id: "cp-3", studentEmail: "divya.s25@psgim.ac.in", studentName: "Divya Subramanian", subjectId: "s1", points: 2, category: "Analytical Critique", note: "Challenged assumptions regarding CAC in market expansion.", date: new Date(Date.now() - 48 * 3600 * 1000).toISOString() },
    { id: "cp-4", studentEmail: "karthik.r25@psgim.ac.in", studentName: "Karthik Raja", subjectId: "s1", points: 1, category: "Cold-Call Response", note: "Summarized opening case dilemma adequately.", date: new Date(Date.now() - 48 * 3600 * 1000).toISOString() }
  ],
  teams: [
    {
      id: "t1",
      name: "Team Alpha (Synergy)",
      batchId: "b25",
      leader: "Priya Nair",
      members: ["Priya Nair", "Aarav Sharma", "Vikram Rathore"]
    },
    {
      id: "t2",
      name: "Apex Analytics Group",
      batchId: "b25",
      leader: "Vikram Rathore",
      members: ["Vikram Rathore", "Divya Subramanian"]
    }
  ],
  assignments: [
    {
      id: "asg-1",
      subjectId: "s1",
      title: "HBS Case: Nike Direct-to-Consumer Strategy",
      desc: "Analyze Nike's DTC pivot versus wholesale retail partners. Formulate a 4-year transition roadmap with gross margin impact analysis.",
      due: new Date(Date.now() + 18 * 3600 * 1000).toISOString(),
      maxMarks: 20,
      rubricWeights: { analysis: 8, framework: 6, recommendations: 6 },
      postedBy: "Dr. R. Ramanathan"
    },
    {
      id: "asg-2",
      subjectId: "s2",
      title: "Tata Motors EV Division Valuation Model",
      desc: "Construct a 5-year discounted cash flow (DCF) model analyzing battery subsidies & EV manufacturing CAPEX cycle.",
      due: new Date(Date.now() + 4 * 86400 * 1000).toISOString(),
      maxMarks: 25,
      rubricWeights: { analysis: 10, framework: 10, recommendations: 5 },
      postedBy: "Prof. Lakshmi Narayanan"
    },
    {
      id: "asg-3",
      subjectId: "s4",
      title: "Customer Churn Prediction in Telecom",
      desc: "Train a logistic regression and random forest model on the provided churn CSV dataset. Submit executive summary.",
      due: new Date(Date.now() - 24 * 3600 * 1000).toISOString(),
      maxMarks: 15,
      rubricWeights: { analysis: 5, framework: 5, recommendations: 5 },
      postedBy: "Dr. Anita Roy"
    }
  ],
  submissions: [
    {
      id: "sub-1",
      asgId: "asg-1",
      studentName: "Aarav Sharma",
      studentEmail: "aarav.s25@psgim.ac.in",
      content: "https://drive.google.com/file/d/demo-nike-dtc-aarav/view?usp=sharing",
      submittedAt: new Date(Date.now() - 2 * 3600 * 1000).toISOString(),
      marks: null,
      rubric: { analysis: null, framework: null, recommendations: null },
      feedback: ""
    },
    {
      id: "sub-2",
      asgId: "asg-3",
      studentName: "Aarav Sharma",
      studentEmail: "aarav.s25@psgim.ac.in",
      content: "https://github.com/aarav-psgim/telecom-churn-analytics",
      submittedAt: new Date(Date.now() - 20 * 3600 * 1000).toISOString(),
      marks: 14,
      rubric: { analysis: 5, framework: 5, recommendations: 4 },
      feedback: "Rigorous ROC-AUC curve analysis. Good use of SMOTE oversampling."
    },
    {
      id: "sub-3",
      asgId: "asg-1",
      studentName: "Priya Nair",
      studentEmail: "priya.n25@psgim.ac.in",
      content: "https://onedrive.live.com/view.aspx?resid=priya-nike-case",
      submittedAt: new Date(Date.now() - 5 * 3600 * 1000).toISOString(),
      marks: 18,
      rubric: { analysis: 7, framework: 6, recommendations: 5 },
      feedback: "Outstanding synthesis of distributor conflict and inventory margins."
    }
  ],
  tasks: [
    {
      id: "tsk-1",
      title: "Refine slide deck for Nike Marketing Presentation",
      topic: "Marketing Management",
      due: new Date(Date.now() + 14 * 3600 * 1000).toISOString(),
      priority: "High",
      teamId: "t1",
      owner: "priya.n25@psgim.ac.in",
      by: "Priya Nair",
      done: false
    },
    {
      id: "tsk-2",
      title: "Complete Harvard Business Review read on Supply Chain resilience",
      topic: "Operations Strategy",
      due: new Date(Date.now() + 36 * 3600 * 1000).toISOString(),
      priority: "Medium",
      teamId: null,
      owner: "aarav.s25@psgim.ac.in",
      by: "Aarav Sharma",
      done: true,
      doneBy: "Aarav Sharma"
    },
    {
      id: "tsk-3",
      title: "Calculate Beta coefficient for Automobile sector benchmark",
      topic: "Financial Accounting",
      due: new Date(Date.now() + 8 * 3600 * 1000).toISOString(),
      priority: "High",
      teamId: null,
      owner: "aarav.s25@psgim.ac.in",
      by: "Aarav Sharma",
      done: false
    }
  ],
  events: [
    {
      id: "ev-1",
      title: "Guest Keynote: Leadership in Turbulent Consumer Markets",
      category: "Guest Lecture",
      at: new Date(Date.now() + 28 * 3600 * 1000).toISOString(),
      where: "Auditorium Hall B & Zoom Webinar",
      speaker: "Mr. C. K. Ranganathan (Chairman, CavinKare)"
    },
    {
      id: "ev-2",
      title: "Corporate Finance Mid-term Comprehensive Review",
      category: "Academics",
      at: new Date(Date.now() + 72 * 3600 * 1000).toISOString(),
      where: "Lecture Hall 204",
      speaker: "Prof. Lakshmi Narayanan"
    }
  ],
  notices: [
    {
      id: "nt-1",
      title: "Campus Placements 2026: Day Zero Cohort Shortlisting",
      category: "Placements",
      msg: "Shortlisted candidates for McKinsey Knowledge Center, Deloitte S&O, and HDFC Bank must upload their unredacted resumes by Sunday 5:00 PM.",
      pinned: true,
      postedAt: new Date(Date.now() - 5 * 3600 * 1000).toISOString(),
      author: "MBA Placement Office"
    },
    {
      id: "nt-2",
      title: "Access to Bloomberg Terminal & EBSCOhost Database",
      category: "Academic",
      msg: "Remote VPN credentials for financial database access have been refreshed for Trimester III. Check your college webmail for connection keys.",
      pinned: true,
      postedAt: new Date(Date.now() - 24 * 3600 * 1000).toISOString(),
      author: "Prof. S. Meenakshi"
    }
  ],
  limits: {
    members: 6,
    teamTasks: 20,
    indivTasks: 10
  }
};

const DEMO_PERSONAS = [
  {
    role: "student",
    name: "Aarav Sharma",
    email: "aarav.s25@psgim.ac.in",
    tagline: "Student (Marketing & Finance)",
    batchId: "b25"
  },
  {
    role: "leader",
    name: "Priya Nair",
    email: "priya.n25@psgim.ac.in",
    tagline: "Team Alpha Leader",
    batchId: "b25"
  },
  {
    role: "faculty",
    name: "Dr. R. Ramanathan",
    email: "ramanathan.mkt@psgim.ac.in",
    tagline: "Prof. of Marketing Management",
    batchId: "b25"
  },
  {
    role: "admin",
    name: "Prof. S. Meenakshi",
    email: "mba.office@psgim.ac.in",
    tagline: "MBA Program Director",
    batchId: "b25"
  }
];

const STORAGE_KEY = "classhub_native_beta_v1";

export default function App() {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn("Storage parse error:", e);
    }
    return INITIAL_DATA;
  });

  const [user, setUser] = useState(DEMO_PERSONAS[0]);
  const [theme, setTheme] = useState(() => localStorage.getItem("classhub_theme") || "light");
  const [activeTab, setActiveTab] = useState("home");
  const [selectedBatch, setSelectedBatch] = useState("b25");
  
  // Custom toast notification system (Safe, accessible replacement for alert())
  const [toast, setToast] = useState(null);
  const showToast = (message, type = "info") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3600);
  };

  // Safe confirm modal (Safe replacement for confirm())
  const [confirmModal, setConfirmModal] = useState(null);

  // Modal dialog states
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showAsgModal, setShowAsgModal] = useState(false);
  const [showGradeModal, setShowGradeModal] = useState(null);
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [showLogCpModal, setShowLogCpModal] = useState(false);
  const [showRollCallModal, setShowRollCallModal] = useState(false);
  const [rollCallSubject, setRollCallSubject] = useState("s1");
  const [rollCallRoster, setRollCallRoster] = useState({});

  // Filter & search states
  const [taskFilter, setTaskFilter] = useState("all");
  const [taskSearch, setTaskSearch] = useState("");
  const [rosterSearch, setRosterSearch] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (err) {
      console.error("Storage error:", err);
      showToast("Local storage capacity reached.", "error");
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

  const isAdmin = user.role === "admin";
  const isFaculty = user.role === "faculty" || isAdmin;
  const isLeader = user.role === "leader" || isAdmin;
  const isStudent = user.role === "student" || user.role === "leader";

  const currentBatch = useMemo(() => {
    return data.batches.find(b => b.id === selectedBatch) || data.batches[0];
  }, [data.batches, selectedBatch]);

  const userTeams = useMemo(() => {
    if (isAdmin) return data.teams;
    return data.teams.filter(t => t.members.includes(user.name));
  }, [data.teams, user.name, isAdmin]);

  const userTasks = useMemo(() => {
    return data.tasks.filter(t => {
      if (t.teamId) {
        return userTeams.some(team => team.id === t.teamId);
      }
      return t.owner === user.email;
    });
  }, [data.tasks, userTeams, user.email]);

  const studentAttendanceSummary = useMemo(() => {
    if (!isStudent) return [];
    const currentStudentObj = currentBatch.students.find(s => s.email === user.email);
    if (!currentStudentObj || !currentStudentObj.attendance) return [];

    return data.subjects.map(sub => {
      const record = currentStudentObj.attendance[sub.id] || { attended: 0, total: sub.totalClasses || 24 };
      const pct = record.total > 0 ? Math.round((record.attended / record.total) * 100) : 100;
      const isAtRisk = pct < 75;
      
      // Calculate how many consecutive upcoming classes needed to cross 75%
      let classesNeededToClear = 0;
      if (isAtRisk) {
        classesNeededToClear = Math.max(1, Math.ceil((0.75 * record.total - record.attended) / 0.25));
      }

      // Calculate safe margin (allowable absences while retaining >= 75%)
      const safeAbsencesAllowed = Math.max(0, Math.floor((record.attended - 0.75 * record.total) / 0.75));

      return {
        subject: sub,
        attended: record.attended,
        total: record.total,
        percentage: pct,
        isAtRisk,
        classesNeededToClear,
        safeAbsencesAllowed
      };
    });
  }, [currentBatch, user.email, isStudent, data.subjects]);

  const facultyStats = useMemo(() => {
    if (!isFaculty) return null;
    const handledSubIds = new Set(data.subjects.filter(s => isAdmin || s.fac === user.name).map(s => s.id));
    const pendingSubs = data.submissions.filter(sub => {
      const asg = data.assignments.find(a => a.id === sub.asgId);
      return asg && handledSubIds.has(asg.subjectId) && (sub.marks === null || sub.marks === undefined);
    });

    const totalCpLogged = data.cpLogs.filter(log => handledSubIds.has(log.subjectId)).length;

    return {
      pendingSubsCount: pendingSubs.length,
      totalCpLogged
    };
  }, [isFaculty, data.subjects, data.submissions, data.assignments, data.cpLogs, user.name, isAdmin]);

  const formatDate = (isoString) => {
    if (!isoString) return "No date set";
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString("en-IN", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch (e) {
      return isoString;
    }
  };

  const isOverdue = (isoString, isDone = false) => {
    if (isDone || !isoString) return false;
    return new Date(isoString).getTime() < Date.now();
  };

  const handleResetData = () => {
    setConfirmModal({
      title: "Reset to Clean Demo State?",
      message: "This will restore all default MBA cohorts, attendance numbers, CP points, and assignments.",
      confirmText: "Yes, Reset Data",
      onConfirm: () => {
        setData(INITIAL_DATA);
        showToast("ClassHub reset to clean factory state!", "success");
        setConfirmModal(null);
      }
    });
  };

  const handleExportData = () => {
    try {
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `classhub_backup_${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast("ClassHub data exported as JSON backup!", "success");
    } catch (e) {
      showToast("Export failed.", "error");
    }
  };

  const navTabs = [
    { id: "home", label: "Dashboard", icon: "home" },
    { id: "tasks", label: "Task Checklist", icon: "tasks", badge: userTasks.filter(t => !t.done).length },
    { id: "asg", label: "Case Studies", icon: "assignments" },
    { id: "teams", label: "Syndicate Teams", icon: "teams" },
    ...(isFaculty 
      ? [
          { id: "cpTracker", label: "CP & Cold-Calls", icon: "cpTracker" },
          { id: "rollCallTab", label: "Lecture Roll-Call", icon: "rollCall" }
        ] 
      : [{ id: "attendance", label: "Attendance Radar", icon: "attendance" }]
    ),
    { id: "cal", label: "Calendar", icon: "calendar" },
    { id: "notices", label: "Notice Board", icon: "notices" },
    { id: "batch", label: "Cohort Roster", icon: "batch" }
  ];

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* Toast Notification Container */}
      {toast && (
        <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl border text-xs font-semibold transition-all transform duration-300 ${
          toast.type === "error" 
            ? "bg-rose-50 border-rose-200 text-rose-800 dark:bg-rose-950 dark:border-rose-800 dark:text-rose-200"
            : toast.type === "success"
            ? "bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-950 dark:border-emerald-800 dark:text-emerald-200"
            : "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-200"
        }`}>
          <Icon name={toast.type === "error" ? "alert" : "check"} className="w-4 h-4 flex-shrink-0" />
          <span>{toast.message}</span>
          <button onClick={() => setToast(null)} className="ml-2 hover:opacity-75">
            <Icon name="x" className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Confirmation Modal */}
      {confirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center gap-3 text-amber-600 dark:text-amber-400 mb-3">
              <Icon name="alert" className="w-6 h-6" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{confirmModal.title}</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {confirmModal.message}
            </p>
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setConfirmModal(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                Cancel
              </button>
              <button 
                onClick={confirmModal.onConfirm}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-700 text-white transition shadow-sm"
              >
                {confirmModal.confirmText || "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 px-4 lg:px-8 py-2.5 flex items-center justify-between gap-4">
        
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
              <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                PSGIM
              </span>
              <span className="text-[10px] uppercase font-black tracking-wider px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                Beta v0.9
              </span>
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
              MBA Trimester & Case Delivery Portal
            </p>
          </div>
        </div>

        {/* Persona quick switch */}
        <div className="hidden md:flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs">
          <span className="px-2 font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1 text-[11px]">
            <Icon name="user" className="w-3.5 h-3.5" /> Persona:
          </span>
          {DEMO_PERSONAS.map((p) => {
            const isCurrent = user.email === p.email;
            return (
              <button
                key={p.role}
                onClick={() => {
                  setUser(p);
                  showToast(`Viewing as ${p.name} (${p.role.toUpperCase()})`, "info");
                }}
                className={`px-3 py-1.5 rounded-xl font-medium transition text-xs ${
                  isCurrent
                    ? "bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 shadow-sm font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {p.name.split(" ")[0]} ({p.role.slice(0, 4)})
              </button>
            );
          })}
        </div>

        {/* Theme and User Profile */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            {currentBatch.name}
          </div>

          <button
            onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-slate-600 dark:text-slate-300"
            title="Toggle Light/Dark Theme"
          >
            <Icon name={theme === 'light' ? 'moon' : 'sun'} className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-800">
            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">
              {user.name.split(" ").map(w => w[0]).join("")}
            </div>
            <div className="hidden lg:block text-left text-xs leading-tight">
              <div className="font-semibold text-slate-800 dark:text-slate-200">
                {user.name}
              </div>
              <div className="text-[10px] text-slate-400 capitalize">
                {user.role}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 flex max-w-[1600px] w-full mx-auto">
        
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex flex-col w-64 p-4 border-r border-slate-200/80 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm sticky top-[57px] h-[calc(100vh-57px)] justify-between">
          <div className="space-y-6">
            
            {/* Tabs */}
            <div>
              <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                Workspaces
              </p>
              <nav className="space-y-1">
                {navTabs.map(t => {
                  const active = activeTab === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setActiveTab(t.id)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-xs transition-all ${
                        active
                          ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/20"
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon name={t.icon} className={`w-4 h-4 ${active ? "text-white" : "text-slate-400 dark:text-slate-500"}`} />
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

            {/* Batch Selector */}
            <div>
              <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                Active Cohort
              </p>
              <div className="space-y-1">
                {data.batches.map(b => (
                  <button
                    key={b.id}
                    onClick={() => {
                      setSelectedBatch(b.id);
                      showToast(`Switched cohort view to ${b.name}`, "info");
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition ${
                      selectedBatch === b.id 
                        ? "bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-slate-700" 
                        : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                    }`}
                  >
                    <span>🎓 {b.name}</span>
                    <span className="text-[10px] text-slate-400">{b.students.length} students</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Footnote */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2 text-xs text-slate-500">
            <button
              onClick={handleExportData}
              className="w-full flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-750 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-[11px] font-medium transition"
            >
              <Icon name="download" className="w-3.5 h-3.5 text-blue-500" />
              <span>Export JSON Backup</span>
            </button>
            <div className="flex items-center justify-between px-1">
              <button 
                onClick={handleResetData}
                className="text-slate-400 hover:text-rose-500 transition font-medium text-[11px]"
              >
                Reset Demo Data
              </button>
              <span className="text-[10px] text-slate-400">Beta v0.9.4</span>
            </div>
          </div>
        </aside>

        {/* Main Content Pane */}
        <main className="flex-1 p-4 lg:p-8 pb-24 md:pb-8 overflow-y-auto">
          
          {/* TAB 1: DASHBOARD */}
          {activeTab === "home" && (
            <div className="space-y-6 animate-fadeIn">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-black text-slate-900 dark:text-white">
                    Hello, {user.name.split(" ")[0]} 👋
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {isFaculty ? "Faculty Management Suite • PSG Institute of Management" : "MBA Trimester Workspace & Deliverables"}
                  </p>
                </div>
                
                <div className="flex items-center gap-2">
                  {isFaculty ? (
                    <>
                      <button
                        onClick={() => {
                          const initial = {};
                          currentBatch.students.forEach(s => { initial[s.email] = true; });
                          setRollCallRoster(initial);
                          setShowRollCallModal(true);
                        }}
                        className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs transition border border-slate-300 dark:border-slate-700 shadow-sm"
                      >
                        <Icon name="rollCall" className="w-4 h-4 text-emerald-600" />
                        <span>Lecture Roll-Call</span>
                      </button>
                      <button
                        onClick={() => setShowLogCpModal(true)}
                        className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition shadow-sm"
                      >
                        <Icon name="star" className="w-4 h-4 text-amber-300" />
                        <span>Log CP Points</span>
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setShowTaskModal(true)}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition shadow-sm"
                    >
                      <Icon name="plus" className="w-4 h-4" />
                      <span>Add Task</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Attendance Warning Banner */}
              {isStudent && studentAttendanceSummary.some(s => s.isAtRisk) && (
                <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-900 dark:text-rose-200 flex items-start gap-3">
                  <Icon name="alert" className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 text-xs">
                    <span className="font-bold">Debarment Warning:</span> You have an attendance shortage in{" "}
                    {studentAttendanceSummary.filter(s => s.isAtRisk).map(s => `${s.subject.name} (${s.percentage}%)`).join(", ")}.
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

              {/* Metric Highlights */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {isFaculty ? "Ungraded Submissions" : "Active Tasks"}
                  </div>
                  <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    {isFaculty ? facultyStats?.pendingSubsCount : userTasks.filter(t => !t.done).length}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    {isFaculty ? "Awaiting evaluation" : `${userTasks.filter(t => t.done).length} marked completed`}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {isFaculty ? "Total CP Logs" : "Case Submissions"}
                  </div>
                  <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
                    {isFaculty ? facultyStats?.totalCpLogged : data.submissions.filter(s => s.studentEmail === user.email).length}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    {isFaculty ? "Discussion points" : `Out of ${data.assignments.length} assignments`}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Syndicate Teams
                  </div>
                  <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">
                    {userTeams.length}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Assigned groups
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Next Academic Event
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white truncate">
                    {data.events[0]?.title || "No scheduled events"}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    {data.events[0]?.at ? formatDate(data.events[0].at) : ""}
                  </div>
                </div>
              </div>

              {/* Tasks & Assignments Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left: Quick Tasks */}
                <div className="lg:col-span-2 space-y-5">
                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white">
                        <Icon name="clock" className="w-4 h-4 text-blue-600" />
                        <span>Action Items & Urgent Deadlines</span>
                      </div>
                      <button onClick={() => setActiveTab("tasks")} className="text-xs font-semibold text-blue-600 hover:underline">
                        View Checklist →
                      </button>
                    </div>

                    <div className="space-y-2">
                      {userTasks.filter(t => !t.done).slice(0, 4).map(task => {
                        return (
                          <div key={task.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-750 flex items-center justify-between text-xs">
                            <div className="flex items-center gap-3">
                              <input
                                type="checkbox"
                                checked={task.done}
                                onChange={() => {
                                  setData(prev => ({
                                    ...prev,
                                    tasks: prev.tasks.map(t => t.id === task.id ? { ...t, done: true, doneBy: user.name } : t)
                                  }));
                                  showToast("Task completed!", "success");
                                }}
                                className="w-4 h-4 rounded text-blue-600 accent-blue-600 cursor-pointer"
                              />
                              <div>
                                <div className="font-semibold text-slate-800 dark:text-slate-100">{task.title}</div>
                                <div className="text-[11px] text-slate-400">{task.topic} • Due: {formatDate(task.due)}</div>
                              </div>
                            </div>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                              task.priority === 'High' ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300' : 'bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                            }`}>
                              {task.priority}
                            </span>
                          </div>
                        );
                      })}

                      {userTasks.filter(t => !t.done).length === 0 && (
                        <p className="text-xs text-slate-400 py-3 text-center">No pending personal or team tasks.</p>
                      )}
                    </div>
                  </div>

                  {/* Assignments Summary Card */}
                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white">
                        <Icon name="assignments" className="w-4 h-4 text-indigo-600" />
                        <span>Trimester Case Studies</span>
                      </div>
                      <button onClick={() => setActiveTab("asg")} className="text-xs font-semibold text-blue-600 hover:underline">
                        Open Portal →
                      </button>
                    </div>

                    <div className="space-y-2">
                      {data.assignments.slice(0, 3).map(asg => {
                        const sub = data.submissions.find(s => s.asgId === asg.id && s.studentEmail === user.email);
                        return (
                          <div key={asg.id} className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                            <div>
                              <div className="font-bold text-slate-900 dark:text-slate-100">{asg.title}</div>
                              <div className="text-[11px] text-slate-400">Max {asg.maxMarks} marks • Due {formatDate(asg.due)}</div>
                            </div>
                            {isFaculty ? (
                              <button onClick={() => setActiveTab("asg")} className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-[11px] font-bold">
                                Review Submissions
                              </button>
                            ) : (
                              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                                sub ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                              }`}>
                                {sub ? (sub.marks !== null ? `Graded: ${sub.marks}/${asg.maxMarks}` : "Submitted") : "Pending"}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right: Pinned Circulars */}
                <div className="space-y-5">
                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white">
                        <Icon name="pin" className="w-4 h-4 text-blue-600" />
                        <span>Pinned Circulars</span>
                      </div>
                      <button onClick={() => setActiveTab("notices")} className="text-xs font-semibold text-blue-600 hover:underline">
                        All →
                      </button>
                    </div>

                    <div className="space-y-2.5">
                      {data.notices.slice(0, 3).map(n => (
                        <div key={n.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 text-xs">
                          <span className="font-bold text-blue-600 dark:text-blue-400 text-[10px] uppercase tracking-wider">{n.category}</span>
                          <div className="font-bold text-slate-800 dark:text-slate-100 mt-0.5">{n.title}</div>
                          <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">{n.msg}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: FACULTY CP & COLD-CALL TRACKER */}
          {activeTab === "cpTracker" && isFaculty && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-black text-slate-900 dark:text-white">
                    Class Participation (CP) & Cold-Call Tracker
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Log Harvard-style case contributions, framework rigors, and cold-call performances in real time.
                  </p>
                </div>
                <button
                  onClick={() => setShowLogCpModal(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition"
                >
                  <Icon name="plus" className="w-4 h-4" />
                  <span>Log CP Entry</span>
                </button>
              </div>

              {/* CP Scoreboard */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span className="font-bold text-xs uppercase tracking-wider text-slate-500">
                    Cohort {currentBatch.name} • Case Participation Tally
                  </span>
                  <span className="text-xs text-slate-400">Total Logs: {data.cpLogs.length}</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-slate-400 font-bold uppercase tracking-wider">
                      <tr>
                        <th className="p-3.5">Student</th>
                        <th className="p-3.5">Roll No</th>
                        <th className="p-3.5">Total Points</th>
                        <th className="p-3.5">Recent Quality / Category</th>
                        <th className="p-3.5">Latest Faculty Note</th>
                        <th className="p-3.5 text-right">Quick Scoring</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {currentBatch.students.map(stu => {
                        const studentLogs = data.cpLogs.filter(l => l.studentEmail === stu.email);
                        const totalPoints = studentLogs.reduce((acc, curr) => acc + curr.points, 0);
                        const latest = studentLogs[0];

                        return (
                          <tr key={stu.email} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition">
                            <td className="p-3.5 font-bold text-slate-900 dark:text-slate-100">
                              {stu.name}
                            </td>
                            <td className="p-3.5 font-mono text-slate-500">
                              {stu.roll}
                            </td>
                            <td className="p-3.5">
                              <span className="px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-extrabold text-xs">
                                ⭐ {totalPoints} pts
                              </span>
                            </td>
                            <td className="p-3.5">
                              {latest ? (
                                <span className="px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-[11px] font-semibold border border-indigo-200 dark:border-indigo-900">
                                  {latest.category}
                                </span>
                              ) : (
                                <span className="text-slate-400 italic">No participation yet</span>
                              )}
                            </td>
                            <td className="p-3.5 text-slate-600 dark:text-slate-400 max-w-xs truncate">
                              {latest ? latest.note : "—"}
                            </td>
                            <td className="p-3.5 text-right space-x-1">
                              {[1, 2, 3].map(pts => (
                                <button
                                  key={pts}
                                  onClick={() => {
                                    const newLog = {
                                      id: `cp-${Date.now()}-${pts}`,
                                      studentEmail: stu.email,
                                      studentName: stu.name,
                                      subjectId: data.subjects[0]?.id || "s1",
                                      points: pts,
                                      category: pts === 3 ? "Breakthrough Insight" : pts === 2 ? "Framework Rigor" : "Cold-Call Response",
                                      note: `Quick ${pts}-pt score logged during lecture.`,
                                      date: new Date().toISOString()
                                    };
                                    setData(prev => ({ ...prev, cpLogs: [newLog, ...prev.cpLogs] }));
                                    showToast(`Awarded +${pts} CP points to ${stu.name}!`, "success");
                                  }}
                                  className="px-2 py-1 rounded bg-slate-100 hover:bg-amber-100 dark:bg-slate-800 dark:hover:bg-amber-950 text-slate-700 hover:text-amber-800 dark:text-slate-300 dark:hover:text-amber-200 font-bold text-[10px] transition border border-slate-200 dark:border-slate-700"
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

          {/* TAB 3: FACULTY ROLL CALL */}
          {activeTab === "rollCallTab" && isFaculty && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-black text-slate-900 dark:text-white">
                    Lecture Roll-Call & Attendance Session
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Conduct roll-call for today's lecture. Student attendance counters and debarment radars update immediately.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <select
                    value={rollCallSubject}
                    onChange={(e) => setRollCallSubject(e.target.value)}
                    className="px-3 py-2 text-xs font-bold rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700"
                  >
                    {data.subjects.map(s => (
                      <option key={s.id} value={s.id}>{s.code} - {s.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-5 space-y-4">
                <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200 dark:border-slate-800">
                  <span className="font-bold text-slate-600 dark:text-slate-300">
                    Cohort {currentBatch.name} • {currentBatch.students.length} Candidates
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        const updated = {};
                        currentBatch.students.forEach(s => { updated[s.email] = true; });
                        setRollCallRoster(updated);
                      }}
                      className="px-2.5 py-1 text-[11px] rounded font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                    >
                      Mark All Present
                    </button>
                    <button
                      onClick={() => {
                        const updated = {};
                        currentBatch.students.forEach(s => { updated[s.email] = false; });
                        setRollCallRoster(updated);
                      }}
                      className="px-2.5 py-1 text-[11px] rounded font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300"
                    >
                      Mark All Absent
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  {currentBatch.students.map(stu => {
                    const isPresent = rollCallRoster[stu.email] !== false;
                    const subjectAtt = stu.attendance?.[rollCallSubject] || { attended: 0, total: 24 };

                    return (
                      <div key={stu.email} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 flex items-center justify-between text-xs">
                        <div>
                          <div className="font-bold text-slate-800 dark:text-slate-100">{stu.name}</div>
                          <div className="text-[11px] text-slate-400 font-mono">
                            {stu.roll} • Current Record: {subjectAtt.attended}/{subjectAtt.total} ({Math.round((subjectAtt.attended/Math.max(1, subjectAtt.total))*100)}%)
                          </div>
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
                      setData(prev => {
                        const updatedBatches = prev.batches.map(b => {
                          if (b.id !== selectedBatch) return b;
                          return {
                            ...b,
                            students: b.students.map(s => {
                              const isPresent = rollCallRoster[s.email] !== false;
                              const currentRec = s.attendance?.[rollCallSubject] || { attended: 0, total: 24 };
                              return {
                                ...s,
                                attendance: {
                                  ...s.attendance,
                                  [rollCallSubject]: {
                                    attended: isPresent ? currentRec.attended + 1 : currentRec.attended,
                                    total: currentRec.total + 1
                                  }
                                }
                              };
                            })
                          };
                        });
                        return { ...prev, batches: updatedBatches };
                      });
                      showToast("Lecture roll-call committed to student records!", "success");
                    }}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition"
                  >
                    Commit Attendance for Session
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: STUDENT ATTENDANCE RADAR */}
          {activeTab === "attendance" && isStudent && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-black text-slate-900 dark:text-white">
                    Attendance Debarment Radar & Safety Margin
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Live monitoring against the mandatory 75% b-school policy with consecutive lecture recovery counters.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                {studentAttendanceSummary.map(item => {
                  const isSafe = item.percentage >= 80;
                  const isWarning = item.percentage >= 75 && item.percentage < 80;

                  return (
                    <div 
                      key={item.subject.id} 
                      className={`p-5 rounded-2xl border transition shadow-sm bg-white dark:bg-slate-900 ${
                        item.isAtRisk 
                          ? "border-rose-400 dark:border-rose-800 bg-rose-50/15" 
                          : isWarning
                          ? "border-amber-400 dark:border-amber-800 bg-amber-50/10"
                          : "border-slate-200 dark:border-slate-800"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            {item.subject.code}
                          </span>
                          <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                            {item.subject.name}
                          </h3>
                          <div className="text-[11px] text-slate-400 mt-0.5">Faculty: {item.subject.fac}</div>
                        </div>

                        <div className={`px-3 py-1 rounded-xl text-sm font-black ${
                          item.isAtRisk 
                            ? "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300"
                            : isWarning 
                            ? "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
                            : "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                        }`}>
                          {item.percentage}%
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1">
                          <span>Attended: {item.attended} / {item.total} lectures</span>
                          <span>Required: 75%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                          <div 
                            className={`h-full transition-all duration-500 ${
                              item.isAtRisk ? "bg-rose-600" : isWarning ? "bg-amber-500" : "bg-emerald-500"
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
                        ) : isWarning ? (
                          <div className="text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1.5">
                            <Icon name="alert" className="w-4 h-4 flex-shrink-0" />
                            <span>Caution: Low buffer. 0 absences remaining before falling below threshold.</span>
                          </div>
                        ) : (
                          <div className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                            <Icon name="check" className="w-4 h-4 flex-shrink-0" />
                            <span>Safe: Allowed up to {item.safeAbsencesAllowed} more absence(s) while retaining ≥75%.</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 5: TASK CHECKLIST */}
          {activeTab === "tasks" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-black text-slate-900 dark:text-white">
                    Task Workspace
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Manage sprint deliverables, case analysis checkpoints, and syndicate task queues.
                  </p>
                </div>
                <button
                  onClick={() => setShowTaskModal(true)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md shadow-blue-500/20 transition self-start sm:self-auto"
                >
                  <Icon name="plus" className="w-4 h-4" />
                  <span>New Task</span>
                </button>
              </div>

              {/* Task search and filters */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
                  {[
                    { id: "all", label: "All Tasks" },
                    { id: "today", label: "Due Today" },
                    { id: "week", label: "This Week" },
                    { id: "overdue", label: "Overdue" },
                    { id: "done", label: "Completed" }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setTaskFilter(tab.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                        taskFilter === tab.id
                          ? "bg-blue-600 text-white shadow-sm"
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="relative min-w-[240px]">
                  <Icon name="search" className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search by title or topic..."
                    value={taskSearch}
                    onChange={(e) => setTaskSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 rounded-xl text-xs bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Task list items */}
              <div className="space-y-3">
                {userTasks
                  .filter(task => {
                    const now = new Date();
                    const eod = new Date(now);
                    eod.setHours(23, 59, 59, 999);
                    const inSevenDays = new Date(now.getTime() + 7 * 86400 * 1000);

                    if (taskFilter === "today") return !task.done && task.due && new Date(task.due) <= eod;
                    if (taskFilter === "week") return !task.done && task.due && new Date(task.due) <= inSevenDays;
                    if (taskFilter === "overdue") return isOverdue(task.due, task.done);
                    if (taskFilter === "done") return task.done;
                    return true;
                  })
                  .filter(task => {
                    if (!taskSearch) return true;
                    return (task.title + " " + task.topic).toLowerCase().includes(taskSearch.toLowerCase());
                  })
                  .map(task => {
                    const late = isOverdue(task.due, task.done);
                    const team = data.teams.find(t => t.id === task.teamId);

                    return (
                      <div
                        key={task.id}
                        className={`p-4 rounded-2xl border transition bg-white dark:bg-slate-900 ${
                          task.done 
                            ? "opacity-60 border-slate-200 dark:border-slate-800" 
                            : late 
                            ? "border-rose-300 dark:border-rose-900 bg-rose-50/20" 
                            : "border-slate-200 dark:border-slate-800 hover:shadow-sm"
                        } flex items-start gap-4`}
                      >
                        <input
                          type="checkbox"
                          checked={task.done}
                          onChange={() => {
                            setData(prev => ({
                              ...prev,
                              tasks: prev.tasks.map(t => 
                                t.id === task.id 
                                  ? { ...t, done: !t.done, doneBy: !t.done ? user.name : null }
                                  : t
                              )
                            }));
                          }}
                          className="mt-1 w-5 h-5 rounded text-blue-600 focus:ring-blue-500 cursor-pointer accent-blue-600"
                        />

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className={`font-bold text-sm ${task.done ? "line-through text-slate-400" : "text-slate-900 dark:text-slate-100"}`}>
                              {task.title}
                            </span>
                            {late && !task.done && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300">
                                Overdue
                              </span>
                            )}
                          </div>

                          <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-slate-500 dark:text-slate-400">
                            <span className="inline-flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                              {team ? `👥 ${team.name}` : "👤 Personal"}
                            </span>
                            <span>•</span>
                            <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-[11px]">
                              {task.topic}
                            </span>
                            <span>•</span>
                            <span>Due: {formatDate(task.due)}</span>
                            {task.done && task.doneBy && (
                              <>
                                <span>•</span>
                                <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                                  ✓ Completed by {task.doneBy}
                                </span>
                              </>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase ${
                            task.priority === 'High' 
                              ? 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300' 
                              : task.priority === 'Medium'
                              ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300'
                              : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                          }`}>
                            {task.priority}
                          </span>
                          <button
                            onClick={() => {
                              setData(prev => ({
                                ...prev,
                                tasks: prev.tasks.filter(t => t.id !== task.id)
                              }));
                              showToast("Task removed.", "info");
                            }}
                            className="p-1 text-slate-400 hover:text-rose-500 rounded transition"
                          >
                            <Icon name="x" className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}

                {userTasks.length === 0 && (
                  <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 text-xs text-slate-400">
                    No tasks found. Add a checkpoint above.
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
                    {isFaculty ? "Evaluate student case submissions, configure rubrics, and publish class grades." : "Submit case analyses, track grades, and view faculty rubric breakdowns."}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {isFaculty && (
                    <>
                      <button
                        onClick={() => setShowCourseModal(true)}
                        className="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 font-semibold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                      >
                        + Course
                      </button>
                      <button
                        onClick={() => setShowAsgModal(true)}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md shadow-blue-500/20 transition"
                      >
                        <Icon name="plus" className="w-4 h-4" />
                        <span>Post Assignment</span>
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Assignment list cards */}
              <div className="space-y-4">
                {data.assignments.map(asg => {
                  const subject = data.subjects.find(s => s.id === asg.subjectId);
                  const submissions = data.submissions.filter(s => s.asgId === asg.id);
                  const studentSub = submissions.find(s => s.studentEmail === user.email);
                  const gradedSubs = submissions.filter(s => s.marks !== null);
                  const avgScore = gradedSubs.length 
                    ? (gradedSubs.reduce((acc, curr) => acc + curr.marks, 0) / gradedSubs.length).toFixed(1)
                    : null;

                  return (
                    <div key={asg.id} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                              {subject?.code} • {subject?.name}
                            </span>
                            <span className="text-xs text-slate-400">
                              Max: {asg.maxMarks} marks
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-1">
                            {asg.title}
                          </h3>
                        </div>

                        <div className="text-right text-xs">
                          <div className="text-slate-500">
                            Due: {formatDate(asg.due)}
                          </div>
                          <div className="text-[11px] text-slate-400 mt-0.5">
                            Posted by: {asg.postedBy}
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-850 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                        {asg.desc}
                      </p>

                      {/* FACULTY VIEW: Rubric Grading Table */}
                      {isFaculty ? (
                        <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-3">
                          <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                            <span>Cohort Submissions ({submissions.length})</span>
                            <div className="flex items-center gap-3 text-slate-500 font-medium">
                              {avgScore && <span>Class Avg: <b className="text-blue-600 dark:text-blue-400">{avgScore}</b>/{asg.maxMarks}</span>}
                              <span>{gradedSubs.length} of {submissions.length} graded</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            {submissions.map(sub => {
                              return (
                                <div key={sub.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                                  <div>
                                    <div className="font-bold text-slate-900 dark:text-slate-100">
                                      {sub.studentName}
                                    </div>
                                    <div className="text-slate-500 truncate max-w-sm mt-0.5">
                                      {sub.content}
                                    </div>
                                    {sub.feedback && (
                                      <div className="text-[11px] text-indigo-600 dark:text-indigo-400 mt-1 italic">
                                        "{sub.feedback}"
                                      </div>
                                    )}
                                  </div>

                                  <div className="flex items-center gap-3">
                                    <div className="text-right">
                                      {sub.marks !== null ? (
                                        <span className="font-bold text-emerald-600 dark:text-emerald-400">
                                          {sub.marks} / {asg.maxMarks} marks
                                        </span>
                                      ) : (
                                        <span className="text-amber-500 font-medium">Pending Grade</span>
                                      )}
                                    </div>
                                    <button
                                      onClick={() => setShowGradeModal({ ...sub, maxMarks: asg.maxMarks, asgTitle: asg.title, weights: asg.rubricWeights })}
                                      className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition"
                                    >
                                      {sub.marks !== null ? "Edit Grade" : "Grade & Rubric"}
                                    </button>
                                  </div>
                                </div>
                              );
                            })}

                            {submissions.length === 0 && (
                              <p className="text-xs text-slate-400 italic py-2">
                                No submissions received yet for this case study.
                              </p>
                            )}
                          </div>
                        </div>
                      ) : (
                        /* STUDENT VIEW: My Submission */
                        <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-3">
                          {studentSub ? (
                            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-2">
                              <div className="flex items-center justify-between text-xs">
                                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                                  <Icon name="check" className="w-4 h-4" /> Submitted on {formatDate(studentSub.submittedAt)}
                                </span>
                                {studentSub.marks !== null ? (
                                  <span className="text-sm font-extrabold text-blue-600 dark:text-blue-400">
                                    Score: {studentSub.marks} / {asg.maxMarks}
                                  </span>
                                ) : (
                                  <span className="text-amber-500 text-xs font-semibold">Under Evaluation</span>
                                )}
                              </div>

                              <div className="text-xs text-slate-600 dark:text-slate-300 font-mono bg-white dark:bg-slate-900 p-2 rounded border border-slate-200 dark:border-slate-800 truncate">
                                {studentSub.content}
                              </div>

                              {studentSub.rubric && (studentSub.rubric.analysis || studentSub.rubric.framework || studentSub.rubric.recommendations) && (
                                <div className="grid grid-cols-3 gap-2 p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px]">
                                  <div>Analysis Depth: <b className="text-blue-600">{studentSub.rubric.analysis ?? "-"}</b></div>
                                  <div>Framework Rigor: <b className="text-blue-600">{studentSub.rubric.framework ?? "-"}</b></div>
                                  <div>Recommendations: <b className="text-blue-600">{studentSub.rubric.recommendations ?? "-"}</b></div>
                                </div>
                              )}

                              {studentSub.feedback && (
                                <div className="p-2.5 rounded bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-xs text-blue-900 dark:text-blue-200">
                                  <span className="font-bold">Faculty Remarks:</span> {studentSub.feedback}
                                </div>
                              )}
                            </div>
                          ) : (
                            <form 
                              onSubmit={(e) => {
                                e.preventDefault();
                                const val = e.target.elements.subContent.value.trim();
                                if (!val) return;
                                
                                const newSub = {
                                  id: `sub-${Date.now()}`,
                                  asgId: asg.id,
                                  studentName: user.name,
                                  studentEmail: user.email,
                                  content: val,
                                  submittedAt: new Date().toISOString(),
                                  marks: null,
                                  rubric: {},
                                  feedback: ""
                                };

                                setData(prev => ({
                                  ...prev,
                                  submissions: [...prev.submissions, newSub]
                                }));
                                showToast("Case assignment submitted successfully!", "success");
                                e.target.reset();
                              }}
                              className="space-y-2"
                            >
                              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                                Submit Work (Paste summary memo or Cloud Drive deck link):
                              </label>
                              <div className="flex gap-2">
                                <input
                                  name="subContent"
                                  type="text"
                                  placeholder="e.g. https://drive.google.com/file/d/... or executive summary"
                                  required
                                  className="flex-1 px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none focus:border-blue-500"
                                />
                                <button
                                  type="submit"
                                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition"
                                >
                                  Submit
                                </button>
                              </div>
                            </form>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 7: SYNDICATE TEAMS */}
          {activeTab === "teams" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-black text-slate-900 dark:text-white">
                    Syndicate Teams & Cohort Groups
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Group assignments, sprint velocity, and peer deliverable distribution.
                  </p>
                </div>
                {isLeader && (
                  <button
                    onClick={() => setShowTeamModal(true)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md shadow-blue-500/20 transition self-start sm:self-auto"
                  >
                    <Icon name="plus" className="w-4 h-4" />
                    <span>Create Team</span>
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userTeams.map(team => {
                  const teamTasks = data.tasks.filter(t => t.teamId === team.id);
                  const completedTasks = teamTasks.filter(t => t.done);
                  const progressPct = teamTasks.length ? Math.round((completedTasks.length / teamTasks.length) * 100) : 0;

                  const memberStats = {};
                  completedTasks.forEach(t => {
                    if (t.doneBy) memberStats[t.doneBy] = (memberStats[t.doneBy] || 0) + 1;
                  });

                  return (
                    <div key={team.id} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                            Syndicate Group
                          </span>
                          <h3 className="font-black text-lg text-slate-900 dark:text-slate-100">
                            {team.name}
                          </h3>
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          {team.members.length} / {data.limits.members} members
                        </span>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-medium text-slate-500 mb-1">
                          <span>Team Sprint Completion</span>
                          <span className="font-bold text-slate-800 dark:text-slate-200">{progressPct}% ({completedTasks.length}/{teamTasks.length} tasks)</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                          <div 
                            className="h-full bg-blue-600 transition-all duration-500" 
                            style={{ width: `${progressPct}%` }}
                          />
                        </div>
                      </div>

                      <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                          Members & Completed Deliverables
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {team.members.map(member => (
                            <span 
                              key={member}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200"
                            >
                              <span>{member}</span>
                              {team.leader === member && (
                                <span className="text-[10px] text-amber-500" title="Team Leader">👑</span>
                              )}
                              {memberStats[member] && (
                                <span className="text-[10px] px-1 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">
                                  ✓{memberStats[member]}
                                </span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>

                      {(isAdmin || (user.name === team.leader)) && (
                        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex gap-2">
                          <input
                            id={`add-mem-${team.id}`}
                            type="text"
                            placeholder="Add member name..."
                            className="flex-1 px-3 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none"
                          />
                          <button
                            onClick={() => {
                              const input = document.getElementById(`add-mem-${team.id}`);
                              const name = input?.value.trim();
                              if (!name) return;

                              if (team.members.length >= data.limits.members) {
                                showToast(`Team reached limit of ${data.limits.members} members!`, "error");
                                return;
                              }

                              setData(prev => ({
                                ...prev,
                                teams: prev.teams.map(t => 
                                  t.id === team.id 
                                    ? { ...t, members: [...new Set([...t.members, name])] }
                                    : t
                                )
                              }));
                              input.value = "";
                              showToast(`Added ${name} to ${team.name}`, "success");
                            }}
                            className="px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                          >
                            + Add Member
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 8: CALENDAR */}
          {activeTab === "cal" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-black text-slate-900 dark:text-white">
                    Academic Calendar & Milestones
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Trimester deadlines, guest lectures, industry seminars, and review sessions.
                  </p>
                </div>
                {isFaculty && (
                  <button
                    onClick={() => setShowEventModal(true)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md shadow-blue-500/20 transition self-start sm:self-auto"
                  >
                    <Icon name="plus" className="w-4 h-4" />
                    <span>Schedule Event</span>
                  </button>
                )}
              </div>

              <div className="space-y-3">
                {data.events.map(ev => (
                  <div key={ev.id} className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4 shadow-sm">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                        {ev.category}
                      </span>
                      <h3 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">
                        {ev.title}
                      </h3>
                      <div className="text-xs text-slate-500">
                        📍 {ev.where} {ev.speaker && `• 🎙️ Speaker: ${ev.speaker}`}
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xs font-bold text-blue-600 dark:text-blue-400">
                        {formatDate(ev.at)}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Assignment Deadlines */}
                {data.assignments.map(asg => (
                  <div key={asg.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-dashed border-slate-300 dark:border-slate-700 flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">
                        Case Submission Deadline
                      </span>
                      <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200">
                        {asg.title}
                      </h3>
                      <div className="text-xs text-slate-400">
                        Evaluated by {asg.postedBy}
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                      {formatDate(asg.due)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 9: NOTICE BOARD */}
          {activeTab === "notices" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-black text-slate-900 dark:text-white">
                    Institutional Circulars & Notices
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Official memos from the MBA Program Office, Placement Cell, and Faculty.
                  </p>
                </div>
                {isFaculty && (
                  <button
                    onClick={() => setShowNoticeModal(true)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md shadow-blue-500/20 transition self-start sm:self-auto"
                  >
                    <Icon name="plus" className="w-4 h-4" />
                    <span>Publish Notice</span>
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {data.notices.map(n => (
                  <div key={n.id} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {n.pinned && (
                          <span className="p-1 rounded bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
                            <Icon name="pin" className="w-3.5 h-3.5" />
                          </span>
                        )}
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                          {n.category}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400">{formatDate(n.postedAt)}</span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                        {n.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-1">
                        {n.msg}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400">
                      Author: <span className="font-semibold text-slate-600 dark:text-slate-300">{n.author}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 10: COHORT ROSTER */}
          {activeTab === "batch" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-black text-slate-900 dark:text-white">
                    {currentBatch.name} Directory
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {currentBatch.degree} • {currentBatch.students.length} Registered Candidates
                  </p>
                </div>
                {isAdmin && (
                  <button
                    onClick={() => setShowImportModal(true)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md shadow-blue-500/20 transition self-start sm:self-auto"
                  >
                    <Icon name="plus" className="w-4 h-4" />
                    <span>Import Student Roster</span>
                  </button>
                )}
              </div>

              <div className="relative">
                <Icon name="search" className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search students by name, roll number, or specialization..."
                  value={rosterSearch}
                  onChange={(e) => setRosterSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs focus:outline-none focus:border-blue-500 shadow-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentBatch.students
                  .filter(s => {
                    if (!rosterSearch) return true;
                    return (s.name + " " + s.roll + " " + s.spec).toLowerCase().includes(rosterSearch.toLowerCase());
                  })
                  .map(s => {
                    const studentTeams = data.teams.filter(t => t.members.includes(s.name));
                    return (
                      <div key={s.email} className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-extrabold flex items-center justify-center text-sm">
                            {s.name.split(" ").map(w => w[0]).join("")}
                          </div>
                          <div>
                            <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">{s.name}</h4>
                            <div className="text-[11px] font-mono text-slate-400">{s.roll}</div>
                          </div>
                        </div>

                        <div className="space-y-1 text-xs">
                          <div className="text-slate-500">
                            Spec: <span className="font-semibold text-slate-700 dark:text-slate-300">{s.spec}</span>
                          </div>
                          <div className="text-slate-500 truncate">
                            Email: <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400">{s.email}</span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
                          <span className="text-slate-400">
                            Teams: {studentTeams.map(t => t.name).join(", ") || "None"}
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

        </main>
      </div>

      {/* MODAL: LOG CP (FACULTY) */}
      {showLogCpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Icon name="star" className="w-5 h-5 text-amber-400" />
                <span>Log Case Participation</span>
              </h3>
              <button onClick={() => setShowLogCpModal(false)} className="text-slate-400 hover:text-slate-600">
                <Icon name="x" className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const studentEmail = form.student.value;
                const studentObj = currentBatch.students.find(s => s.email === studentEmail);
                const points = Number(form.points.value);
                const category = form.category.value;
                const note = form.note.value.trim();

                const newLog = {
                  id: `cp-${Date.now()}`,
                  studentEmail,
                  studentName: studentObj?.name || "Student",
                  subjectId: form.subject.value,
                  points,
                  category,
                  note,
                  date: new Date().toISOString()
                };

                setData(prev => ({ ...prev, cpLogs: [newLog, ...prev.cpLogs] }));
                showToast(`Logged +${points} CP points for ${studentObj?.name}!`, "success");
                setShowLogCpModal(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="font-semibold block mb-1">Student:</label>
                <select name="student" required className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
                  {currentBatch.students.map(s => (
                    <option key={s.email} value={s.email}>{s.name} ({s.roll})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-semibold block mb-1">Subject / Course:</label>
                <select name="subject" required className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
                  {data.subjects.map(s => (
                    <option key={s.id} value={s.id}>{s.code} - {s.name}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold block mb-1">Points:</label>
                  <select name="points" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
                    <option value="1">1 pt - Adequate Response</option>
                    <option value="2">2 pts - Framework Rigor</option>
                    <option value="3">3 pts - Breakthrough Insight</option>
                  </select>
                </div>
                <div>
                  <label className="font-semibold block mb-1">Category:</label>
                  <select name="category" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
                    <option>Breakthrough Insight</option>
                    <option>Framework Rigor</option>
                    <option>Cold-Call Response</option>
                    <option>Analytical Critique</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-semibold block mb-1">Faculty Remarks:</label>
                <textarea
                  name="note"
                  rows="2"
                  placeholder="e.g. Challenged unit economic assumption in market entry..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                ></textarea>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button type="button" onClick={() => setShowLogCpModal(false)} className="px-4 py-2 border rounded-xl font-semibold">
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

      {/* MODAL: GRADE WITH RUBRIC (FACULTY) */}
      {showGradeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  Grade Submission: {showGradeModal.studentName}
                </h3>
                <div className="text-xs text-slate-400 mt-0.5">{showGradeModal.asgTitle}</div>
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
                const form = e.target;
                const analysisMarks = Number(form.analysis.value) || 0;
                const frameworkMarks = Number(form.framework.value) || 0;
                const recMarks = Number(form.recommendations.value) || 0;
                const totalMarks = analysisMarks + frameworkMarks + recMarks;
                const feedback = form.feedback.value.trim();

                if (totalMarks > showGradeModal.maxMarks) {
                  showToast(`Total rubric marks (${totalMarks}) cannot exceed ${showGradeModal.maxMarks}!`, "error");
                  return;
                }

                setData(prev => ({
                  ...prev,
                  submissions: prev.submissions.map(s => 
                    s.id === showGradeModal.id
                      ? { 
                          ...s, 
                          marks: totalMarks, 
                          rubric: { analysis: analysisMarks, framework: frameworkMarks, recommendations: recMarks },
                          feedback 
                        }
                      : s
                  )
                }));

                showToast(`Grades published for ${showGradeModal.studentName}!`, "success");
                setShowGradeModal(null);
              }}
              className="space-y-3 text-xs"
            >
              <div className="grid grid-cols-3 gap-3 p-3 bg-slate-50 dark:bg-slate-850 rounded-xl">
                <div>
                  <label className="font-semibold block mb-1">Analysis ({showGradeModal.weights?.analysis || 8}m):</label>
                  <input
                    name="analysis"
                    type="number"
                    min="0"
                    max={showGradeModal.weights?.analysis || 8}
                    defaultValue={showGradeModal.rubric?.analysis ?? Math.round((showGradeModal.marks || 15) * 0.4)}
                    required
                    className="w-full px-2 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-center font-bold"
                  />
                </div>
                <div>
                  <label className="font-semibold block mb-1">Frameworks ({showGradeModal.weights?.framework || 6}m):</label>
                  <input
                    name="framework"
                    type="number"
                    min="0"
                    max={showGradeModal.weights?.framework || 6}
                    defaultValue={showGradeModal.rubric?.framework ?? Math.round((showGradeModal.marks || 15) * 0.3)}
                    required
                    className="w-full px-2 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-center font-bold"
                  />
                </div>
                <div>
                  <label className="font-semibold block mb-1">Recomm. ({showGradeModal.weights?.recommendations || 6}m):</label>
                  <input
                    name="recommendations"
                    type="number"
                    min="0"
                    max={showGradeModal.weights?.recommendations || 6}
                    defaultValue={showGradeModal.rubric?.recommendations ?? Math.round((showGradeModal.marks || 15) * 0.3)}
                    required
                    className="w-full px-2 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-center font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold block mb-1">Qualitative Feedback & Rubric Remarks:</label>
                <textarea
                  name="feedback"
                  rows="3"
                  defaultValue={showGradeModal.feedback || ""}
                  placeholder="State specific strengths in valuation, DCF sensitivity, or strategic risks..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                ></textarea>
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

      {/* MODAL: CREATE TASK */}
      {showTaskModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Create New Task</h3>
              <button onClick={() => setShowTaskModal(false)} className="text-slate-400 hover:text-slate-600">
                <Icon name="x" className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const title = form.title.value.trim();
                const topic = form.topic.value.trim();
                const due = form.due.value;
                const priority = form.priority.value;
                const teamId = form.teamId.value || null;

                if (teamId) {
                  const teamTasks = data.tasks.filter(t => t.teamId === teamId && !t.done);
                  if (teamTasks.length >= data.limits.teamTasks) {
                    showToast(`Team has reached limit of ${data.limits.teamTasks} active tasks!`, "error");
                    return;
                  }
                } else {
                  const myIndiv = data.tasks.filter(t => !t.teamId && t.owner === user.email && !t.done);
                  if (myIndiv.length >= data.limits.indivTasks) {
                    showToast(`You have reached limit of ${data.limits.indivTasks} personal active tasks!`, "error");
                    return;
                  }
                }

                const newTask = {
                  id: `tsk-${Date.now()}`,
                  title,
                  topic,
                  due: due ? new Date(due).toISOString() : null,
                  priority,
                  teamId,
                  owner: user.email,
                  by: user.name,
                  done: false
                };

                setData(prev => ({ ...prev, tasks: [newTask, ...prev.tasks] }));
                showToast("Task created successfully!", "success");
                setShowTaskModal(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="font-semibold block mb-1">Task Title:</label>
                <input name="title" required placeholder="e.g. Porter's 5 forces slide synthesis" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
              </div>

              <div>
                <label className="font-semibold block mb-1">Course / Subject Topic:</label>
                <input name="topic" required placeholder="e.g. Marketing Management" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold block mb-1">Priority:</label>
                  <select name="priority" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
                <div>
                  <label className="font-semibold block mb-1">Scope:</label>
                  <select name="teamId" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
                    <option value="">Personal Task</option>
                    {userTeams.map(t => (
                      <option key={t.id} value={t.id}>Team: {t.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="font-semibold block mb-1">Due Date & Time:</label>
                <input name="due" type="datetime-local" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button type="button" onClick={() => setShowTaskModal(false)} className="px-4 py-2 border rounded-xl font-semibold">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold">
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: POST ASSIGNMENT (FACULTY) */}
      {showAsgModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Post Case Assignment</h3>
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
                  subjectId: form.subject.value,
                  title: form.title.value.trim(),
                  desc: form.desc.value.trim(),
                  due: new Date(form.due.value).toISOString(),
                  maxMarks: Number(form.maxMarks.value) || 20,
                  rubricWeights: {
                    analysis: Number(form.analysisWeight.value) || 8,
                    framework: Number(form.frameworkWeight.value) || 6,
                    recommendations: Number(form.recWeight.value) || 6
                  },
                  postedBy: user.name
                };

                setData(prev => ({ ...prev, assignments: [newAsg, ...prev.assignments] }));
                showToast("Case assignment published to cohort!", "success");
                setShowAsgModal(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="font-semibold block mb-1">Subject / Course:</label>
                <select name="subject" required className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
                  {data.subjects.map(s => (
                    <option key={s.id} value={s.id}>{s.code} - {s.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-semibold block mb-1">Case Study Title:</label>
                <input name="title" required placeholder="e.g. Tesla Gigafactory Capital Allocation Strategy" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold block mb-1">Max Marks:</label>
                  <input name="maxMarks" type="number" min="1" defaultValue="20" required className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
                </div>
                <div>
                  <label className="font-semibold block mb-1">Due Date & Time:</label>
                  <input name="due" type="datetime-local" required className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="font-semibold block mb-1">Analysis Wt:</label>
                  <input name="analysisWeight" type="number" defaultValue="8" className="w-full px-2 py-1 rounded bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
                </div>
                <div>
                  <label className="font-semibold block mb-1">Framework Wt:</label>
                  <input name="frameworkWeight" type="number" defaultValue="6" className="w-full px-2 py-1 rounded bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
                </div>
                <div>
                  <label className="font-semibold block mb-1">Recomm. Wt:</label>
                  <input name="recWeight" type="number" defaultValue="6" className="w-full px-2 py-1 rounded bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
                </div>
              </div>

              <div>
                <label className="font-semibold block mb-1">Submission Instructions:</label>
                <textarea name="desc" rows="3" required placeholder="State key strategic questions, formatting specifications, and required appendices..." className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"></textarea>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button type="button" onClick={() => setShowAsgModal(false)} className="px-4 py-2 border rounded-xl font-semibold">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold">
                  Post to Cohort
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: FORM SYNDICATE GROUP */}
      {showTeamModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Form Syndicate Group</h3>
              <button onClick={() => setShowTeamModal(false)} className="text-slate-400 hover:text-slate-600">
                <Icon name="x" className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const name = form.teamName.value.trim();

                const newTeam = {
                  id: `t-${Date.now()}`,
                  name,
                  batchId: selectedBatch,
                  leader: user.name,
                  members: [user.name]
                };

                setData(prev => ({ ...prev, teams: [...prev.teams, newTeam] }));
                showToast(`Formed ${name}! Registered as team leader.`, "success");
                setShowTeamModal(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="font-semibold block mb-1">Team Name:</label>
                <input name="teamName" required placeholder="e.g. Phoenix Strategy Partners" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button type="button" onClick={() => setShowTeamModal(false)} className="px-4 py-2 border rounded-xl font-semibold">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold">
                  Create Group
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD COURSE (FACULTY) */}
      {showCourseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Add Course Subject</h3>
              <button onClick={() => setShowCourseModal(false)} className="text-slate-400 hover:text-slate-600">
                <Icon name="x" className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const newCourse = {
                  id: `s-${Date.now()}`,
                  code: form.code.value.trim().toUpperCase(),
                  name: form.name.value.trim(),
                  fac: user.name,
                  credits: Number(form.credits.value) || 3,
                  totalClasses: Number(form.totalClasses.value) || 24
                };

                setData(prev => ({ ...prev, subjects: [...prev.subjects, newCourse] }));
                showToast(`Course ${newCourse.code} created!`, "success");
                setShowCourseModal(false);
              }}
              className="space-y-3 text-xs"
            >
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold block mb-1">Course Code:</label>
                  <input name="code" required placeholder="e.g. STR701" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
                </div>
                <div>
                  <label className="font-semibold block mb-1">Credits:</label>
                  <input name="credits" type="number" defaultValue="3" min="1" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
                </div>
              </div>

              <div>
                <label className="font-semibold block mb-1">Subject Name:</label>
                <input name="name" required placeholder="e.g. Strategic Management & Corporate Governance" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
              </div>

              <div>
                <label className="font-semibold block mb-1">Planned Lecture Count:</label>
                <input name="totalClasses" type="number" defaultValue="24" min="10" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button type="button" onClick={() => setShowCourseModal(false)} className="px-4 py-2 border rounded-xl font-semibold">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold">
                  Save Course
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: POST NOTICE */}
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
                  title: form.title.value.trim(),
                  category: form.category.value,
                  msg: form.msg.value.trim(),
                  pinned: form.pinned.checked,
                  postedAt: new Date().toISOString(),
                  author: user.name
                };

                setData(prev => ({ ...prev, notices: [newNotice, ...prev.notices] }));
                showToast("Notice published to cohort board!", "success");
                setShowNoticeModal(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="font-semibold block mb-1">Notice Title:</label>
                <input name="title" required placeholder="e.g. Schedule for Trimester Comprehensive Viva" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
              </div>

              <div>
                <label className="font-semibold block mb-1">Category:</label>
                <select name="category" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
                  <option>Academic</option>
                  <option>Placements</option>
                  <option>Examinations</option>
                  <option>Administrative</option>
                </select>
              </div>

              <div>
                <label className="font-semibold block mb-1">Circular Message:</label>
                <textarea name="msg" rows="3" required placeholder="Write the full circular description..." className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"></textarea>
              </div>

              <div className="flex items-center gap-2">
                <input name="pinned" type="checkbox" id="pin-notice" className="w-4 h-4 rounded text-blue-600 accent-blue-600" />
                <label htmlFor="pin-notice" className="font-semibold text-slate-700 dark:text-slate-300">
                  Pin to top of student dashboard
                </label>
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

      {/* MODAL: ADD EVENT */}
      {showEventModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Schedule Calendar Event</h3>
              <button onClick={() => setShowEventModal(false)} className="text-slate-400 hover:text-slate-600">
                <Icon name="x" className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const newEv = {
                  id: `ev-${Date.now()}`,
                  title: form.title.value.trim(),
                  category: form.category.value,
                  at: new Date(form.at.value).toISOString(),
                  where: form.where.value.trim(),
                  speaker: form.speaker.value.trim()
                };

                setData(prev => ({ ...prev, events: [...prev.events, newEv] }));
                showToast("Event added to academic calendar!", "success");
                setShowEventModal(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="font-semibold block mb-1">Event Title:</label>
                <input name="title" required placeholder="e.g. Industry CXO Keynote" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold block mb-1">Category:</label>
                  <select name="category" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
                    <option>Guest Lecture</option>
                    <option>Academics</option>
                    <option>Workshop</option>
                    <option>Placement</option>
                  </select>
                </div>
                <div>
                  <label className="font-semibold block mb-1">Date & Time:</label>
                  <input name="at" type="datetime-local" required className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
                </div>
              </div>

              <div>
                <label className="font-semibold block mb-1">Location or Link:</label>
                <input name="where" required placeholder="e.g. Seminar Hall 1 or Zoom Link" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
              </div>

              <div>
                <label className="font-semibold block mb-1">Speaker / Facilitator (Optional):</label>
                <input name="speaker" placeholder="e.g. Mr. Rajesh Sharma (Managing Director, PwC)" className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button type="button" onClick={() => setShowEventModal(false)} className="px-4 py-2 border rounded-xl font-semibold">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold">
                  Schedule Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: IMPORT CSV */}
      {showImportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Import Students (CSV)</h3>
              <button onClick={() => setShowImportModal(false)} className="text-slate-400 hover:text-slate-600">
                <Icon name="x" className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const text = form.csv.value.trim();
                if (!text) return;

                const lines = text.split("\n");
                const newStudents = [];

                lines.forEach((l, idx) => {
                  const parts = l.split(",").map(p => p.trim());
                  if (parts.length >= 2) {
                    const name = parts[0];
                    const email = parts[1];
                    const roll = parts[2] || `25MBA${100 + idx}`;
                    const spec = parts[3] || "General Management";

                    if (!currentBatch.students.some(s => s.email === email)) {
                      newStudents.push({
                        name,
                        email,
                        roll,
                        spec,
                        attendance: { s1: { attended: 20, total: 24 } }
                      });
                    }
                  }
                });

                if (newStudents.length === 0) {
                  showToast("No new student rows found in text.", "error");
                  return;
                }

                setData(prev => ({
                  ...prev,
                  batches: prev.batches.map(b => 
                    b.id === selectedBatch 
                      ? { ...b, students: [...b.students, ...newStudents] }
                      : b
                  )
                }));

                showToast(`Imported ${newStudents.length} candidates into ${currentBatch.name}!`, "success");
                setShowImportModal(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="font-semibold block mb-1">
                  Paste rows (Format: Name, Email, RollNo, Specialization):
                </label>
                <textarea
                  name="csv"
                  rows="5"
                  required
                  placeholder="Kavitha Reddy, kavitha.r25@psgim.ac.in, 25MBA088, Finance&#10;Manoj Kumar, manoj.k25@psgim.ac.in, 25MBA089, Operations"
                  className="w-full font-mono text-[11px] px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                ></textarea>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button type="button" onClick={() => setShowImportModal(false)} className="px-4 py-2 border rounded-xl font-semibold">
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

      {/* Mobile Bottom Navigation */}
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
