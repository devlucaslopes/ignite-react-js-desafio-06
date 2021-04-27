import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { CityCard } from '../../components/CityCard'
import { ContinentInformation } from '../../components/ContinentInformation'
import { Header } from '../../components/Header'
import { api } from '../../services/api'

type City = {
  cover: string
  name: string
  country: string
}

type ContinentProps = {
  cover: string
  description: string
  stats: {
    countries: number
    languages: number
    cities: number
  }
  cities: City[]
}

export default function Continent({
  cover,
  description,
  stats,
  cities
}: ContinentProps) {
  return (
    <>
      <Header />

      <Image src={cover} w="100%" maxH="500" objectFit="cover" />

      <Box maxW="1160px" mx="auto" px="4">
        <SimpleGrid minChildWidth="368px" spacing="8" my={['10', '20']}>
          <Box>
            <Text fontSize={['20', '24']}>{description}</Text>
          </Box>
          <Box>
            <ContinentInformation {...stats} />
          </Box>
        </SimpleGrid>

        <Heading fontWeight="medium">Cidades +100</Heading>

        <SimpleGrid minChildWidth="256px" spacing="8" my="8">
          {cities.map((city) => (
            <CityCard key={city.name} {...city} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.query

  const { data } = await api.get(`/continents?slug=${slug}`)

  const continent = data[0]

  return {
    props: {
      ...continent
    }
  }
}
