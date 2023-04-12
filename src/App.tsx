import { Box } from "@chakra-ui/react"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { AboutMe } from "./components/AboutMe"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { SoftSkills } from "./components/SoftSkills"

export function App() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={{ base: "100px", md: "0" }}
      mt={55}
      mb={55}
      ml={15}
      maxW="95%"
    >
      <Header />
      <Main />
      <AboutMe />
      <Skills />
      <Projects />
      <SoftSkills />
    </Box>
  )
}
