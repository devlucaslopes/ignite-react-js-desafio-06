import { Flex, Box, Text, Tooltip, Icon } from '@chakra-ui/react'
import { FiAlertCircle } from 'react-icons/fi'

type ContinentInformationProps = {
  countries: number
  languages: number
  cities: number
}

export function ContinentInformation({
  cities,
  countries,
  languages
}: ContinentInformationProps) {
  return (
    <Flex h="100%" align="center" justify="space-around">
      <Box>
        <Text fontSize={['36', '48']} color="yellow.500" fontWeight="semibold">
          {countries}
        </Text>
        <Text fontSize={['18', '24']} fontWeight="semibold">
          países
        </Text>
      </Box>

      <Box>
        <Text fontSize={['36', '48']} color="yellow.500" fontWeight="semibold">
          {languages}
        </Text>
        <Text fontSize={['18', '24']} fontWeight="semibold">
          línguas
        </Text>
      </Box>

      <Box>
        <Text fontSize={['36', '48']} color="yellow.500" fontWeight="semibold">
          {cities}
        </Text>
        <Text fontSize={['18', '24']} fontWeight="semibold">
          cidades +100
          <Tooltip label="Hey, I'm here!">
            <Icon as={FiAlertCircle} ml="2" color="gray.500" />
          </Tooltip>
        </Text>
      </Box>
    </Flex>
  )
}
