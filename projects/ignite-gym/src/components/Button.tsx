import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  variant?: 'solid' | 'outline';
  children?: React.ReactNode;
};

export function Button({ variant = 'solid', children, ...props }: Props) {
  return (
    <NativeBaseButton
      w="full"
      h={14}
      bg={variant === 'outline' ? 'transparent' : 'green.700'}
      borderWidth={variant === 'outline' ? 1 : 0}
      borderColor="green.500"
      rounded="sm"
      _pressed={{
        bg: variant === 'outline' ? 'gray.500' : 'green.500',
      }}
      {...props}
    >
      <Text
        color={variant === 'outline' ? 'green.500' : 'white'}
        fontFamily="heading"
        fontSize="sm"
      >
        {children}
      </Text>
    </NativeBaseButton>
  );
}
