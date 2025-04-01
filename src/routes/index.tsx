import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SelectForm } from '../screens/SelectForm';

import { theme } from '../global/styles/theme';

const { background, text } = theme;

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerStyle: { backgroundColor: background },
    headerTitleStyle: { color: text },
    headerTitleAlign: 'center',
  },
  screens: {
    Home: {
      screen: SelectForm,
      options: {
        title: 'Selecionar Formulário',
      },
    },
  },
});

export const Routes = createStaticNavigation(RootStack);
