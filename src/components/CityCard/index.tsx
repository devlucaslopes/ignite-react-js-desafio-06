import { Box, Flex, Image, Text } from '@chakra-ui/react'

type CityCardProps = {
  cover: string
  name: string
  country: string
}

export function CityCard({ cover, name, country }: CityCardProps) {
  return (
    <Box
      w={['100%', '100%', '256px']}
      bg="white"
      borderWidth="1px"
      borderColor="yellow.500"
      borderRadius="8"
    >
      <Image
        w="100%"
        h="auto"
        objectFit="cover"
        src={cover}
        borderTopLeftRadius="8"
        borderTopRightRadius="8"
      />
      <Flex p="18" align="center" justify="space-between">
        <Box>
          <Text fontWeight="medium" fontSize="20">
            {name}
          </Text>
          <Text color="gray.500" fontSize="16">
            {country}
          </Text>
        </Box>

        <Image
          w="30px"
          h="30px"
          objectFit="cover"
          src={cover}
          borderRadius="50%"
        />
      </Flex>
    </Box>
  )
}
