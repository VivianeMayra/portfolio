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
        fontSize="45"
        lineHeight="85px"
        color="others.color-light"
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
