import {
  Box,
  Button,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
  TagLabel,
  useDisclosure,
} from "@chakra-ui/react"

export interface Project {
  id: number
  tags: string[]
  name: string
  avatarUrl: string
  description: string
  githubUrl: string
}

export interface ProjectProps {
  project: Project
}

export function ProjectsCards({ project }: ProjectProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Button onClick={onOpen} key={project.id} height="250px" padding={4}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          maxWidth={{ base: "80%" }}
          textAlign={{ base: "center", md: "start" }}
        >
          <ModalHeader>{project.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column">
            {project.description}
            <Box marginTop={2}>
              {project.tags.map((tag) => (
                <Tag
                  padding={2}
                  borderRadius="full"
                  variant="outline"
                  colorScheme="blue"
                  marginLeft={2}
                >
                  <TagLabel key={`${project.id}${tag}`}>{tag}</TagLabel>
                </Tag>
              ))}
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">
              <Link href={project.githubUrl} target="blanck">
                {" "}
                Link github
              </Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Image src={`/applications/${project.avatarUrl}`} />
      <Box marginTop="10rem"></Box>
    </Button>
  )
}
