import { useContext } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useTheme, Box } from 'native-base';

import { AuthContext } from '@/hooks/auth';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export function Routes() {
  const { authed } = useContext(AuthContext);
  const { colors } = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer theme={theme}>
        {authed.state && <AppRoutes />}
        {!authed.state && <AuthRoutes />}
      </NavigationContainer>
    </Box>
  );
}
