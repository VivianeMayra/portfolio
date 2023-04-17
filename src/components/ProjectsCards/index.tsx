import { Box, Image } from "@chakra-ui/react"

export interface Project {
  id: number
  tags: string[]
  name: string
  avatarUrl: string
  description: string
}

interface ProjectProps {
  project: Project
}

export function ProjectsCards({ project }: ProjectProps) {
  return (
    <Box borderRadius="10px" height="200px">
      <Image src={`/applications/${project.avatarUrl}`} />
    </Box>
  )
}
