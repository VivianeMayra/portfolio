import { Container } from "@chakra-ui/react"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { AboutMe } from "./components/AboutMe"
import { Skills } from "./components/Skills"
import { SoftSkills } from "./components/SoftSkills"
import { Projects } from "./components/Projects"

export function App() {
  return (
    <Container
      display="flex"
      flexDirection="column"
      justifyContent="center"
      gap={{ base: "100px", md: "0" }}
      mt={55}
      mb={55}
      maxW="95%"
    >
      <Header />
      <Main />
      <AboutMe />
      <Skills />
      <Projects />
      <SoftSkills />
    </Container>
  )
}
