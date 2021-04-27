import { Flex } from '@chakra-ui/react'
import TravelTypesItem from '../TravelTypesItem'

export function TravelTypesList() {
  return (
    <Flex
      w="100%"
      justifyContent="space-around"
      mt={['16', '24', '32']}
      mb="16"
      flexWrap="wrap"
    >
      <TravelTypesItem image="/icons/cocktail.svg" text="Vida noturna" />
      <TravelTypesItem image="/icons/beach.svg" text="Praia" />
      <TravelTypesItem image="/icons/building.svg" text="Moderno" />
      <TravelTypesItem image="/icons/museum.svg" text="Clássico" />
      <TravelTypesItem image="/icons/earth.svg" text="e mais..." />
    </Flex>
  )
}
