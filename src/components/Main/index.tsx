import { Box, Button, Code, Link, Stack, Text } from "@chakra-ui/react"
import curriculo from "../../assets/curriculo.pdf"

export function Main() {
  return (
    <Box
      display="flex"
      marginTop={{ base: "0", md: "4rem" }}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Box maxWidth={{ base: "100%", md: "65%" }}>
        <Text
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="800"
          fontSize={{ base: "2.5rem", md: "3rem" }}
          lineHeight={1.2}
          color="others.color-light"
          textAlign={{ base: "center", md: "start" }}
        >
          Olá, me chamo Viviane. Uma Desenvolvedora Front-end{" "}
        </Text>
        <Box
          marginTop="2rem"
          display="flex"
          gap="30px"
          justifyContent={{ base: "center", md: "start" }}
          marginBottom={{ base: "5rem", md: "0" }}
        >
          <Link
            href="https://www.linkedin.com/in/viviane-mayra-a87a49237/"
            isExternal
          >
            <Button colorScheme="blue" padding="15px 25px">
              Linkedin
            </Button>
          </Link>
          <a href={curriculo} download="Curriculo" target="_blanck">
            <Button colorScheme="blue" padding="15px 25px">
              Currículo
            </Button>
          </a>
        </Box>
      </Box>
      <Box
        bg="rgba(185, 184, 184, 0.411)"
        w="100%"
        p={4}
        color="white"
        borderRadius="10px"
      >
        <Box display="flex" gap="1rem" marginBottom="1rem">
          <Box
            bg="others.red-circle"
            borderRadius="50%"
            width="40px"
            height="40px"
          />
          <Box
            bg="others.yellow-circle"
            borderRadius="50%"
            width="40px"
            height="40px"
          />
          <Box
            bg="others.green-circle"
            borderRadius="50%"
            width="40px"
            height="40px"
          />
        </Box>
        <Stack direction="column">
          <Code children="<body>" />
          <Code colorScheme="red" children="<h1> Habilidades </h1>" />
          <Code colorScheme="yellow" children="<ul>" />
          <Code colorScheme="green" children="<li> HTML / CSS / JS </li>" />
          <Code colorScheme="green" children="<li> React </li>" />
          <Code colorScheme="green" children="<li> Next.js </li>" />
          <Code colorScheme="green" children="<li> API Rest </li>" />
          <Code colorScheme="green" children="<li> Node.js </li>" />

          <Code colorScheme="yellow" children="</ul>" />
        </Stack>
      </Box>
    </Box>
  )
}
