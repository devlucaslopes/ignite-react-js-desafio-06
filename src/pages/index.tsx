import { Box, Center, Divider, Heading } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { TravelTypesList } from '../components/TravelTypesList'
import { Slider } from '../components/Slider'
import { GetServerSideProps } from 'next'
import { api } from '../services/api'

type Continent = {
  slug: string
  cover: string
  title: string
  subtitle: string
}

type HomeProps = {
  continents: Continent[]
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Header />

      <Banner />

      <Box maxW="1160px" mx="auto">
        <TravelTypesList />

        <Center w="90px" mx="auto" bg="gray.700" mt="16" mb="16">
          <Divider orientation="horizontal" />
        </Center>

        <Heading fontWeight="medium" textAlign="center">
          Vamos nessa? <br /> Então escolha seu continente
        </Heading>

        <Box mt="8">
          <Slider slides={continents} />
        </Box>
      </Box>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get('/continents')

  return {
    props: {
      continents: data
    }
  }
}
