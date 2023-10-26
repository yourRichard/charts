import { createContext, useContext, useState, ReactNode } from 'react';
type Theme = {
  primaryColor: string;
  primaryForground:string;
  ring: string;
  backgroundColor: string;
  destructive:string;
  foregroundColor:string;
  secondaryColor:string;
  popoverColor :string;

  // Add more properties for other styles
};

const theme1: Theme = {
  backgroundColor: 'hsl(var(--background-neutral))',
  primaryColor:'hsl(var(--primary-neutral))',
  ring: 'hsl(var(--ring-neutral))',
  destructive: 'hsl(var(--destrustive-neutral))',
  secondaryColor:'hsl(var(--secondary-neutral))',
  foregroundColor:'hsl(var(--foreground-neutral))',
  primaryForground:'hsl(var(--primary-foreground-neutral))',
  popoverColor:'hsl(var(--card-neutral))'
  // ... other styles
};

const theme2: Theme = {
  backgroundColor: 'hsl(var(--background-blue))',
  primaryColor:'hsl(var(--primary-blue))',
  ring: 'hsl(var(--ring-blue))',
  destructive: 'hsl(var(--destrustive-blue))',
  secondaryColor:'hsl(var(--secondary-blue))',
  foregroundColor:'hsl(var(--foreground-blue))',
  primaryForground:'hsl(var(--primary-foreground-blue))',
  popoverColor:'hsl(var(--card-blue))'

  // ... other styles
};

const theme3: Theme = {
  backgroundColor: 'hsl(var(--background-pink))',
  primaryColor:'hsl(var(--primary-pink))',
  ring: 'hsl(var(--ring-pink))',
  destructive: 'hsl(var(--destrustive-pink))',
  secondaryColor:'hsl(var(--secondary-pink))',
  foregroundColor:'hsl(var(--foreground-pink))',
  primaryForground:'hsl(var(--primary-foreground-pink))',
  popoverColor:'hsl(var(--card-neutral))'

  // ... other styles
};

const theme4: Theme = {
  backgroundColor: 'hsl(var(--background-yellow))',
  primaryColor:'hsl(var(--primary-yellow))',
  ring: 'hsl(var(--ring-yellow))',
  destructive: 'hsl(var(--destrustive-yellow))',
  secondaryColor:'hsl(var(--secondary-yellow))',
  foregroundColor:'hsl(var(--foreground-yellow))',
  primaryForground:'hsl(var(--primary-foreground-yellow))',
  popoverColor:'hsl(var(--card-neutral))'

  // ... other styles
};

type ThemeContextType = {
  theme: Theme;
  changeTheme: (selectedTheme: number) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(theme1); // Default theme

  const changeTheme = (selectedTheme: number) => {
    switch (selectedTheme) {
      case 1:
        setTheme(theme1);
        break;
      case 2:
        setTheme(theme2);
        break;
      case 3:
        setTheme(theme3);
        break;
      case 4:
        setTheme(theme4);
        break;
      default:
        setTheme(theme1); // Set a default theme
        break;
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
