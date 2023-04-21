import { Box, SimpleGrid, Text } from "@chakra-ui/react"
import { applications } from "../../Applications/applications"
import { ProjectsCards } from "../ProjectsCards"

export function Projects() {
  return (
    <Box marginTop="4rem" id="projects">
      <Text
        fontFamily="Inter"
        fontStyle="normal"
        fontWeight="700"
        fontSize={40}
        lineHeight={2}
        color="others.color-light"
        textTransform="uppercase"
        textAlign={{ base: "center", md: "start" }}
        marginBottom={3}
      >
        Projetos
      </Text>
      <SimpleGrid columns={[1, null, 3]} spacing={20}>
        {applications.map((project) => (
          <ProjectsCards key={project.id} project={project} />
        ))}
      </SimpleGrid>
    </Box>
  )
}
