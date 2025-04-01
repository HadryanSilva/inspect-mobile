import React from 'react';
import { StyleSheet, Alert, BackHandler, ScrollView } from 'react-native';

import { Button } from '../../components/Button';

import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../global/types/navigation';
import { theme } from '../../global/styles/theme';

const { background } = theme;

export const SelectForm: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();

  const goToSearchSeizure = () => {
    navigation.navigate('searchSeizureForm');
  };

  const goToCustodyOfProperty = () => {
    navigation.navigate('custodyOfPropertyForm');
  };

  React.useEffect(() => {
    const onBackPress = () => {
      Alert.alert(
        'Sair do aplicativo!',
        'Você deseja sair do aplicativo?',
        [
          {
            text: 'NÃO',
            onPress: () => {
              // Do nothing
            },
            style: 'cancel',
          },
          { text: 'SIM', onPress: () => BackHandler.exitApp() },
        ],
        { cancelable: false },
      );

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button
        title="Levantamento Busca e Apreensão"
        onPress={goToSearchSeizure}
        style={styles.button}
        textStyle={styles.buttonText}
      />

      <Button
        title="Termo Recebimento de Bem"
        onPress={goToCustodyOfProperty}
        style={styles.button}
        textStyle={styles.buttonText}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 30,
    backgroundColor: background,
  },
  button: {
    height: 180,
  },
  buttonText: {
    fontSize: 22,
  },
});
