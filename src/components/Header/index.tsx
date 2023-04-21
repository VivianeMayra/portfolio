import { Box, Link, Text } from "@chakra-ui/react"

export function Header() {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center" gap="15px">
        <Text
          color="others.color-light"
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="inherit"
          fontSize={40}
          lineHeight={2}
        >
          Viviane
        </Text>
        <Text
          color="others.purple-dark"
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="inherit"
          fontSize={40}
          lineHeight={2}
        >
          Mayra
        </Text>
      </Box>
      <Box
        display="flex"
        color="others.color-light"
        fontFamily="Inter"
        fontStyle="normal"
        fontWeight="700"
        fontSize="17px"
        lineHeight="25px"
        gap="12px"
      >
        <Link href="#aboutme">Sobre</Link>
        <Link href="#skills">Habilidades</Link>
        <Link href="#projects">Projetos</Link>
      </Box>
    </Box>
  )
}
