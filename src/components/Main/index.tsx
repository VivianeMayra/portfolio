import { Box, Button, Code, Link, Stack, Text } from "@chakra-ui/react"

export function Main() {
  return (
    <Box display="flex" marginTop="2.5rem">
      <Box maxWidth="65%">
        <Text
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="700"
          fontSize="70px"
          lineHeight="85px"
          color="others.color-light"
        >
          Olá, me chamo Viviane. Uma Desenvolvedora Front-end{" "}
        </Text>
        <Box marginTop="2rem" display="flex" gap="50px">
          <Link
            href="https://www.linkedin.com/in/viviane-mayra-a87a49237/"
            isExternal
          >
            <Button colorScheme="blue" padding="15px 40px">
              Linkedin
            </Button>
          </Link>
          <Button colorScheme="blue" padding="15px 40px">
            Currículo
          </Button>
        </Box>
      </Box>
      <Box
        bg="rgba(217, 217, 217, 0.11)"
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
