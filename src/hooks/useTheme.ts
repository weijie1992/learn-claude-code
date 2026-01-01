"use client";

import { useState, useEffect } from 'react';

const THEME_KEY = 'theme';

type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY) as Theme | null;
    const initialTheme = stored || (document.documentElement.classList.contains('dark') ? 'dark' : 'light');

    setTheme(initialTheme);
    setIsLoaded(true);

    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return {
    theme,
    isDark: theme === 'dark',
    isLoaded,
    toggleTheme,
  };
}
