import { Box, SimpleGrid, Text } from "@chakra-ui/react"

export function Projects() {
  return (
    <Box marginTop="4rem" id="projects">
      <Text
        fontFamily="Inter"
        fontStyle="normal"
        fontWeight="700"
        fontSize="45"
        lineHeight="85px"
        color="others.color-light"
      >
        Projetos
      </Text>
      <SimpleGrid columns={[1, null, 3]} spacing={10}>
        <Box
          borderRadius="10px"
          bg="rgba(217, 217, 217, 0.11)"
          height="150px"
        ></Box>
        <Box
          borderRadius="10px"
          bg="rgba(217,217,217,0.11)"
          height="150px"
        ></Box>
        <Box
          borderRadius="10px"
          bg="rgba(217,217,217,0.11)"
          height="150px"
        ></Box>
        <Box
          borderRadius="10px"
          bg="rgba(217,217,217,0.11)"
          height="150px"
        ></Box>
        <Box
          borderRadius="10px"
          bg="rgba(217,217,217,0.11)"
          height="150px"
        ></Box>
        <Box
          borderRadius="10px"
          bg="rgba(217,217,217,0.11)"
          height="150px"
        ></Box>
        <Box
          borderRadius="10px"
          bg="rgba(217,217,217,0.11)"
          height="150px"
        ></Box>
        <Box
          borderRadius="10px"
          bg="rgba(217,217,217,0.11)"
          height="150px"
        ></Box>
      </SimpleGrid>
    </Box>
  )
}
