import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue
} from '@chakra-ui/react'

export function Banner() {
  const isWide = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box bgImage="url('/bg.png')" bgSize="cover">
      <Flex
        maxW="1160px"
        maxH="335px"
        mx="auto"
        px="4"
        py="7"
        align="center"
        justify="space-between"
      >
        <Box flex="1" maxW="524px">
          <Heading fontWeight="medium" color="gray.50">
            5 Continentes, infinitas possibilidades.
          </Heading>
          <Text color="gray.100" mt="2">
            Chegou a hora de tirar do papel a viagem que você sempre
            sonhouChegou a hora de tirar do papel a viagem que você sempre
            sonhou.
          </Text>
        </Box>
        {isWide && (
          <Box flex="1" maxW="420px" position="relative">
            <Image src="/airplane.png" position="absolute" mt="-24" />
          </Box>
        )}
      </Flex>
    </Box>
  )
}
