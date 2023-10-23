/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  pinkMode:["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // neutral color
      colors: {

        ring: "hsl(var(--ring-neutral))",
        background: "hsl(var(--background))",
        background: "hsl(var(--background-neutral))",
        foreground: "hsl(var(--foreground-neutral))",
        primary: {
          DEFAULT: "hsl(var(--primary-neutral))",
          foreground: "hsl(var(--primary-foreground-neutral))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary-neutral))",
          foreground: "hsl(var(--secondary-foreground-neutral))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive-neutral))",
          foreground: "hsl(var(--destructive-foreground-neutral))",


          ring: "hsl(var(--ring-blue))",
        background: "hsl(var(--background-blue))",
        foreground: "hsl(var(--foreground-blue))",
        primary: {
          DEFAULT: "hsl(var(--primary-blue))",
          foreground: "hsl(var(--primary-foreground-blue))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary-blue))",
          foreground: "hsl(var(--secondary-foreground-blue))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive-blue))",
          foreground: "hsl(var(--destructive-foreground-blue))",
        },
                        
        // neutral color




      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}}