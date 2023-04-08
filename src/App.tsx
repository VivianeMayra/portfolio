import { Box } from "@chakra-ui/react"
import { Header } from "./components/Header"
import { Main } from "./components/Main"

export function App() {
  return (
    <Box display="flex" flexDirection="column" margin="2rem 5rem">
      <Header />
      <Main />
    </Box>
  )
}
