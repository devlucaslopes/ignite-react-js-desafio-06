import { Box, Flex, Icon, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { FiChevronLeft } from 'react-icons/fi'
import { useRouter } from 'next/router'

export function Header() {
  const { asPath } = useRouter()

  return (
    <Box bg="white" py="4">
      <Flex align="center" maxW="1160px" mx="auto">
        {asPath !== '/' && (
          <Link href="/" passHref>
            <Icon as={FiChevronLeft} w="8" h="8" cursor="pointer" />
          </Link>
        )}

        <Image src="/logo.svg" mx="auto" alt="WorldTrip" />
      </Flex>
    </Box>
  )
}
