import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import * as NativeBase from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

import { AuthContext } from '@/hooks/auth';

import { UserPhoto } from '../UserPhoto';

export function HomeHeader() {
  const { authed } = useContext(AuthContext);

  function handleOnSignOut() {
    authed.set(false);
  }

  return (
    <NativeBase.HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        source={{ uri: 'https://github.com/herbertdesousa.png' }}
        alt="Imagem do usuário"
        size={16}
        mr={4}
      />
      <NativeBase.VStack flex={1}>
        <NativeBase.Text color="gray.100" fontSize="md">
          Olá
        </NativeBase.Text>

        <NativeBase.Heading color="gray.100" fontSize="md">
          Rodrigo
        </NativeBase.Heading>
      </NativeBase.VStack>

      <TouchableOpacity onPress={handleOnSignOut}>
        <NativeBase.Icon
          as={MaterialIcons}
          name="logout"
          color="gray.200"
          size={7}
        />
      </TouchableOpacity>
    </NativeBase.HStack>
  );
}
