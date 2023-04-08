import { Box, Text } from "@chakra-ui/react"
import { Header } from "./components/Header"

export function App() {
  return (
    <Box display="flex" flexDirection="column" margin="2rem 5rem">
      <Header />
    </Box>
  )
}
