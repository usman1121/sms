import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
    personal: {
        name: 'YeneSchool',
        title: "The World's First AI-Director-Driven School Operating System",
        subtitle: 'School Operations on True Autopilot • Built for Ethiopian Institutions',
        bio: 'YeneSchool is Ethiopia’s premier AI-powered School Operating System, engineered by HUMAN Tech PLC in Addis Ababa. While you sleep, the AI Director audits yesterday’s attendance, flags syllabus delays, drafts 5E lesson plans, and balances CBE and Telebirr fee records. By 07:00 AM, leadership receives an executive briefing with pre-resolved operational actions—zero manual spreadsheets required.',
        avatar: '/yeneschool/logo.svg',
        location: 'Addis Ababa, Ethiopia',
        email: 'contact@yeneschool.com',
        phone: '+251 91 100 0000',
        resumeUrl: '/contact',
        website: 'https://yeneschool.com',
        languages: [
            { name: 'Amharic', level: 'Native' },
            { name: 'English', level: 'Fluent' },
            { name: 'Afaan Oromo', level: 'Professional' },
        ],
        socialLinks: [
            {
                platform: 'Telegram',
                url: 'https://t.me/yeneschool_bot',
                icon: 'discord',
                username: '@yeneschool_bot',
            },
            {
                platform: 'LinkedIn',
                url: 'https://linkedin.com/company/yeneschool',
                icon: 'linkedin',
                username: 'YeneSchool Ethiopia',
            },
            {
                platform: 'GitHub',
                url: 'https://github.com/yeneschool',
                icon: 'github',
                username: 'yeneschool',
            },
            {
                platform: 'Instagram',
                url: 'https://instagram.com/yeneschool',
                icon: 'instagram',
                username: 'yeneschool.et',
            },
        ],
    },
        projects: [
        {
                "id": "module-academic",
                "slug": "academic",
                "title": "Academic Management",
                "description": "Controls the school structure that every other workflow depends on, including Ethiopian academic periods and school grade-system settings.",
                "longDescription": "Controls the school structure that every other workflow depends on, including Ethiopian academic periods and school grade-system settings. Specifically engineered for Ethiopian schools, featuring native multi-language support, dual calendar compliance, and offline-first data resilience.",
                "image": "/yeneschool/schoolsetting.png",
                "category": "Academic & Pedagogy",
                "techStack": [
                        "13-Month Ethiopian Calendar",
                        "Meskerem–Pagume",
                        "G1–12 Structure",
                        "Timetable Matrix"
                ],
                "tools": [
                        "PostgreSQL",
                        "NestJS",
                        "Next.js",
                        "Dexie.js",
                        "Telegram Bot API"
                ],
                "status": "completed",
                "demoUrl": "/contact",
                "repoUrl": "https://www.yeneschooldocumentation.vercel.app",
                "startDate": "2025-01-01",
                "endDate": "2026-03-01",
                "highlights": [
                        "Academic years, terms, quarters, semesters, and current-period selection",
                        "Grade-system setup for Grade 1-8 or Grade 1-12 schools",
                        "Classes, sections, capacity syncing, and homeroom teachers",
                        "Subjects, class-subject links, and teacher subject assignments"
                ],
                "role": "Director, Supervisor",
                "features": [
                        {
                                "title": "Core Capabilities",
                                "items": [
                                        "Academic years, terms, quarters, semesters, and current-period selection",
                                        "Grade-system setup for Grade 1-8 or Grade 1-12 schools",
                                        "Classes, sections, capacity syncing, and homeroom teachers",
                                        "Subjects, class-subject links, and teacher subject assignments",
                                        "Timetable slots, period times, and school calendar records",
                                        "Feeds attendance, grading, report cards, promotion, and exam seating"
                                ]
                        }
                ],
                "galleryImages": [
                        "/yeneschool/schoolsetting.png",
                        "/yeneschool/schoolanalytics.png",
                        "/yeneschool/schooldatahealth.png"
                ]
        },
        {
                "id": "module-student",
                "slug": "student",
                "title": "Student Management",
                "description": "Manages the full student lifecycle from admission request to active enrollment, credentials, documents, and yearly movement.",
                "longDescription": "Manages the full student lifecycle from admission request to active enrollment, credentials, documents, and yearly movement. Specifically engineered for Ethiopian schools, featuring native multi-language support, dual calendar compliance, and offline-first data resilience.",
                "image": "/yeneschool/studentleaderboard.png",
                "category": "Administration",
                "techStack": [
                        "Student 360 Dossier",
                        "Medical & Family Records",
                        "Emergency Contacts",
                        "Digital Enrollment"
                ],
                "tools": [
                        "PostgreSQL",
                        "NestJS",
                        "Next.js",
                        "Dexie.js",
                        "Telegram Bot API"
                ],
                "status": "completed",
                "demoUrl": "/contact",
                "repoUrl": "https://www.yeneschooldocumentation.vercel.app",
                "startDate": "2025-01-01",
                "endDate": "2026-03-01",
                "highlights": [
                        "Enrollment requests with approval, rejection, waitlist, and credential generation",
                        "Student profile records with parent and guardian relationships",
                        "Class, section, roll number, stream, and academic-year placement",
                        "Bulk upload for students and users with generated credential exports"
                ],
                "role": "Director, Registrar",
                "features": [
                        {
                                "title": "Core Capabilities",
                                "items": [
                                        "Enrollment requests with approval, rejection, waitlist, and credential generation",
                                        "Student profile records with parent and guardian relationships",
                                        "Class, section, roll number, stream, and academic-year placement",
                                        "Bulk upload for students and users with generated credential exports",
                                        "ID card generation and document records tied to student profiles",
                                        "Promotion history, retained/promoted status, and transfer-ready records"
                                ]
                        }
                ],
                "galleryImages": [
                        "/yeneschool/studentleaderboard.png",
                        "/yeneschool/schoolanalytics.png",
                        "/yeneschool/schooldatahealth.png"
                ]
        },
        {
                "id": "module-attendance",
                "slug": "attendance",
                "title": "Attendance",
                "description": "Session-based attendance built for teachers, admins, parents, and unreliable connectivity.",
                "longDescription": "Session-based attendance built for teachers, admins, parents, and unreliable connectivity. Specifically engineered for Ethiopian schools, featuring native multi-language support, dual calendar compliance, and offline-first data resilience.",
                "image": "/yeneschool/schooldatahealth.png",
                "category": "Administration",
                "techStack": [
                        "Biometric Scanners",
                        "Dexie.js IndexedDB",
                        "Offline-First Sync",
                        "Telegram Push Alerts"
                ],
                "tools": [
                        "PostgreSQL",
                        "NestJS",
                        "Next.js",
                        "Dexie.js",
                        "Telegram Bot API"
                ],
                "status": "completed",
                "demoUrl": "/contact",
                "repoUrl": "https://www.yeneschooldocumentation.vercel.app",
                "startDate": "2025-01-01",
                "endDate": "2026-03-01",
                "highlights": [
                        "Teacher attendance entry by class, section, date, and period context",
                        "Attendance sessions with submitted status and per-student records",
                        "Offline attendance capture and sync endpoints for local-first workflows",
                        "Director attendance overview, missing-session follow-up, and reports"
                ],
                "role": "Teacher, Director, Parent",
                "features": [
                        {
                                "title": "Core Capabilities",
                                "items": [
                                        "Teacher attendance entry by class, section, date, and period context",
                                        "Attendance sessions with submitted status and per-student records",
                                        "Offline attendance capture and sync endpoints for local-first workflows",
                                        "Director attendance overview, missing-session follow-up, and reports",
                                        "Parent and student attendance pages scoped to the selected academic year",
                                        "Absence and late notification flow for parent-visible updates"
                                ]
                        }
                ],
                "galleryImages": [
                        "/yeneschool/schooldatahealth.png",
                        "/yeneschool/schoolanalytics.png",
                        "/yeneschool/schooldatahealth.png"
                ]
        },
        {
                "id": "module-marks",
                "slug": "marks",
                "title": "Marks & Report Cards",
                "description": "Connects teacher score entry, assessment setup, publishing readiness, report cards, certificates, and year-end promotion.",
                "longDescription": "Connects teacher score entry, assessment setup, publishing readiness, report cards, certificates, and year-end promotion. Specifically engineered for Ethiopian schools, featuring native multi-language support, dual calendar compliance, and offline-first data resilience.",
                "image": "/yeneschool/quartersummary.png",
                "category": "Academic & Pedagogy",
                "techStack": [
                        "Ministry of Education Formats",
                        "Quarterly Summaries",
                        "Bulk PDF Export",
                        "Class Rankings"
                ],
                "tools": [
                        "PostgreSQL",
                        "NestJS",
                        "Next.js",
                        "Dexie.js",
                        "Telegram Bot API"
                ],
                "status": "completed",
                "demoUrl": "/contact",
                "repoUrl": "https://www.yeneschooldocumentation.vercel.app",
                "startDate": "2025-01-01",
                "endDate": "2026-03-01",
                "highlights": [
                        "Assessment setup, assessment subjects, weights, score status, and grading scales",
                        "Teacher marks entry with admin assessment and entry-progress visibility",
                        "Exam results, rankings, publish-results workflow, and report-card readiness checks",
                        "Bulk report-card generation, publish summary, parent/student published views"
                ],
                "role": "Director, Teacher, Parent, Student",
                "features": [
                        {
                                "title": "Core Capabilities",
                                "items": [
                                        "Assessment setup, assessment subjects, weights, score status, and grading scales",
                                        "Teacher marks entry with admin assessment and entry-progress visibility",
                                        "Exam results, rankings, publish-results workflow, and report-card readiness checks",
                                        "Bulk report-card generation, publish summary, parent/student published views",
                                        "Certificate template, watermark upload, single PDF, and bulk ZIP downloads",
                                        "Promotion candidates with published report-card and eligibility checks"
                                ]
                        }
                ],
                "galleryImages": [
                        "/yeneschool/quartersummary.png",
                        "/yeneschool/schoolanalytics.png",
                        "/yeneschool/schooldatahealth.png"
                ]
        },
        {
                "id": "module-finance",
                "slug": "finance",
                "title": "Finance",
                "description": "Separates fee setup, assigned student balances, receipts, discounts, overdue follow-up, and parent-facing fee visibility.",
                "longDescription": "Separates fee setup, assigned student balances, receipts, discounts, overdue follow-up, and parent-facing fee visibility. Specifically engineered for Ethiopian schools, featuring native multi-language support, dual calendar compliance, and offline-first data resilience.",
                "image": "/yeneschool/financedashbaord.png",
                "category": "Finance & Operations",
                "techStack": [
                        "Telebirr Integration",
                        "CBE Birr Automated Ledger",
                        "Cashless Fee Tracking",
                        "Digital Slips"
                ],
                "tools": [
                        "PostgreSQL",
                        "NestJS",
                        "Next.js",
                        "Dexie.js",
                        "Telegram Bot API"
                ],
                "status": "completed",
                "demoUrl": "/contact",
                "repoUrl": "https://www.yeneschooldocumentation.vercel.app",
                "startDate": "2025-01-01",
                "endDate": "2026-03-01",
                "highlights": [
                        "Fee structures by academic year, category, grade range, and installment plan",
                        "Student fee assignment, outstanding balances, payment status, and receipts",
                        "Discount policies, reversals, audit logs, and finance summaries",
                        "Overdue reports, total overdue counts, and export-friendly report pages"
                ],
                "role": "Finance, Parent",
                "features": [
                        {
                                "title": "Core Capabilities",
                                "items": [
                                        "Fee structures by academic year, category, grade range, and installment plan",
                                        "Student fee assignment, outstanding balances, payment status, and receipts",
                                        "Discount policies, reversals, audit logs, and finance summaries",
                                        "Overdue reports, total overdue counts, and export-friendly report pages",
                                        "Parent fee views connected to published student finance records",
                                        "Payroll page and finance-only navigation for restricted money workflows"
                                ]
                        }
                ],
                "galleryImages": [
                        "/yeneschool/financedashbaord.png",
                        "/yeneschool/schoolanalytics.png",
                        "/yeneschool/schooldatahealth.png"
                ]
        },
        {
                "id": "module-communication",
                "slug": "communication",
                "title": "Communication Book",
                "description": "Combines public announcements, school communication books, internal messaging, notifications, and events.",
                "longDescription": "Combines public announcements, school communication books, internal messaging, notifications, and events. Specifically engineered for Ethiopian schools, featuring native multi-language support, dual calendar compliance, and offline-first data resilience.",
                "image": "/yeneschool/parent.png",
                "category": "Portals & Community",
                "techStack": [
                        "Zero-App Telegram Bot",
                        "Direct SMS Broadcasts",
                        "Two-Way Messaging",
                        "Parent Circulars"
                ],
                "tools": [
                        "PostgreSQL",
                        "NestJS",
                        "Next.js",
                        "Dexie.js",
                        "Telegram Bot API"
                ],
                "status": "completed",
                "demoUrl": "/contact",
                "repoUrl": "https://www.yeneschooldocumentation.vercel.app",
                "startDate": "2025-01-01",
                "endDate": "2026-03-01",
                "highlights": [
                        "Announcements with active counts, audience filtering, and notification creation",
                        "Communication book records with categories, status, and reply threads",
                        "Internal chat rooms, conversations, messages, participants, and read tracking",
                        "Notification preferences, push subscriptions, and role-targeted notifications"
                ],
                "role": "Director, Teacher, Parent, Student",
                "features": [
                        {
                                "title": "Core Capabilities",
                                "items": [
                                        "Announcements with active counts, audience filtering, and notification creation",
                                        "Communication book records with categories, status, and reply threads",
                                        "Internal chat rooms, conversations, messages, participants, and read tracking",
                                        "Notification preferences, push subscriptions, and role-targeted notifications",
                                        "School events and calendar-visible operational updates",
                                        "Dedicated messages, announcements, and communications pages in the dashboard"
                                ]
                        }
                ],
                "galleryImages": [
                        "/yeneschool/parent.png",
                        "/yeneschool/schoolanalytics.png",
                        "/yeneschool/schooldatahealth.png"
                ]
        },
        {
                "id": "module-localSupport",
                "slug": "local-support",
                "title": "Local School Support",
                "description": "Handles the local constraints that generic school systems usually miss: languages, calendars, grade models, and Ethiopian academic periods.",
                "longDescription": "Handles the local constraints that generic school systems usually miss: languages, calendars, grade models, and Ethiopian academic periods. Specifically engineered for Ethiopian schools, featuring native multi-language support, dual calendar compliance, and offline-first data resilience.",
                "image": "/yeneschool/schoolsetting.png",
                "category": "Compliance & Infrastructure",
                "techStack": [
                        "Amharic & Afaan Oromo",
                        "Somali & Tigrinya",
                        "Ethiopian Fiscal Year",
                        "National Curricula"
                ],
                "tools": [
                        "PostgreSQL",
                        "NestJS",
                        "Next.js",
                        "Dexie.js",
                        "Telegram Bot API"
                ],
                "status": "completed",
                "demoUrl": "/contact",
                "repoUrl": "https://www.yeneschooldocumentation.vercel.app",
                "startDate": "2025-01-01",
                "endDate": "2026-03-01",
                "highlights": [
                        "English, Amharic, Arabic, Oromo, and Somali UI language support",
                        "Ethiopian and Gregorian calendar workflows for school operations",
                        "Grade 1-8 and Grade 1-12 mode driven by school settings",
                        "Local academic periods, term labels, and current academic-year behavior"
                ],
                "role": "Director, Supervisor",
                "features": [
                        {
                                "title": "Core Capabilities",
                                "items": [
                                        "English, Amharic, Arabic, Oromo, and Somali UI language support",
                                        "Ethiopian and Gregorian calendar workflows for school operations",
                                        "Grade 1-8 and Grade 1-12 mode driven by school settings",
                                        "Local academic periods, term labels, and current academic-year behavior",
                                        "Grade 6 and Grade 8 national-exam style workflows for primary/middle schools",
                                        "School-specific settings for logos, profile, branding, and operational defaults"
                                ]
                        }
                ],
                "galleryImages": [
                        "/yeneschool/schoolsetting.png",
                        "/yeneschool/schoolanalytics.png",
                        "/yeneschool/schooldatahealth.png"
                ]
        },
        {
                "id": "module-lessons",
                "slug": "lessons",
                "title": "Lessons & Assignments",
                "description": "Connects teacher lesson activity, class work, homework, and parent/student visibility to the academic timetable.",
                "longDescription": "Connects teacher lesson activity, class work, homework, and parent/student visibility to the academic timetable. Specifically engineered for Ethiopian schools, featuring native multi-language support, dual calendar compliance, and offline-first data resilience.",
                "image": "/yeneschool/syllubs.png",
                "category": "Academic & Pedagogy",
                "techStack": [
                        "5E Pedagogical Framework",
                        "Homework Dropbox",
                        "AI Lesson Plan Generator",
                        "Teacher Workspace"
                ],
                "tools": [
                        "PostgreSQL",
                        "NestJS",
                        "Next.js",
                        "Dexie.js",
                        "Telegram Bot API"
                ],
                "status": "completed",
                "demoUrl": "/contact",
                "repoUrl": "https://www.yeneschooldocumentation.vercel.app",
                "startDate": "2025-01-01",
                "endDate": "2026-03-01",
                "highlights": [
                        "Teacher lesson records tied to assigned classes, sections, subjects, and timetable periods",
                        "Assignments and class work visible to students and linked parents",
                        "Lesson progress signals for admin and teacher dashboards",
                        "Teacher workspace for daily class activity and follow-up tasks"
                ],
                "role": "Teacher, Student, Parent",
                "features": [
                        {
                                "title": "Core Capabilities",
                                "items": [
                                        "Teacher lesson records tied to assigned classes, sections, subjects, and timetable periods",
                                        "Assignments and class work visible to students and linked parents",
                                        "Lesson progress signals for admin and teacher dashboards",
                                        "Teacher workspace for daily class activity and follow-up tasks",
                                        "Student views for lessons, assignments, timetable, and academic work",
                                        "Parent visibility into assigned learning tasks without separate message groups"
                                ]
                        }
                ],
                "galleryImages": [
                        "/yeneschool/syllubs.png",
                        "/yeneschool/schoolanalytics.png",
                        "/yeneschool/schooldatahealth.png"
                ]
        },
        {
                "id": "module-syllabus",
                "slug": "syllabus",
                "title": "Syllabus & Curriculum",
                "description": "Organizes subject syllabi and curriculum coverage so teachers, directors, and supervisors can track what is taught against the academic calendar.",
                "longDescription": "Organizes subject syllabi and curriculum coverage so teachers, directors, and supervisors can track what is taught against the academic calendar. Specifically engineered for Ethiopian schools, featuring native multi-language support, dual calendar compliance, and offline-first data resilience.",
                "image": "/yeneschool/syllubs.png",
                "category": "Academic & Pedagogy",
                "techStack": [
                        "Competency Mapping",
                        "Curriculum Pacing Matrix",
                        "MoE Learning Outcomes",
                        "Topic Mastery"
                ],
                "tools": [
                        "PostgreSQL",
                        "NestJS",
                        "Next.js",
                        "Dexie.js",
                        "Telegram Bot API"
                ],
                "status": "completed",
                "demoUrl": "/contact",
                "repoUrl": "https://www.yeneschooldocumentation.vercel.app",
                "startDate": "2025-01-01",
                "endDate": "2026-03-01",
                "highlights": [
                        "Subject syllabus outlines with units, chapters, and topics per grade and section",
                        "Curriculum progress tracking against terms and the academic calendar",
                        "Teacher lesson-to-syllabus linking showing covered and remaining topics",
                        "Progress dashboards for directors and supervisors across classes and subjects"
                ],
                "role": "Director, Teacher, Supervisor",
                "features": [
                        {
                                "title": "Core Capabilities",
                                "items": [
                                        "Subject syllabus outlines with units, chapters, and topics per grade and section",
                                        "Curriculum progress tracking against terms and the academic calendar",
                                        "Teacher lesson-to-syllabus linking showing covered and remaining topics",
                                        "Progress dashboards for directors and supervisors across classes and subjects",
                                        "Pacing alerts when coverage falls behind the planned schedule",
                                        "Syllabus documents and resources attached to each subject and class"
                                ]
                        }
                ],
                "galleryImages": [
                        "/yeneschool/syllubs.png",
                        "/yeneschool/schoolanalytics.png",
                        "/yeneschool/schooldatahealth.png"
                ]
        },
        {
                "id": "module-automation",
                "slug": "automation",
                "title": "Automation & Reporting",
                "description": "Turns operational data into dashboards, board-ready reports, and follow-up lists rather than disconnected exports.",
                "longDescription": "Turns operational data into dashboards, board-ready reports, and follow-up lists rather than disconnected exports. Specifically engineered for Ethiopian schools, featuring native multi-language support, dual calendar compliance, and offline-first data resilience.",
                "image": "/yeneschool/directordashbaord.png",
                "category": "AI & Automation",
                "techStack": [
                        "CRON Task Scheduler",
                        "Attendance Deficit Audits",
                        "Unrecorded Grades Alerter",
                        "Daily Digests"
                ],
                "tools": [
                        "PostgreSQL",
                        "NestJS",
                        "Next.js",
                        "Dexie.js",
                        "Telegram Bot API"
                ],
                "status": "completed",
                "demoUrl": "/contact",
                "repoUrl": "https://www.yeneschooldocumentation.vercel.app",
                "startDate": "2025-01-01",
                "endDate": "2026-03-01",
                "highlights": [
                        "Director, teacher, parent, student, registrar, and finance dashboards",
                        "Teacher leaderboard using attendance, grading timeliness, lessons, and related metrics",
                        "Parent presentation report with overview, class comparison, subject comparison, and insights",
                        "School data health checks for consistency and maintenance follow-up"
                ],
                "role": "Director, Finance, Supervisor",
                "features": [
                        {
                                "title": "Core Capabilities",
                                "items": [
                                        "Director, teacher, parent, student, registrar, and finance dashboards",
                                        "Teacher leaderboard using attendance, grading timeliness, lessons, and related metrics",
                                        "Parent presentation report with overview, class comparison, subject comparison, and insights",
                                        "School data health checks for consistency and maintenance follow-up",
                                        "Finance reports, overdue summaries, academic reports, and attendance trends",
                                        "Backups, exports, search-like raw queries, and audit-friendly operational records"
                                ]
                        }
                ],
                "galleryImages": [
                        "/yeneschool/directordashbaord.png",
                        "/yeneschool/schoolanalytics.png",
                        "/yeneschool/schooldatahealth.png"
                ]
        },
        {
                "id": "module-operations",
                "slug": "operations",
                "title": "Operations",
                "description": "Supports the daily routines that keep the school moving: bells, templates, imports, device hooks, and operational alerts.",
                "longDescription": "Supports the daily routines that keep the school moving: bells, templates, imports, device hooks, and operational alerts. Specifically engineered for Ethiopian schools, featuring native multi-language support, dual calendar compliance, and offline-first data resilience.",
                "image": "/yeneschool/financedashbaord.png",
                "category": "Finance & Operations",
                "techStack": [
                        "Uniform & Book Inventory",
                        "Asset Barcode Tracking",
                        "Facility Management",
                        "Supplier Ledger"
                ],
                "tools": [
                        "PostgreSQL",
                        "NestJS",
                        "Next.js",
                        "Dexie.js",
                        "Telegram Bot API"
                ],
                "status": "completed",
                "demoUrl": "/contact",
                "repoUrl": "https://www.yeneschooldocumentation.vercel.app",
                "startDate": "2025-01-01",
                "endDate": "2026-03-01",
                "highlights": [
                        "Siren schedules, siren events, manual ring action, and browser audio fallback",
                        "Hardware bell configuration and webhook-friendly siren controller routes",
                        "Dynamic timetable sirens scoped to the assigned teacher for the current period",
                        "Period-time setup and timetable-driven start/end-of-class alerts"
                ],
                "role": "Director, Supervisor",
                "features": [
                        {
                                "title": "Core Capabilities",
                                "items": [
                                        "Siren schedules, siren events, manual ring action, and browser audio fallback",
                                        "Hardware bell configuration and webhook-friendly siren controller routes",
                                        "Dynamic timetable sirens scoped to the assigned teacher for the current period",
                                        "Period-time setup and timetable-driven start/end-of-class alerts",
                                        "Document templates for school records and generated outputs",
                                        "Bulk import/export and operational notifications across school workflows"
                                ]
                        }
                ],
                "galleryImages": [
                        "/yeneschool/financedashbaord.png",
                        "/yeneschool/schoolanalytics.png",
                        "/yeneschool/schooldatahealth.png"
                ]
        },
        {
                "id": "module-admissions",
                "slug": "admissions",
                "title": "Admissions & Enrollment",
                "description": "Moves applicants from public enrollment into active student, parent, class, and credential records.",
                "longDescription": "Moves applicants from public enrollment into active student, parent, class, and credential records. Specifically engineered for Ethiopian schools, featuring native multi-language support, dual calendar compliance, and offline-first data resilience.",
                "image": "/yeneschool/studentpromotion.png",
                "category": "Administration",
                "techStack": [
                        "Online Application Portal",
                        "Document Verification",
                        "Fee Deposit Verification",
                        "Sectioning"
                ],
                "tools": [
                        "PostgreSQL",
                        "NestJS",
                        "Next.js",
                        "Dexie.js",
                        "Telegram Bot API"
                ],
                "status": "completed",
                "demoUrl": "/contact",
                "repoUrl": "https://www.yeneschooldocumentation.vercel.app",
                "startDate": "2025-01-01",
                "endDate": "2026-03-01",
                "highlights": [
                        "Public school pages and enrollment request forms for applicants",
                        "Registrar/admin review with approve, reject, and waitlist flows",
                        "Encrypted enrollment tokens and configured frontend enrollment URLs",
                        "Credential generation for student and parent accounts after approval"
                ],
                "role": "Registrar, Director",
                "features": [
                        {
                                "title": "Core Capabilities",
                                "items": [
                                        "Public school pages and enrollment request forms for applicants",
                                        "Registrar/admin review with approve, reject, and waitlist flows",
                                        "Encrypted enrollment tokens and configured frontend enrollment URLs",
                                        "Credential generation for student and parent accounts after approval",
                                        "Class placement, section placement, roll numbers, and parent linkage",
                                        "Admission details including nationality, documents, guardians, and profile fields"
                                ]
                        }
                ],
                "galleryImages": [
                        "/yeneschool/studentpromotion.png",
                        "/yeneschool/schoolanalytics.png",
                        "/yeneschool/schooldatahealth.png"
                ]
        },
        {
                "id": "module-exams",
                "slug": "exams",
                "title": "Exams",
                "description": "Covers formal school exams, seating logistics, result entry, publishing readiness, and exam-related registrar workflows.",
                "longDescription": "Covers formal school exams, seating logistics, result entry, publishing readiness, and exam-related registrar workflows. Specifically engineered for Ethiopian schools, featuring native multi-language support, dual calendar compliance, and offline-first data resilience.",
                "image": "/yeneschool/schoolanalytics.png",
                "category": "Academic & Pedagogy",
                "techStack": [
                        "Conflict-Free Seating",
                        "Hall Ticket Printing",
                        "Invigilator Rotations",
                        "MoE Exam Compliance"
                ],
                "tools": [
                        "PostgreSQL",
                        "NestJS",
                        "Next.js",
                        "Dexie.js",
                        "Telegram Bot API"
                ],
                "status": "completed",
                "demoUrl": "/contact",
                "repoUrl": "https://www.yeneschooldocumentation.vercel.app",
                "startDate": "2025-01-01",
                "endDate": "2026-03-01",
                "highlights": [
                        "Assessment and exam setup, result entry, publish-results flow, rankings, and entry progress",
                        "Exam seating plans, section assignments, exam-section students, and seating modes",
                        "Current-period exam visibility for teachers, students, and parents",
                        "Publishing workflow that validates completion before releasing results"
                ],
                "role": "Director, Teacher, Student, Registrar",
                "features": [
                        {
                                "title": "Core Capabilities",
                                "items": [
                                        "Assessment and exam setup, result entry, publish-results flow, rankings, and entry progress",
                                        "Exam seating plans, section assignments, exam-section students, and seating modes",
                                        "Current-period exam visibility for teachers, students, and parents",
                                        "Publishing workflow that validates completion before releasing results",
                                        "Registrar national exams and school-leaving workflows where enabled by grade system",
                                        "Report-card readiness checks connected to formal exam and assessment data"
                                ]
                        }
                ],
                "galleryImages": [
                        "/yeneschool/schoolanalytics.png",
                        "/yeneschool/schoolanalytics.png",
                        "/yeneschool/schooldatahealth.png"
                ]
        },
        {
                "id": "module-onlineExams",
                "slug": "online-exams",
                "title": "Online Examinations",
                "description": "Lets teachers create controlled online exams while students complete timed attempts with saved answers and result feedback.",
                "longDescription": "Lets teachers create controlled online exams while students complete timed attempts with saved answers and result feedback. Specifically engineered for Ethiopian schools, featuring native multi-language support, dual calendar compliance, and offline-first data resilience.",
                "image": "/yeneschool/studentrisk.png",
                "category": "Academic & Pedagogy",
                "techStack": [
                        "CBT Exam Simulator",
                        "Grade 8 & 12 Question Banks",
                        "Instant Auto-Grading",
                        "Adaptive Quizzes"
                ],
                "tools": [
                        "PostgreSQL",
                        "NestJS",
                        "Next.js",
                        "Dexie.js",
                        "Telegram Bot API"
                ],
                "status": "completed",
                "demoUrl": "/contact",
                "repoUrl": "https://www.yeneschooldocumentation.vercel.app",
                "startDate": "2025-01-01",
                "endDate": "2026-03-01",
                "highlights": [
                        "Teacher-created online exams tied to assigned class, section, subject, grade, and stream",
                        "Draft, ready, active, archived, duration, pass mark, access-code, and shuffle-question controls",
                        "Question banks with multiple choice, true/false, and short-answer support",
                        "Student online examination list filtered by grade and stream with required access code"
                ],
                "role": "Teacher, Student, Director",
                "features": [
                        {
                                "title": "Core Capabilities",
                                "items": [
                                        "Teacher-created online exams tied to assigned class, section, subject, grade, and stream",
                                        "Draft, ready, active, archived, duration, pass mark, access-code, and shuffle-question controls",
                                        "Question banks with multiple choice, true/false, and short-answer support",
                                        "Student online examination list filtered by grade and stream with required access code",
                                        "Timed attempts with local draft recovery, autosave, flagged questions, submit, and expiry handling",
                                        "Automatic scoring, correct/wrong/skipped counts, percentage, pass-mark result, and submitted-at review"
                                ]
                        }
                ],
                "galleryImages": [
                        "/yeneschool/studentrisk.png",
                        "/yeneschool/schoolanalytics.png",
                        "/yeneschool/schooldatahealth.png"
                ]
        },
        {
                "id": "module-portals",
                "slug": "portals",
                "title": "User Portals",
                "description": "Gives each role a focused workspace so users only see the work they are responsible for.",
                "longDescription": "Gives each role a focused workspace so users only see the work they are responsible for. Specifically engineered for Ethiopian schools, featuring native multi-language support, dual calendar compliance, and offline-first data resilience.",
                "image": "/yeneschool/parentdashbaord.png",
                "category": "Portals & Community",
                "techStack": [
                        "8 Isolated Portals",
                        "Director",
                        "Supervisor",
                        "Registrar",
                        "Teacher",
                        "Student",
                        "Parent",
                        "Finance"
                ],
                "tools": [
                        "PostgreSQL",
                        "NestJS",
                        "Next.js",
                        "Dexie.js",
                        "Telegram Bot API"
                ],
                "status": "completed",
                "demoUrl": "/contact",
                "repoUrl": "https://www.yeneschooldocumentation.vercel.app",
                "startDate": "2025-01-01",
                "endDate": "2026-03-01",
                "highlights": [
                        "Super admin portal for schools, admins, subscriptions, backups, and platform settings",
                        "Director portal for academics, enrollment, reports, assessments, siren, people, and operations",
                        "Teacher portal for classes, attendance, lessons, timetable, grading, and online exams",
                        "Parent portal for children, attendance, grades, fees, lessons, discipline, and timetable"
                ],
                "role": "All roles",
                "features": [
                        {
                                "title": "Core Capabilities",
                                "items": [
                                        "Super admin portal for schools, admins, subscriptions, backups, and platform settings",
                                        "Director portal for academics, enrollment, reports, assessments, siren, people, and operations",
                                        "Teacher portal for classes, attendance, lessons, timetable, grading, and online exams",
                                        "Parent portal for children, attendance, grades, fees, lessons, discipline, and timetable",
                                        "Student portal for timetable, attendance, lessons, grades, exams, and practice exams",
                                        "Registrar, finance, and IT manager workspaces with narrower operational responsibilities"
                                ]
                        }
                ],
                "galleryImages": [
                        "/yeneschool/parentdashbaord.png",
                        "/yeneschool/schoolanalytics.png",
                        "/yeneschool/schooldatahealth.png"
                ]
        },
        {
                "id": "module-staff",
                "slug": "staff",
                "title": "Staff Directory & Responsibilities",
                "description": "Connects people records to responsibilities, assignments, credentials, departments, and accountability reporting.",
                "longDescription": "Connects people records to responsibilities, assignments, credentials, departments, and accountability reporting. Specifically engineered for Ethiopian schools, featuring native multi-language support, dual calendar compliance, and offline-first data resilience.",
                "image": "/yeneschool/teacherleaderboard.png",
                "category": "Administration",
                "techStack": [
                        "Workload Analytics",
                        "Credentials & Contracts",
                        "Subject Assignments",
                        "Attendance Logging"
                ],
                "tools": [
                        "PostgreSQL",
                        "NestJS",
                        "Next.js",
                        "Dexie.js",
                        "Telegram Bot API"
                ],
                "status": "completed",
                "demoUrl": "/contact",
                "repoUrl": "https://www.yeneschooldocumentation.vercel.app",
                "startDate": "2025-01-01",
                "endDate": "2026-03-01",
                "highlights": [
                        "Teacher profiles, staff records, departments, and employee documents",
                        "Teacher subject assignments and class-subject responsibility tracking",
                        "Generated credentials, pending credential queue, password reset support, and CSV exports",
                        "Teacher class pages, assigned students, timetable, lessons, attendance, and grading"
                ],
                "role": "Director, Supervisor",
                "features": [
                        {
                                "title": "Core Capabilities",
                                "items": [
                                        "Teacher profiles, staff records, departments, and employee documents",
                                        "Teacher subject assignments and class-subject responsibility tracking",
                                        "Generated credentials, pending credential queue, password reset support, and CSV exports",
                                        "Teacher class pages, assigned students, timetable, lessons, attendance, and grading",
                                        "Performance visibility through teacher leaderboard and dashboard metrics",
                                        "User management through bulk upload, role assignment, and profile management"
                                ]
                        }
                ],
                "galleryImages": [
                        "/yeneschool/teacherleaderboard.png",
                        "/yeneschool/schoolanalytics.png",
                        "/yeneschool/schooldatahealth.png"
                ]
        },
        {
                "id": "module-security",
                "slug": "security",
                "title": "Security & Permissions",
                "description": "Protects tenant data with role permissions, school scoping, subscription feature gates, rate limits, and maintenance controls.",
                "longDescription": "Protects tenant data with role permissions, school scoping, subscription feature gates, rate limits, and maintenance controls. Specifically engineered for Ethiopian schools, featuring native multi-language support, dual calendar compliance, and offline-first data resilience.",
                "image": "/yeneschool/schooldatahealth.png",
                "category": "Compliance & Infrastructure",
                "techStack": [
                        "Role-Based Access Control",
                        "Multi-Tenant Data Isolation",
                        "Encrypted Backups",
                        "Audit Logs"
                ],
                "tools": [
                        "PostgreSQL",
                        "NestJS",
                        "Next.js",
                        "Dexie.js",
                        "Telegram Bot API"
                ],
                "status": "completed",
                "demoUrl": "/contact",
                "repoUrl": "https://www.yeneschooldocumentation.vercel.app",
                "startDate": "2025-01-01",
                "endDate": "2026-03-01",
                "highlights": [
                        "JWT login with cookie or bearer token support, password reset, and password change flows",
                        "Role guards for ADMIN, IT_MANAGER, REGISTRAR, TEACHER, STUDENT, PARENT, and FINANCE",
                        "Permission overrides through role permissions and user-specific permissions",
                        "School-level tenant isolation through request body, params, and query schoolId checks"
                ],
                "role": "Super Admin, Supervisor",
                "features": [
                        {
                                "title": "Core Capabilities",
                                "items": [
                                        "JWT login with cookie or bearer token support, password reset, and password change flows",
                                        "Role guards for ADMIN, IT_MANAGER, REGISTRAR, TEACHER, STUDENT, PARENT, and FINANCE",
                                        "Permission overrides through role permissions and user-specific permissions",
                                        "School-level tenant isolation through request body, params, and query schoolId checks",
                                        "Subscription feature checks for finance, parent portal, and plan-gated capabilities",
                                        "Global rate limiting and platform maintenance mode"
                                ]
                        }
                ],
                "galleryImages": [
                        "/yeneschool/schooldatahealth.png",
                        "/yeneschool/schoolanalytics.png",
                        "/yeneschool/schooldatahealth.png"
                ]
        },
        {
                "id": "module-search",
                "slug": "search",
                "title": "Search & Data Quality",
                "description": "Helps staff find records quickly and keep operational data clean enough for reports, exports, and audits.",
                "longDescription": "Helps staff find records quickly and keep operational data clean enough for reports, exports, and audits. Specifically engineered for Ethiopian schools, featuring native multi-language support, dual calendar compliance, and offline-first data resilience.",
                "image": "/yeneschool/schooldatahealth.png",
                "category": "AI & Automation",
                "techStack": [
                        "Universal Search Index",
                        "Data Health Score",
                        "Missing Field Alerter",
                        "Duplicate National ID Check"
                ],
                "tools": [
                        "PostgreSQL",
                        "NestJS",
                        "Next.js",
                        "Dexie.js",
                        "Telegram Bot API"
                ],
                "status": "completed",
                "demoUrl": "/contact",
                "repoUrl": "https://www.yeneschooldocumentation.vercel.app",
                "startDate": "2025-01-01",
                "endDate": "2026-03-01",
                "highlights": [
                        "Cross-entity search endpoints for fast record lookup",
                        "Data consistency report page for school data health review",
                        "Duplicate and missing-record style checks for operational maintenance",
                        "Audit-friendly finance logs, grade change logs, credentials, and notification records"
                ],
                "role": "Director, Supervisor",
                "features": [
                        {
                                "title": "Core Capabilities",
                                "items": [
                                        "Cross-entity search endpoints for fast record lookup",
                                        "Data consistency report page for school data health review",
                                        "Duplicate and missing-record style checks for operational maintenance",
                                        "Audit-friendly finance logs, grade change logs, credentials, and notification records",
                                        "Export-ready information from reports, credentials, finance, certificates, and bulk operations",
                                        "Backups and platform-level operational support for safer maintenance"
                                ]
                        }
                ],
                "galleryImages": [
                        "/yeneschool/schooldatahealth.png",
                        "/yeneschool/schoolanalytics.png",
                        "/yeneschool/schooldatahealth.png"
                ]
        },
        {
                "id": "module-ai",
                "slug": "ai",
                "title": "Autonomous AI Director",
                "description": "Conducts midnight operational audits, generates morning executive briefings, enforces assessment deadlines, and provides 24/7 multilingual parent dialogue.",
                "longDescription": "Conducts midnight operational audits, generates morning executive briefings, enforces assessment deadlines, and provides 24/7 multilingual parent dialogue. Specifically engineered for Ethiopian schools, featuring native multi-language support, dual calendar compliance, and offline-first data resilience.",
                "image": "/yeneschool/directordashbaord.png",
                "category": "AI & Automation",
                "techStack": [
                        "Autonomous Agents",
                        "Predictive At-Risk Radar",
                        "07:00 AM Director Briefing",
                        "CRON Auditing"
                ],
                "tools": [
                        "PostgreSQL",
                        "NestJS",
                        "Next.js",
                        "Dexie.js",
                        "Telegram Bot API"
                ],
                "status": "completed",
                "demoUrl": "/contact",
                "repoUrl": "https://www.yeneschooldocumentation.vercel.app",
                "startDate": "2025-01-01",
                "endDate": "2026-03-01",
                "highlights": [
                        "Autonomous 01:00 AM midnight audit & 07:00 AM executive briefings",
                        "Proactive 24/7 multilingual parent dialogue in Amharic, Afaan Oromo, Somali, and English",
                        "AI Report Generator that produces academic reports, summaries, and executive insights from live school data",
                        "AI Smart Alerts that detect anomalies, attendance patterns, and operational bottlenecks requiring attention"
                ],
                "role": "Director, Teacher, Parent",
                "features": [
                        {
                                "title": "Core Capabilities",
                                "items": [
                                        "Autonomous 01:00 AM midnight audit & 07:00 AM executive briefings",
                                        "Proactive 24/7 multilingual parent dialogue in Amharic, Afaan Oromo, Somali, and English",
                                        "AI Report Generator that produces academic reports, summaries, and executive insights from live school data",
                                        "AI Smart Alerts that detect anomalies, attendance patterns, and operational bottlenecks requiring attention",
                                        "AI Recommendations engine for personalized student learning paths and school improvement suggestions",
                                        "AI School Assessment that evaluates overall school performance, trends, and benchmarking",
                                        "Natural language processing across attendance, marks, finance, and communication data",
                                        "At-risk student detection based on attendance, grades, and engagement signals",
                                        "Syllabus and curriculum progress tracking against the academic calendar",
                                        "Standing autonomous operational directives with 1-click administrative authorization"
                                ]
                        }
                ],
                "galleryImages": [
                        "/yeneschool/directordashbaord.png",
                        "/yeneschool/schoolanalytics.png",
                        "/yeneschool/schooldatahealth.png"
                ]
        },
        {
                "id": "module-backup",
                "slug": "backup",
                "title": "Backup & Data Export",
                "description": "Protects school data with automated platform backups, per-school export options, and downloadable archives.",
                "longDescription": "Protects school data with automated platform backups, per-school export options, and downloadable archives. Specifically engineered for Ethiopian schools, featuring native multi-language support, dual calendar compliance, and offline-first data resilience.",
                "image": "/yeneschool/schooldatahealth.png",
                "category": "Compliance & Infrastructure",
                "techStack": [
                        "Automated Cloud Snapshots",
                        "Air-Gapped Local Backups",
                        "One-Click Excel Export",
                        "Zero Data Loss"
                ],
                "tools": [
                        "PostgreSQL",
                        "NestJS",
                        "Next.js",
                        "Dexie.js",
                        "Telegram Bot API"
                ],
                "status": "completed",
                "demoUrl": "/contact",
                "repoUrl": "https://www.yeneschooldocumentation.vercel.app",
                "startDate": "2025-01-01",
                "endDate": "2026-03-01",
                "highlights": [
                        "Automated platform backup with full database and file system snapshot",
                        "Per-school backup download with configurable data type selection",
                        "ZIP file generation, archive cleanup, and secure storage management",
                        "Credential roll CSV export and bulk upload template downloads"
                ],
                "role": "Super Admin, Supervisor",
                "features": [
                        {
                                "title": "Core Capabilities",
                                "items": [
                                        "Automated platform backup with full database and file system snapshot",
                                        "Per-school backup download with configurable data type selection",
                                        "ZIP file generation, archive cleanup, and secure storage management",
                                        "Credential roll CSV export and bulk upload template downloads",
                                        "Password validation, roll number assignment, and credential tracking statistics",
                                        "Maintenance-ready operational safety net for platform and school recovery"
                                ]
                        }
                ],
                "galleryImages": [
                        "/yeneschool/schooldatahealth.png",
                        "/yeneschool/schoolanalytics.png",
                        "/yeneschool/schooldatahealth.png"
                ]
        },
        {
                "id": "module-idCards",
                "slug": "id-cards",
                "title": "ID Cards & Certificates",
                "description": "Generates student ID cards and school certificates with customizable templates, watermarks, and bulk printing.",
                "longDescription": "Generates student ID cards and school certificates with customizable templates, watermarks, and bulk printing. Specifically engineered for Ethiopian schools, featuring native multi-language support, dual calendar compliance, and offline-first data resilience.",
                "image": "/yeneschool/schoolanalytics.png",
                "category": "Administration",
                "techStack": [
                        "QR-Coded PVC ID Cards",
                        "Official MoE Transfer Slips",
                        "Graduation Certificates",
                        "Bulk Generator"
                ],
                "tools": [
                        "PostgreSQL",
                        "NestJS",
                        "Next.js",
                        "Dexie.js",
                        "Telegram Bot API"
                ],
                "status": "completed",
                "demoUrl": "/contact",
                "repoUrl": "https://www.yeneschooldocumentation.vercel.app",
                "startDate": "2025-01-01",
                "endDate": "2026-03-01",
                "highlights": [
                        "Student ID card generation with template selection and watermark overlay",
                        "Single and bulk PDF output with print-ready card layouts",
                        "Certificate templates with dynamic field mapping for student data",
                        "Watermark image upload, activation, and positioning controls"
                ],
                "role": "Director, Registrar",
                "features": [
                        {
                                "title": "Core Capabilities",
                                "items": [
                                        "Student ID card generation with template selection and watermark overlay",
                                        "Single and bulk PDF output with print-ready card layouts",
                                        "Certificate templates with dynamic field mapping for student data",
                                        "Watermark image upload, activation, and positioning controls",
                                        "Bulk ZIP download for certificates and ID cards by class or section",
                                        "Template management with active version tracking and field configuration"
                                ]
                        }
                ],
                "galleryImages": [
                        "/yeneschool/schoolanalytics.png",
                        "/yeneschool/schoolanalytics.png",
                        "/yeneschool/schooldatahealth.png"
                ]
        },
        {
                "id": "module-discipline",
                "slug": "discipline",
                "title": "Discipline & Conduct",
                "description": "Keeps behavior notes, conduct follow-up, and parent-visible discipline records connected to the student profile.",
                "longDescription": "Keeps behavior notes, conduct follow-up, and parent-visible discipline records connected to the student profile. Specifically engineered for Ethiopian schools, featuring native multi-language support, dual calendar compliance, and offline-first data resilience.",
                "image": "/yeneschool/studentrisk.png",
                "category": "Administration",
                "techStack": [
                        "Positive Reinforcement Points",
                        "Conduct Records",
                        "Parent Incident Notices",
                        "Detention Logs"
                ],
                "tools": [
                        "PostgreSQL",
                        "NestJS",
                        "Next.js",
                        "Dexie.js",
                        "Telegram Bot API"
                ],
                "status": "completed",
                "demoUrl": "/contact",
                "repoUrl": "https://www.yeneschooldocumentation.vercel.app",
                "startDate": "2025-01-01",
                "endDate": "2026-03-01",
                "highlights": [
                        "Student discipline records scoped to the correct school and academic context",
                        "Conduct notes that can support report-card and parent follow-up workflows",
                        "Parent portal visibility for published discipline updates where the school allows it",
                        "Director follow-up lists for student behavior and support actions"
                ],
                "role": "Director, Teacher, Parent",
                "features": [
                        {
                                "title": "Core Capabilities",
                                "items": [
                                        "Student discipline records scoped to the correct school and academic context",
                                        "Conduct notes that can support report-card and parent follow-up workflows",
                                        "Parent portal visibility for published discipline updates where the school allows it",
                                        "Director follow-up lists for student behavior and support actions",
                                        "Teacher and registrar context when reviewing a student profile",
                                        "Audit-friendly records for sensitive student conduct decisions"
                                ]
                        }
                ],
                "galleryImages": [
                        "/yeneschool/studentrisk.png",
                        "/yeneschool/schoolanalytics.png",
                        "/yeneschool/schooldatahealth.png"
                ]
        },
        {
                "id": "module-events",
                "slug": "events",
                "title": "Events & Calendar",
                "description": "Manages school events, holidays, and calendar visibility for staff, students, and parents.",
                "longDescription": "Manages school events, holidays, and calendar visibility for staff, students, and parents. Specifically engineered for Ethiopian schools, featuring native multi-language support, dual calendar compliance, and offline-first data resilience.",
                "image": "/yeneschool/schoolsetting.png",
                "category": "Administration",
                "techStack": [
                        "Academic Calendar",
                        "Ethiopian Orthodox & Islamic Holidays",
                        "Exam Schedules",
                        "Sports Day Planning"
                ],
                "tools": [
                        "PostgreSQL",
                        "NestJS",
                        "Next.js",
                        "Dexie.js",
                        "Telegram Bot API"
                ],
                "status": "completed",
                "demoUrl": "/contact",
                "repoUrl": "https://www.yeneschooldocumentation.vercel.app",
                "startDate": "2025-01-01",
                "endDate": "2026-03-01",
                "highlights": [
                        "School events CRUD with dates, descriptions, and category tagging",
                        "Calendar feed integration for upcoming and active event visibility",
                        "Holiday scheduling and academic calendar records tied to school settings",
                        "Upcoming event counts and active event tracking for dashboards"
                ],
                "role": "Director, Teacher, Student, Parent",
                "features": [
                        {
                                "title": "Core Capabilities",
                                "items": [
                                        "School events CRUD with dates, descriptions, and category tagging",
                                        "Calendar feed integration for upcoming and active event visibility",
                                        "Holiday scheduling and academic calendar records tied to school settings",
                                        "Upcoming event counts and active event tracking for dashboards",
                                        "Event integration with announcements and notification workflows",
                                        "Role-based event viewing scoped to the correct school and academic year"
                                ]
                        }
                ],
                "galleryImages": [
                        "/yeneschool/schoolsetting.png",
                        "/yeneschool/schoolanalytics.png",
                        "/yeneschool/schooldatahealth.png"
                ]
        },
        {
                "id": "module-messaging",
                "slug": "messaging",
                "title": "Staff Messaging",
                "description": "Enables internal staff-to-staff communication with conversations, messages, and role-based access.",
                "longDescription": "Enables internal staff-to-staff communication with conversations, messages, and role-based access. Specifically engineered for Ethiopian schools, featuring native multi-language support, dual calendar compliance, and offline-first data resilience.",
                "image": "/yeneschool/teacherleaderboard.png",
                "category": "Portals & Community",
                "techStack": [
                        "Staff Direct Messaging",
                        "Department Rooms",
                        "Read Receipts",
                        "Urgent Administrative Memos"
                ],
                "tools": [
                        "PostgreSQL",
                        "NestJS",
                        "Next.js",
                        "Dexie.js",
                        "Telegram Bot API"
                ],
                "status": "completed",
                "demoUrl": "/contact",
                "repoUrl": "https://www.yeneschooldocumentation.vercel.app",
                "startDate": "2025-01-01",
                "endDate": "2026-03-01",
                "highlights": [
                        "Internal chat rooms and conversation management for staff collaboration",
                        "Staff-to-staff messaging with participant tracking and conversation history",
                        "Mark-as-read confirmation and unread count indicators for each conversation",
                        "Staff directory for finding and initiating conversations across the school"
                ],
                "role": "Director, Teacher, Finance, Supervisor",
                "features": [
                        {
                                "title": "Core Capabilities",
                                "items": [
                                        "Internal chat rooms and conversation management for staff collaboration",
                                        "Staff-to-staff messaging with participant tracking and conversation history",
                                        "Mark-as-read confirmation and unread count indicators for each conversation",
                                        "Staff directory for finding and initiating conversations across the school",
                                        "Role-based conversation visibility and access controls",
                                        "Dedicated messages page integrated into each role's dashboard workspace"
                                ]
                        }
                ],
                "galleryImages": [
                        "/yeneschool/teacherleaderboard.png",
                        "/yeneschool/schoolanalytics.png",
                        "/yeneschool/schooldatahealth.png"
                ]
        }
],
    experiences: [
        {
            id: 'prof-7',
            company: 'Executive Leadership & Directors',
            position: 'AI Director Cockpit & School Autopilot',
            description: 'Empowers school principals and directors with automated 07:00 AM operational audits, real-time syllabus tracking, and institutional data health.',
            skills: ['AI Autopilot', 'Syllabus Tracking', 'Data Health', 'Executive Briefings'],
            startDate: '2024-01-01',
            isOngoing: true,
            location: 'Addis Ababa, Ethiopia',
            type: 'full-time',
            image: '/yeneschool/directordashbaord.png',
            externalLink: '/contact'
        },
        {
            id: 'prof-3',
            company: 'Teaching Faculty & Academics',
            position: '5E Lesson Workspace & Remediation Engine',
            description: 'Equips teachers with one-click 5E lesson planning mapped to Ethiopian textbooks, automated quiz generators, and grade book calculations.',
            skills: ['5E Lesson Planning', 'Remediation Quizzes', 'Grade Book', 'Ministry Standards'],
            startDate: '2024-01-01',
            isOngoing: true,
            location: 'Ethiopia Nationwide',
            type: 'full-time',
            image: '/yeneschool/teacherleaderboard.png',
            externalLink: '/contact'
        },
        {
            id: 'prof-6',
            company: 'Finance Office & Bursars',
            position: 'Telebirr, CBE Birr & Cashless Reconciliation',
            description: 'Automates student tuition collection, digital receipt issuance, and real-time bank reconciliation without manual deposit slips.',
            skills: ['Telebirr', 'CBE Birr', 'Chapa', 'Digital Receipts', 'Audit Trails'],
            startDate: '2024-01-01',
            isOngoing: true,
            location: 'Addis Ababa, Ethiopia',
            type: 'full-time',
            image: '/yeneschool/financedashbaord.png',
            externalLink: '/contact'
        },
        {
            id: 'lead-2',
            company: 'Registrars & Campus Operations',
            position: 'Admissions, Ethiopian Calendar & Report Cards',
            description: 'Unified student record management, dual-calendar scheduling (Ge’ez & Gregorian), and tamper-proof QR report cards.',
            skills: ['Ge’ez Calendar', 'QR Report Cards', 'Admissions', 'Biometric Attendance'],
            startDate: '2024-01-01',
            isOngoing: true,
            location: 'Addis Ababa, Ethiopia',
            type: 'full-time',
            image: '/yeneschool/quartersummary.png',
            externalLink: '/contact'
        },
        {
            id: 'prof-8',
            company: 'Parents & Guardians',
            position: 'Real-Time Bilingual Telegram Alerts & App',
            description: 'Keeps families connected with real-time grade drop notifications, attendance pings, fee payment receipts, and school announcements.',
            skills: ['Telegram Bot', 'Bilingual Mobile App', 'Instant SMS', 'Student Progress'],
            startDate: '2024-01-01',
            isOngoing: true,
            location: 'Addis Ababa, Ethiopia',
            type: 'full-time',
            image: '/yeneschool/parent.png',
            externalLink: '/contact'
        }
    ],
    education: [
        {
            id: 'edu-1',
            institution: 'Ministry of Education (MoE) Ethiopia',
            degree: 'Curriculum & Grading Accreditation',
            major: 'Ethiopian National Education Standards (Grades 1–12)',
            startDate: '2024',
            isOngoing: true,
            activities: ['National Exam Preparation', 'Continuous Assessment (CA) Alignment', 'Ethiopian Calendar Support']
        },
        {
            id: 'edu-2',
            institution: 'National Bank of Ethiopia (NBE) FinTech Compliance',
            degree: 'Cashless Payment Standards',
            major: 'Integration with CBE Birr, Telebirr & National Payment Gateways',
            startDate: '2024',
            isOngoing: true,
            activities: ['Bank Reconciliation Automation', 'Digital Invoicing Compliance', 'Audit Ledger Security']
        }
    ],
    achievements: [
        {
            id: 'ach-1',
            title: '100% Ethiopian MoE Grading Compliance',
            issuer: 'Ministry of Education Standards',
            date: '2025',
            category: 'certification',
            description: 'Standardized report cards, weighted grade calculation, and Ge’ez calendar support across all primary and secondary schools.'
        },
        {
            id: 'ach-2',
            title: 'Certified Telebirr & CBE Payment Partner',
            issuer: 'Ethio Telecom & Commercial Bank of Ethiopia',
            date: '2025',
            category: 'recognition',
            description: 'Direct API integrations for cashless school tuition reconciliation, instant payment matching, and digital SMS receipts.'
        },
        {
            id: 'ach-3',
            title: 'Offline-First School Architecture Award',
            issuer: 'East Africa EdTech Summit',
            date: '2025',
            category: 'award',
            description: 'Recognized for Dexie.js and IndexedDB innovation allowing attendance and operational continuity with zero internet.'
        },
        {
            id: 'ach-4',
            title: 'Autonomous Student Remediation Patent-Pending',
            issuer: 'HUMAN Tech PLC Engineering',
            date: '2026',
            category: 'certification',
            description: 'Pioneering adaptive booster testing that diagnoses student knowledge gaps and raises national exam pass rates.'
        }
    ],
    techStack: [
        { name: 'NestJS 11', icon: 'server', category: 'framework' },
        { name: 'PostgreSQL 16', icon: 'database', category: 'database' },
        { name: 'Prisma 7', icon: 'layers', category: 'library' },
        { name: 'Next.js 14', icon: 'layout', category: 'framework' },
        { name: 'Redis BullMQ', icon: 'cpu', category: 'database' },
        { name: 'Dexie.js (Offline)', icon: 'hard-drive', category: 'library' },
        { name: 'Telebirr API', icon: 'credit-card', category: 'tool' },
        { name: 'CBE Birr', icon: 'dollar-sign', category: 'tool' },
        { name: 'Telegram Bot API', icon: 'message-circle', category: 'tool' },
        { name: 'Ethiopian Calendar (Ge’ez)', icon: 'calendar', category: 'tool' }
    ],
    hardSkills: [
        { name: 'Autonomous AI Director Engine', category: 'ai', level: 'expert', description: 'Audits attendance, detects syllabus delays, and prepares morning briefings.' },
        { name: 'Adaptive Student Remediation', category: 'ai', level: 'expert', description: 'Generates confidence booster questions based on specific weak topics.' },
        { name: 'Telebirr & CBE Integration', category: 'backend', level: 'expert', description: 'Real-time bank matching and automated cashless school accounting.' },
        { name: 'Offline-First Dexie Engine', category: 'database', level: 'expert', description: 'Zero-downtime attendance and grade capture with background sync.' },
        { name: '5E Pedagogical Framework Generator', category: 'software', level: 'expert', description: 'Curriculum-aligned lesson prep mapped to national textbooks.' },
        { name: 'Ethiopian Dual-Calendar System', category: 'software', level: 'expert', description: 'First-class Ge’ez calendar scheduling and report card calculations.' }
    ],
    softSkills: [
        { name: 'Zero Teacher Burden', description: 'All AI remediation and audits run without extra administrative work.' },
        { name: 'Transparent Financial Governance', description: 'Eliminates cash leakage and deposit slip fraud completely.' },
        { name: 'Parent-School Partnership', description: 'Instant, personalized Telegram notifications that foster family involvement.' },
        { name: 'High Exam Success Rate', description: 'Targeted diagnostics aimed directly at reversing low national exam pass rates.' }
    ],
    tools: [
        { name: 'Director Mobile App', icon: 'smartphone', category: 'productivity' },
        { name: 'Teacher Workspace', icon: 'laptop', category: 'ide' },
        { name: 'Parent Telegram Bot', icon: 'send', category: 'communication' },
        { name: 'Bursar Cashless Terminal', icon: 'credit-card', category: 'productivity' },
        { name: 'Gatekeeper Biometric Scanner', icon: 'shield-check', category: 'other' }
    ],
    faqs: [
        {
            question: 'How does YeneSchool help improve Grade 12 National Exam results?',
            answer: 'Over 1,000 schools had zero passes because students waste hundreds of hours studying topics they already know while weak units remain hidden. YeneSchool’s Autonomous Remediation engine continuously diagnoses individual weaknesses and automatically schedules confidence booster quizzes until mastery is achieved.'
        },
        {
            question: 'Can YeneSchool work when our internet connection drops?',
            answer: 'Yes! YeneSchool is designed with an offline-first architecture using Dexie.js (IndexedDB). Teachers and gatekeepers can mark attendance and log assessments completely offline. All data securely queues and syncs automatically the moment connectivity restores.'
        },
        {
            question: 'Does YeneSchool support CBE Birr and Telebirr?',
            answer: 'Yes! We have native automated reconciliation for Telebirr, Commercial Bank of Ethiopia (CBE Birr), and Chapa. Parents can pay tuition directly from their phones, and school bursars receive instant digital reconciliation with zero manual paper slips.'
        },
        {
            question: 'Is the Ethiopian (Ge’ez) Calendar supported?',
            answer: 'Yes, full first-class support for the 13-month Ethiopian calendar alongside the Gregorian calendar across timetables, attendance, term periods, and official report cards.'
        }
    ],
    blogs: [
        {
            id: 'blog-1',
            slug: 'grade-12-ethiopian-exam-crisis',
            title: 'The Ethiopian Exam Reality: Why 1,000+ Schools Had Zero Passes',
            excerpt: 'How diagnostic AI and automated student remediation replace guesswork to dramatically raise national examination scores.',
            content: 'The problem isn’t that Ethiopian students don’t study. Over 1,000 schools across Ethiopia recorded zero passes on the Grade 12 national exam because students study without knowing what they actually understand and what they don’t. YeneSchool’s diagnostic AI isolates difficult units and provides targeted booster practice questions directly to the student portal.',
            image: '/yeneschool/schoolanalytics.png',
            date: '2026-03-15',
            category: 'applied-ai',
            tags: ['EdTech', 'National Exams', 'Remediation', 'Ethiopia'],
            author: {
                name: 'YeneSchool Research Team',
                avatar: '/yeneschool/logo.svg'
            },
            readTime: '5 min read'
        },
        {
            id: 'blog-2',
            slug: 'cbe-telebirr-cashless-tuition',
            title: 'Eliminating Paper Slips: Cashless School Fees with CBE & Telebirr',
            excerpt: 'Real-time payment matching and automated reconciliation that saves school finance teams 40+ hours every month.',
            content: 'Paper bank deposit slips create long queues, fraud vulnerabilities, and hours of tedious manual cross-referencing. With YeneSchool’s direct CBE Birr and Telebirr integrations, school tuition payments are matched instantaneously to the student ledger, issuing instant digital receipts via SMS and Telegram.',
            image: '/yeneschool/financedashbaord.png',
            date: '2026-02-10',
            category: 'software-development',
            tags: ['FinTech', 'Telebirr', 'CBE Birr', 'School Finance'],
            author: {
                name: 'YeneSchool FinTech Team',
                avatar: '/yeneschool/logo.svg'
            },
            readTime: '4 min read'
        },
        {
            id: 'blog-3',
            slug: '5e-pedagogy-ai-classrooms',
            title: '5E Lesson Planning on Autopilot: Empowering Ethiopian Teachers',
            excerpt: 'Giving educators their weekends back with curriculum-mapped Engage, Explore, Explain, Elaborate, and Evaluate workflows.',
            content: 'Lesson planning should elevate teaching, not exhaust teachers. YeneSchool allows educators to generate complete weekly 5E lesson bundles mapped to official Ethiopian student textbook pages with differentiated student scaffolding and confidential answer keys in a single click.',
            image: '/yeneschool/teacherleaderboard.png',
            date: '2026-01-20',
            category: 'more',
            tags: ['5E Pedagogy', 'Teacher Tools', 'Curriculum', 'AI'],
            author: {
                name: 'YeneSchool Academic Team',
                avatar: '/yeneschool/logo.svg'
            },
            readTime: '6 min read'
        },
        {
            id: 'blog-4',
            slug: 'offline-first-architecture-schools',
            title: 'Building Offline-First Systems for East African Infrastructure',
            excerpt: 'How Dexie.js and IndexedDB ensure uninterrupted attendance taking even during regional internet outages.',
            content: 'Cloud-only software fails when infrastructure is intermittent. YeneSchool was engineered from day one with offline-first client storage, ensuring attendance scanners and teacher gradebooks work flawlessly regardless of network status, synchronizing transparently when back online.',
            image: '/yeneschool/schooldatahealth.png',
            date: '2025-11-28',
            category: 'software-development',
            tags: ['Architecture', 'Offline-First', 'IndexedDB', 'Reliability'],
            author: {
                name: 'HUMAN Tech Engineering',
                avatar: '/yeneschool/logo.svg'
            },
            readTime: '5 min read'
        }
    ],
    gallery: [
        {
            id: 'gal-1',
            title: 'Director Executive Dashboard',
            description: 'Autonomous school health metrics and morning operational briefing.',
            date: '2026',
            type: 'image',
            url: '/yeneschool/directordashbaord.png',
            thumbnail: '/yeneschool/directordashbaord.png',
            category: 'Dashboard'
        },
        {
            id: 'gal-2',
            title: 'Cashless Tuition & Finance',
            description: 'Telebirr & CBE Birr automated student fee ledger.',
            date: '2026',
            type: 'image',
            url: '/yeneschool/financedashbaord.png',
            thumbnail: '/yeneschool/financedashbaord.png',
            category: 'Finance'
        },
        {
            id: 'gal-3',
            title: 'Academic Analytics & Exam Pass Rates',
            description: 'Curriculum progress and syllabus delay detection.',
            date: '2026',
            type: 'image',
            url: '/yeneschool/schoolanalytics.png',
            thumbnail: '/yeneschool/schoolanalytics.png',
            category: 'Analytics'
        },
        {
            id: 'gal-4',
            title: 'Parent Portal & Telegram Alerts',
            description: 'Real-time grade and attendance updates in Amharic & English.',
            date: '2026',
            type: 'image',
            url: '/yeneschool/parent.png',
            thumbnail: '/yeneschool/parent.png',
            category: 'Communication'
        },
        {
            id: 'gal-5',
            title: 'Teacher Workspace & 5E Lessons',
            description: 'Lesson plan bundles and class performance leaderboards.',
            date: '2026',
            type: 'image',
            url: '/yeneschool/teacherleaderboard.png',
            thumbnail: '/yeneschool/teacherleaderboard.png',
            category: 'Academics'
        }
    ]
};
