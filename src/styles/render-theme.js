import { render } from '@testing-library/react';
import { MyThemeProvider } from './MyThemeProvider';

export const renderTheme = (children) => {
  return render(<MyThemeProvider>{children}</MyThemeProvider>);
};
