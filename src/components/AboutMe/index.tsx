import { Box, Image, Text } from "@chakra-ui/react"

export function AboutMe() {
  return (
    <Box
      display="flex"
      marginTop="6rem"
      gap="123px"
      maxHeight="60%"
      id="aboutme"
    >
      <Image
        borderRadius="full"
        border="2px solid #610D68"
        width="60%"
        height="60%"
        padding="4px"
        boxSize="250px"
        src="https://avatars.githubusercontent.com/u/76888841?v=4"
      />

      <Box>
        <Text
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="700"
          fontSize="45"
          lineHeight="85px"
          color="others.color-light"
        >
          Sobre mim
        </Text>
        <Text
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="400"
          fontSize="20"
          lineHeight="36px"
          color="others.color-light"
        >
          Sou uma dev em ascensão apaixonada por tecnologia! Moro no Brasil mas
          tenho o sonho de conhecer e morar em outros paises. Atualmente estou
          me aprofundando em alguns temas mais voltados para o desenvolvimento
          web com a stack javaScript.
        </Text>
      </Box>
    </Box>
  )
}
