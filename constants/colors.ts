// FOREST

export type Theme =
  | typeof forestTheme
  | typeof retroTheme
  | typeof oceanTheme
  | typeof blossomTheme;

const forestTheme = {
  primary: "#4CAF50",
  textPrimary: "#2e5a2e",
  textSecondary: "#688f68",
  textLight: "#c8e6c9",
  textDark: "#1b361b",
  placeholderText: "#767676",
  background: "#e8f5e9",
  cardBackground: "#f1f8f2",
  card: "#f1f8f2",
  inputBackground: "#f4faf5",
  border: "#c8e6c9",
  white: "#ffffff",
  black: "#000000",
  error: "#f44336",
  success: "#4CAF50",
};

// RETRO
const retroTheme = {
  primary: "#e17055",
  textPrimary: "#784e2d",
  textSecondary: "#a58e7c",
  textLight: "#e2d6c1",
  textDark: "#50372a",
  placeholderText: "#767676",
  background: "#ede1d1",
  cardBackground: "#faf5eb",
  card: "#faf5eb",
  inputBackground: "#f7f2ea",
  border: "#e2d6c1",
  white: "#ffffff",
  black: "#000000",
  error: "#f44336",
  success: "#4CAF50",
};

// OCEAN
const oceanTheme = {
  primary: "#1976D2",
  textPrimary: "#1a4971",
  textSecondary: "#6d93b8",
  textLight: "#bbdefb",
  textDark: "#0d2b43",
  placeholderText: "#767676",
  background: "#e3f2fd",
  cardBackground: "#f5f9ff",
  card: "#f5f9ff",
  inputBackground: "#f0f8ff",
  border: "#bbdefb",
  white: "#ffffff",
  black: "#000000",
  error: "#f44336",
  success: "#4CAF50",
};

// BLOSSOM
const blossomTheme = {
  primary: "#EC407A",
  textPrimary: "#7d2150",
  textSecondary: "#b06a8f",
  textLight: "#f8bbd0",
  textDark: "#5a1836",
  placeholderText: "#767676",
  background: "#fce4ec",
  cardBackground: "#fff5f8",
  card: "#fff5f8",
  inputBackground: "#fef8fa",
  border: "#f8bbd0",
  white: "#ffffff",
  black: "#000000",
  error: "#f44336",
  success: "#4CAF50",
};

export const themes = {
  forest: forestTheme,
  retro: retroTheme,
  ocean: oceanTheme,
  blossom: blossomTheme,
};

export const COLORS: Theme = themes.retro;
