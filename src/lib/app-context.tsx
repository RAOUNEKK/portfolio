import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
type Lang = "en";
type Theme = "dark" | "light";
type Entry = {
    en: string;
    fr: string;
    ar: string;
};
type Dict = Record<string, Entry>;
export const dict = {
    "nav.home": { en: "Home", fr: "Accueil", ar: "الرئيسية" },
    "nav.about": { en: "About", fr: "À propos", ar: "نبذة" },
    "nav.skills": { en: "Skills", fr: "Compétences", ar: "المهارات" },
    "nav.projects": { en: "Projects", fr: "Projets", ar: "المشاريع" },
    "nav.experience": { en: "Experience", fr: "Expérience", ar: "الخبرة" },
    "nav.achievements": { en: "Achievements", fr: "Distinctions", ar: "الإنجازات" },
    "nav.blog": { en: "Blog", fr: "Blog", ar: "المدونة" },
    "nav.contact": { en: "Contact", fr: "Contact", ar: "تواصل" },
    "hero.eyebrow": { en: "Portfolio · 2026", fr: "Portfolio · 2026", ar: "أعمالي · 2026" },
    "hero.title1": { en: "Creative Developer.", fr: "Développeuse Créative.", ar: "مطوّرة مبدعة." },
    "hero.title2": { en: "UI / UX Designer.", fr: "Designer UI / UX.", ar: "مصممة واجهات وتجربة." },
    "hero.title3": { en: "Software Engineer.", fr: "Ingénieure Logiciel.", ar: "مهندسة برمجيات." },
    "hero.subtitle": {
        en: "I'm Raounek — I craft immersive digital experiences where elegant design meets meticulous engineering. Welcome to my atelier.",
        fr: "Je suis Raounek — je conçois des expériences numériques immersives où le design élégant rencontre l'ingénierie méticuleuse. Bienvenue dans mon atelier.",
        ar: "أنا رونق — أصنع تجارب رقمية غامرة يلتقي فيها التصميم الأنيق بالهندسة الدقيقة. أهلاً بك في مرسمي.",
    },
    "hero.cta.projects": { en: "View my work", fr: "Voir mes projets", ar: "شاهد أعمالي" },
    "hero.cta.contact": { en: "Get in touch", fr: "Me contacter", ar: "تواصل معي" },
    "badge.hello": { en: "HELLO!", fr: "SALUT !", ar: "!مرحباً" },
    "badge.name": { en: "Name", fr: "Nom", ar: "الاسم" },
    "badge.role": { en: "Role", fr: "Rôle", ar: "الدور" },
    "badge.roleValue": { en: "Creative Developer", fr: "Développeuse Créative", ar: "مطوّرة مبدعة" },
    "badge.hint": { en: "Drag the badge", fr: "Faites glisser le badge", ar: "اسحب البطاقة" },
    "stat.projects": { en: "Projects Completed", fr: "Projets Réalisés", ar: "مشاريع منجزة" },
    "stat.tech": { en: "Technologies", fr: "Technologies", ar: "تقنيات" },
    "stat.years": { en: "Years of Experience", fr: "Ans d'Expérience", ar: "سنوات خبرة" },
    "stat.ux": { en: "UI / UX Design", fr: "Design UI / UX", ar: "تصميم الواجهات" },
    "stat.eng": { en: "Software Engineering", fr: "Ingénierie Logiciel", ar: "هندسة البرمجيات" },
    "about.title": { en: "The story behind RAOUNEK", fr: "L'histoire derrière RAOUNEK", ar: "القصة وراء رونق" },
    "about.intro": {
        en: "A creative technologist blending code, design, and storytelling into premium digital products.",
        fr: "Une technologue créative qui mêle code, design et narration en produits numériques haut de gamme.",
        ar: "تقنية مبدعة تمزج البرمجة والتصميم والسرد في منتجات رقمية راقية.",
    },
    "about.journey": { en: "Career Journey", fr: "Parcours", ar: "المسار المهني" },
    "about.passions": { en: "Passions & Interests", fr: "Passions & Intérêts", ar: "الشغف والاهتمامات" },
    "about.goals": { en: "Goals", fr: "Objectifs", ar: "الأهداف" },
    "skills.title": { en: "Craft & Toolkit", fr: "Savoir-faire & Outils", ar: "الحرفة والأدوات" },
    "skills.subtitle": {
        en: "The disciplines and tools I use to bring ideas to life.",
        fr: "Les disciplines et outils que j'utilise pour donner vie aux idées.",
        ar: "التخصصات والأدوات التي أستخدمها لإحياء الأفكار.",
    },
    "skills.cat.langs": { en: "Programming Languages", fr: "Langages", ar: "لغات البرمجة" },
    "skills.cat.frontend": { en: "Frontend", fr: "Frontend", ar: "الواجهة الأمامية" },
    "skills.cat.backend": { en: "Backend", fr: "Backend", ar: "الواجهة الخلفية" },
    "skills.cat.db": { en: "Databases", fr: "Bases de données", ar: "قواعد البيانات" },
    "skills.cat.design": { en: "Design Tools", fr: "Outils de Design", ar: "أدوات التصميم" },
    "skills.cat.dev": { en: "Development Tools", fr: "Outils de Développement", ar: "أدوات التطوير" },
    "projects.title": { en: "Selected Projects", fr: "Projets Sélectionnés", ar: "مشاريع مختارة" },
    "projects.subtitle": {
        en: "A curation of work spanning product design, engineering, and creative technology.",
        fr: "Une sélection de projets en design produit, ingénierie et technologie créative.",
        ar: "مجموعة أعمال تجمع تصميم المنتجات والهندسة والتقنية الإبداعية.",
    },
    "projects.view": { en: "View case study", fr: "Voir l'étude de cas", ar: "عرض دراسة الحالة" },
    "projects.live": { en: "Live", fr: "En ligne", ar: "مباشر" },
    "projects.code": { en: "Code", fr: "Code", ar: "الشيفرة" },
    "case.overview": { en: "Overview", fr: "Aperçu", ar: "نظرة عامة" },
    "case.problem": { en: "Problem", fr: "Problème", ar: "المشكلة" },
    "case.research": { en: "Research", fr: "Recherche", ar: "البحث" },
    "case.design": { en: "Design Process", fr: "Processus de Design", ar: "مسار التصميم" },
    "case.dev": { en: "Development", fr: "Développement", ar: "التطوير" },
    "case.challenges": { en: "Challenges", fr: "Défis", ar: "التحديات" },
    "case.solution": { en: "Solution", fr: "Solution", ar: "الحل" },
    "case.results": { en: "Results", fr: "Résultats", ar: "النتائج" },
    "case.gallery": { en: "Gallery", fr: "Galerie", ar: "المعرض" },
    "case.back": { en: "Back to projects", fr: "Retour aux projets", ar: "العودة للمشاريع" },
    "exp.title": { en: "Experience", fr: "Expérience", ar: "الخبرة" },
    "exp.subtitle": {
        en: "A timeline of collaborations, internships and freelance work.",
        fr: "Une chronologie de collaborations, stages et missions freelance.",
        ar: "خط زمني للتعاونات والتدريبات والأعمال الحرة.",
    },
    "ach.title": { en: "Achievements", fr: "Distinctions", ar: "الإنجازات" },
    "ach.subtitle": {
        en: "Certifications, competitions and moments worth celebrating.",
        fr: "Certifications, compétitions et moments à célébrer.",
        ar: "شهادات ومسابقات ولحظات تستحق الاحتفاء.",
    },
    "blog.title": { en: "Journal", fr: "Journal", ar: "اليوميات" },
    "blog.subtitle": {
        en: "Notes on design, engineering and the craft in between.",
        fr: "Notes sur le design, l'ingénierie et l'art entre les deux.",
        ar: "ملاحظات في التصميم والهندسة والحرفة بينهما.",
    },
    "blog.read": { en: "Read article", fr: "Lire l'article", ar: "اقرأ المقال" },
    "contact.title": {
        en: "Let's create something extraordinary",
        fr: "Créons quelque chose d'extraordinaire",
        ar: "لنصنع شيئاً استثنائياً",
    },
    "contact.subtitle": {
        en: "Available for select collaborations. Send a note — I answer within 24 hours.",
        fr: "Disponible pour des collaborations choisies. Envoyez un message — je réponds sous 24 heures.",
        ar: "متاحة لتعاونات مختارة. أرسل رسالة — أرد خلال 24 ساعة.",
    },
    "contact.name": { en: "Your name", fr: "Votre nom", ar: "اسمك" },
    "contact.email": { en: "Email", fr: "E-mail", ar: "البريد الإلكتروني" },
    "contact.message": { en: "Message", fr: "Message", ar: "الرسالة" },
    "contact.send": { en: "Send message", fr: "Envoyer", ar: "إرسال" },
    "contact.sent": {
        en: "Thanks — your message is on its way.",
        fr: "Merci — votre message est en route.",
        ar: "شكراً — رسالتك في طريقها إليّ.",
    },
} satisfies Dict;
type Key = keyof typeof dict;
interface Ctx {
    lang: Lang;
    dir: "ltr" | "rtl";
    theme: Theme;
    setTheme: (t: Theme) => void;
    toggleTheme: () => void;
    t: (k: Key) => string;
}
const AppCtx = createContext<Ctx | null>(null);
export function AppProvider({ children }: {
    children: ReactNode;
}) {
    const [lang] = useState<Lang>("en");
    const [theme, setThemeState] = useState<Theme>("light");
    useEffect(() => {
        const storedTheme = (typeof window !== "undefined" && localStorage.getItem("raounek.theme")) as Theme | null;
        if (storedTheme)
            setThemeState(storedTheme);
    }, []);
    const dir: "ltr" = "ltr";
    useEffect(() => {
        if (typeof document === "undefined")
            return;
        document.documentElement.classList.toggle("dark", theme === "dark");
        document.documentElement.lang = lang;
        document.documentElement.dir = dir;
        try {
            localStorage.setItem("raounek.theme", theme);
        }
        catch { }
    }, [theme, lang, dir]);
    const value: Ctx = {
        lang,
        dir,
        theme,
        setTheme: setThemeState,
        toggleTheme: () => setThemeState((p) => (p === "dark" ? "light" : "dark")),
        t: (k) => dict[k][lang],
    };
    return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
}
export function useApp() {
    const ctx = useContext(AppCtx);
    if (!ctx)
        throw new Error("useApp must be used inside AppProvider");
    return ctx;
}

