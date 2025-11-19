/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        "primary-background": "var(--primary-background)",
        "primary-foreground": "var(--primary-foreground)",
        "primary-light": "var(--primary-light)",
        "primary-dark": "var(--primary-dark)",

        // Secondary Colors
        "secondary-background": "var(--secondary-background)",
        "secondary-foreground": "var(--secondary-foreground)",
        "secondary-light": "var(--secondary-light)",
        "secondary-dark": "var(--secondary-dark)",

        // Accent Colors
        "accent-background": "var(--accent-background)",
        "accent-foreground": "var(--accent-foreground)",
        "accent-light": "var(--accent-light)",
        "accent-dark": "var(--accent-dark)",

        // Neutral Colors
        "neutral-background": "var(--neutral-background)",
        "neutral-foreground": "var(--neutral-foreground)",
        "neutral-light": "var(--neutral-light)",
        "neutral-dark": "var(--neutral-dark)",

        // Text Colors
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-success": "var(--text-success)",
        "text-accent": "var(--text-accent)",

        // Background Colors
        "bg-main": "var(--bg-main)",
        "bg-overlay": "var(--bg-overlay)",
        "bg-card": "var(--bg-card)",
        "bg-success": "var(--bg-success)",

        // Border Colors
        "border-primary": "var(--border-primary)",
        "border-secondary": "var(--border-secondary)",
        "border-light": "var(--border-light)",
        "border-accent": "var(--border-accent)",

        // Component Colors
        "header-background": "var(--header-background)",
        "header-text": "var(--header-text)",
        "button-primary-bg": "var(--button-primary-bg)",
        "button-primary-text": "var(--button-primary-text)",
        "button-secondary-bg": "var(--button-secondary-bg)",
        "button-secondary-text": "var(--button-secondary-text)",
        "progress-bar-bg": "var(--progress-bar-bg)",
        "icon-button-bg": "var(--icon-button-bg)",
      },
      fontSize: {
        xs: "var(--font-size-xs)",
        sm: "var(--font-size-sm)",
        base: "var(--font-size-base)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
        "2xl": "var(--font-size-2xl)",
        "3xl": "var(--font-size-3xl)",
      },
      fontWeight: {
        normal: "var(--font-weight-normal)",
        medium: "var(--font-weight-medium)",
        semibold: "var(--font-weight-semibold)",
        bold: "var(--font-weight-bold)",
        black: "var(--font-weight-black)",
      },
      lineHeight: {
        xs: "var(--line-height-xs)",
        sm: "var(--line-height-sm)",
        base: "var(--line-height-base)",
        md: "var(--line-height-md)",
        lg: "var(--line-height-lg)",
        xl: "var(--line-height-xl)",
        "2xl": "var(--line-height-2xl)",
        "3xl": "var(--line-height-3xl)",
      },
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        "2xl": "var(--spacing-2xl)",
        "3xl": "var(--spacing-3xl)",
        "4xl": "var(--spacing-4xl)",
        "5xl": "var(--spacing-5xl)",
        "6xl": "var(--spacing-6xl)",
      },
      borderRadius: {
        none: "var(--radius-none)",
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        full: "var(--radius-full)",
      },
    },
  },
  plugins: [],
};
