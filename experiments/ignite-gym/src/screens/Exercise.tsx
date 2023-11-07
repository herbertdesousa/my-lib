import { TouchableOpacity } from 'react-native';
import * as NativeBase from 'native-base';
import React from 'react';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { AppNavigatorRoutesProps } from '@/routes/app.routes';

import BodySvg from '@/assets/icons/body.svg';
import SeriesSvg from '@/assets/icons/series.svg';
import RepetitionsSvg from '@/assets/icons/repetitions.svg';

import { Button } from '@/components';

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <NativeBase.VStack flex={1}>
      <NativeBase.VStack px={8} bg="gray.600" pt={12}>
        <TouchableOpacity onPress={handleGoBack}>
          <NativeBase.Icon
            as={Feather}
            name="arrow-left"
            color="green.500"
            size={6}
          />
        </TouchableOpacity>

        <NativeBase.HStack
          justifyContent="space-between"
          mt={4}
          mb={8}
          alignItems="center"
        >
          <NativeBase.Heading color="gray.100" fontSize="lg" flexShrink={1}>
            Puxada frontal
          </NativeBase.Heading>

          <NativeBase.HStack alignItems="center">
            <BodySvg />

            <NativeBase.Text color="gray.200" ml={1} textTransform="capitalize">
              Costas
            </NativeBase.Text>
          </NativeBase.HStack>
        </NativeBase.HStack>
      </NativeBase.VStack>
      <NativeBase.ScrollView>
        <NativeBase.VStack p={8}>
          <NativeBase.Image
            w="full"
            h={80}
            source={{
              uri: 'http://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg',
            }}
            alt="Nome do exercício"
            mb={3}
            resizeMode="cover"
            rounded="lg"
          />

          <NativeBase.Box bg="gray.600" rounded="md" pb={4} px={4}>
            <NativeBase.HStack
              alignItems="center"
              justifyContent="space-around"
              mb={6}
              mt={5}
            >
              <NativeBase.HStack>
                <SeriesSvg />
                <NativeBase.Text color="gray.200" ml="2">
                  3 séries
                </NativeBase.Text>
              </NativeBase.HStack>

              <NativeBase.HStack>
                <RepetitionsSvg />
                <NativeBase.Text color="gray.200" ml="2">
                  12 repetições
                </NativeBase.Text>
              </NativeBase.HStack>
            </NativeBase.HStack>

            <Button>Marcar como realizado</Button>
          </NativeBase.Box>
        </NativeBase.VStack>
      </NativeBase.ScrollView>
    </NativeBase.VStack>
  );
}
