import { useState, useCallback, useMemo } from 'react';
import { useMediaQuery } from '@mui/material';
import { createCustomTheme } from '../theme';
import type { Theme } from '@mui/material/styles';

export const useTheme = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');

  const toggleColorMode = useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  const theme: Theme = useMemo(
    () =>
      createCustomTheme({
        mode,
        primaryColor: '#5048E5',
        secondaryColor: '#10B981',
      }),
    [mode]
  );

  return {
    mode,
    theme,
    toggleColorMode,
  };
};
