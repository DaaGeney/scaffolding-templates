// @packages
import { Text, View, Button } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

// @scripts
import routes from '../../navigation/routes';

// @types
import { Props } from '../../utils/interfaces';

const {{componentNamePascal}} = ({ navigation }: Props) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ backgroundColor: theme.colors.primary }}>{t('thisIsMainPage')}</Text>
      <Button
        title={t('goBack')}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default {{componentNamePascal}};
