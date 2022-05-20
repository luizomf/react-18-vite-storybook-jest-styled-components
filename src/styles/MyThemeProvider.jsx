import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import P from 'prop-types';
import { GlobalStyles } from './global-styles';

export const MyThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};

MyThemeProvider.propTypes = {
  children: P.node.isRequired,
};
