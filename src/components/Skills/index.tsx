import { Box, Center, Text, Image } from "@chakra-ui/react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export function Skills() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })
  return (
    <Box marginTop="5rem" id="skills">
      <Text
        fontFamily="Inter"
        fontStyle="normal"
        fontWeight="700"
        fontSize={40}
        lineHeight={2}
        color="others.color-light"
        textTransform="uppercase"
        textAlign={{ base: "center", md: "start" }}
        marginBottom={3}
      >
        Habilidades
      </Text>
      <Box
        bg="rgba(217,217,217,0.07)"
        w="100%"
        display="flex"
        ref={sliderRef}
        className="keen-slider"
      >
        <Center
          h="200px"
          bg="gray.50"
          borderRadius="10px"
          className="keen-slider__slide"
        >
          <Image
            width="50%"
            height="100%"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
          />
        </Center>
        <Center
          h="200px"
          bg="gray.50"
          borderRadius="10px"
          className="keen-slider__slide"
        >
          <Image
            width="50%"
            height="100%"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
          />
        </Center>
        <Center
          h="200px"
          bg="gray.50"
          borderRadius="10px"
          className="keen-slider__slide"
        >
          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
            w="180px"
            h="180px"
          />
        </Center>
        <Center
          h="200px"
          bg="gray.50"
          borderRadius="10px"
          className="keen-slider__slide"
        >
          <Image
            width="50%"
            height="100%"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
          />
        </Center>
        <Center
          h="200px"
          bg="gray.50"
          borderRadius="10px"
          className="keen-slider__slide"
        >
          <Image
            width="50%"
            height="100%"
            src="https://camo.githubusercontent.com/3aa42ee93eafa8f736bac662e8ca536350dad790ba36f2f0cb1783aa2be42f6d/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6e6578746a732d322e737667"
          />
        </Center>

        <Center
          h="200px"
          bg="gray.50"
          borderRadius="10px"
          className="keen-slider__slide"
        >
          <Image
            width="50%"
            height="100%"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
          />
        </Center>
        <Center
          h="200px"
          bg="gray.50"
          borderRadius="10px"
          className="keen-slider__slide"
        >
          <Image
            width="50%"
            height="100%"
            src="https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667"
          />
        </Center>
        <Center
          h="200px"
          bg="gray.50"
          borderRadius="10px"
          className="keen-slider__slide"
        >
          <Image
            width="50%"
            height="100%"
            src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667"
          />
        </Center>
      </Box>
    </Box>
  )
}
