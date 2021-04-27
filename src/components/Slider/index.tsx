import { Flex, Image, Text } from '@chakra-ui/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'

SwiperCore.use([Navigation, Pagination])

type Slide = {
  cover: string
  slug: string
  title: string
  subtitle: string
}

type SliderProps = {
  slides: Slide[]
}

export function Slider({ slides }: SliderProps) {
  return (
    <Swiper navigation pagination slidesPerView={1}>
      {slides.map((slide) => (
        <SwiperSlide key={slide.title}>
          <Link href={`/continente/${slide.slug}`}>
            <a>
              <Image
                objectFit="cover"
                w="100%"
                h={['250', '480']}
                position="relative"
                src={slide.cover}
              />
              <Flex
                direction="column"
                align="center"
                justify="center"
                position="absolute"
                top="0"
                right="0"
                left="0"
                bottom="0"
                bg="rgba(28, 20, 1, 0.35)"
              >
                <Text color="white" fontSize={['3xl', '5xl']} fontWeight="bold">
                  {slide.title}
                </Text>
                <Text color="white" fontSize={['18', '24']}>
                  {slide.subtitle}
                </Text>
              </Flex>
            </a>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
