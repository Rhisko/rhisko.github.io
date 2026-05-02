export const availableThemes = {
  executive: "Executive Navy",
  emerald: "Secure Emerald",
  graphite: "Graphite Cloud",
  indigo: "Modern Indigo"
} as const;

export type ThemeName = keyof typeof availableThemes;

// Change this value to switch the website theme.
export const activeTheme: ThemeName = "executive";
