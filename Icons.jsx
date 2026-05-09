// Icon set used across the SAGN site — Lucide-style monoline strokes.
// Sized 1em; color via CSS `currentColor`.

const Icon = ({ children, viewBox = "0 0 24 24", size = "1em" }) => (
  <svg viewBox={viewBox} width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const IconTrash    = () => <Icon><path d="M3 7h18M5 7v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7M9 11v6M15 11v6M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></Icon>;
const IconLeaf     = () => <Icon><path d="M11 20a7 7 0 0 1-7-7c4 0 8 1 11 5"/><path d="M11 20c0-9 4-13 11-13 0 9-4 13-11 13"/></Icon>;
const IconCog      = () => <Icon><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></Icon>;
const IconFile     = () => <Icon><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></Icon>;
const IconTrend    = () => <Icon><path d="M3 3v18h18M7 14l3-3 4 4 5-6"/></Icon>;
const IconPhone    = () => <Icon><path d="M22 16.92V21a1 1 0 0 1-1.1 1 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 3.1 4.1 1 1 0 0 1 4 3h4a1 1 0 0 1 1 .8 12 12 0 0 0 .7 2.6 1 1 0 0 1-.2 1L8 9a16 16 0 0 0 6 6l1.6-1.5a1 1 0 0 1 1-.2 12 12 0 0 0 2.6.7 1 1 0 0 1 .8 1z"/></Icon>;
const IconMail     = () => <Icon><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></Icon>;
const IconPin      = () => <Icon><path d="M12 22s7-7 7-13a7 7 0 1 0-14 0c0 6 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></Icon>;
const IconCheck    = () => <Icon><path d="M5 12l5 5L20 7"/></Icon>;
const IconStar     = () => <Icon><path d="M12 2l3 7 7 .8-5.3 4.7 1.6 7L12 17.8 5.7 21.5l1.6-7L2 9.8 9 9z"/></Icon>;
const IconShield   = () => <Icon><path d="M12 2l8 3v7c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V5z"/></Icon>;
const IconFlag     = () => <Icon><path d="M4 22V4M4 4h13l-2 4 2 4H4"/></Icon>;
const IconArrowRight = () => <Icon><path d="M5 12h14M13 5l7 7-7 7"/></Icon>;
const IconDownload = () => <Icon><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></Icon>;
const IconMenu     = () => <Icon><path d="M4 6h16M4 12h16M4 18h16"/></Icon>;

Object.assign(window, {
  Icon, IconTrash, IconLeaf, IconCog, IconFile, IconTrend,
  IconPhone, IconMail, IconPin, IconCheck, IconStar, IconShield, IconFlag,
  IconArrowRight, IconDownload, IconMenu,
});
