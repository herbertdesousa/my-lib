import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@/routes/app.routes';
import * as NativeBase from 'native-base';

import { HomeGroup, HomeExerciseCard, HomeHeader } from '@/components/home';

export function Home() {
  const [groups, setGroups] = useState([
    'Costas',
    'Bíceps',
    'Tríceps',
    'ombro',
  ]);
  const [exercises, setExercises] = useState([
    'Puxada frontal',
    'Remada curvada',
    'Remada unilateral',
    'Levantamento terras',
  ]);
  const [groupSelected, setGroupSelected] = useState('Costas');

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenExerciseDetails() {
    navigation.navigate('exercise');
  }

  return (
    <NativeBase.VStack flex={1}>
      <HomeHeader />

      <NativeBase.FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <HomeGroup
            name={item}
            isActive={
              groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()
            }
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{
          px: 8,
        }}
        my={10}
        maxH={10}
        minH={10}
      />

      <NativeBase.VStack px={8}>
        <NativeBase.HStack justifyContent="space-between" mb={5}>
          <NativeBase.Heading color="gray.200" fontSize="md">
            Exercícios
          </NativeBase.Heading>

          <NativeBase.Text color="gray.200" fontSize="sm">
            {exercises.length}
          </NativeBase.Text>
        </NativeBase.HStack>

        <NativeBase.FlatList
          data={exercises}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <HomeExerciseCard onPress={handleOpenExerciseDetails} />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{
            paddingBottom: 20,
          }}
        />
      </NativeBase.VStack>
    </NativeBase.VStack>
  );
}
