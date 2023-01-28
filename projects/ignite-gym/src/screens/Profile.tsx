import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import * as NativeBase from 'native-base';

import { ScreenHeader, UserPhoto, Input, Button } from '@/components/index';

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  return (
    <NativeBase.VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <NativeBase.ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <NativeBase.Center mt={6} px={10}>
          {photoIsLoading ? (
            <NativeBase.Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.500"
              endColor="gray.400"
            />
          ) : (
            <UserPhoto
              source={{ uri: 'https://github.com/herbertdesousa.png' }}
              alt="Foto do usuário"
              size={PHOTO_SIZE}
            />
          )}

          <TouchableOpacity>
            <NativeBase.Text
              color="green.500"
              fontWeight="bold"
              fontSize="md"
              mt={2}
              mb={8}
            >
              Alterar Foto
            </NativeBase.Text>
          </TouchableOpacity>

          <Input bg="gray.600" placeholder="Nome" />

          <Input bg="gray.600" placeholder="E-mail" isDisabled />

          <NativeBase.Heading
            color="gray.200"
            fontSize="md"
            mb={2}
            alignSelf="flex-start"
            mt={12}
          >
            Alterar senha
          </NativeBase.Heading>

          <Input bg="gray.600" placeholder="Senha antiga" secureTextEntry />

          <Input bg="gray.600" placeholder="Nova senha" secureTextEntry />

          <Input
            bg="gray.600"
            placeholder="Confirme a nova senha"
            secureTextEntry
          />

          <Button mt={4}>Atualizar</Button>
        </NativeBase.Center>
      </NativeBase.ScrollView>
    </NativeBase.VStack>
  );
}
