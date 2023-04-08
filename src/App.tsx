import { Box } from "@chakra-ui/react"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { AboutMe } from "./components/AboutMe"
import { Skills } from "./components/Skills"

export function App() {
  return (
    <Box display="flex" flexDirection="column" margin="2rem 5rem">
      <Header />
      <Main />
      <AboutMe />
      <Skills />
    </Box>
  )
}
