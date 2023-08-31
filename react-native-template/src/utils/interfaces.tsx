// @packages
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
	{{componentNamePascal}}: undefined;
	Help: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList>;

export interface userState {
  name: string;
  lastName: string;
}