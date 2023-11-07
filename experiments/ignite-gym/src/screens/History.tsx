import { useState } from 'react';
import * as NativeBase from 'native-base';

import { HistoryCard } from '@/components/history/HistoryCard';
import { ScreenHeader } from '@/components/index';

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: '26.08.22',
      data: ['Puxada frontal', 'Remada unilateral'],
    },
    {
      title: '27.08.22',
      data: ['Puxada frontal'],
    },
  ]);

  return (
    <NativeBase.VStack flex={1}>
      <ScreenHeader title="Histórico" />

      <NativeBase.SectionList
        sections={exercises}
        keyExtractor={item => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <NativeBase.Heading color="gray.200" fontSize="md" mt={10} mb={3}>
            {section.title}
          </NativeBase.Heading>
        )}
        px={8}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: 'center' }
        }
        ListEmptyComponent={() => (
          <NativeBase.Text color="gray.100" textAlign="center">
            Não há exercícios registrados ainda. {'\n'}
            Vamos fazer exercícios hoje?
          </NativeBase.Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </NativeBase.VStack>
  );
}
