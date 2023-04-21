import { Box, Text } from "@chakra-ui/react"

export function SoftSkills() {
  return (
    <Box marginTop="5rem">
      <Box>
        <Text
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="700"
          fontSize={30}
          lineHeight={1}
          color="others.color-light"
          textAlign={{ base: "center", md: "start" }}
          marginBottom={2}
        >
          Se você chegou até aqui...
        </Text>
        <Text
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="500"
          fontSize={25}
          lineHeight={1}
          color="others.color-light"
          textAlign={{ base: "center", md: "start" }}
        >
          é um bom sinal e que busca saber mais sobre mim ^^
        </Text>
      </Box>
      <Box
        marginTop="5rem"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        gap="3rem"
      >
        <Box
          bg="rgba(185, 184, 184, 0.411)"
          padding="35px"
          borderRadius="10px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            fontFamily="Inter"
            fontStyle="normal"
            fontWeight="700"
            fontSize="22px"
            lineHeight="39px"
            color="others.color-light"
          >
            Boa comunicação
          </Text>
          <Text
            fontFamily="Inter"
            fontStyle="normal"
            fontWeight="400"
            fontSize="15px"
            lineHeight="24px"
            color="others.color-light"
            textAlign="center"
          >
            Tenho uma boa oratória e consigo me comunicar com excelência no meu
            ambiente de trabalho com colegas e superiores.
          </Text>
        </Box>
        <Box
          bg="rgba(185, 184, 184, 0.411)"
          padding="35px"
          borderRadius="10px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            fontFamily="Inter"
            fontStyle="normal"
            fontWeight="700"
            fontSize="22px"
            lineHeight="39px"
            color="others.color-light"
          >
            Soluciono problemas
          </Text>
          <Text
            fontFamily="Inter"
            fontStyle="normal"
            fontWeight="400"
            fontSize="15px"
            lineHeight="24px"
            color="others.color-light"
            textAlign="center"
          >
            Não importa o quê seja, sempre busco me focar na solução da
            problemática, investigando suas causas e achando a melhor resolução
            possível.
          </Text>
        </Box>
        <Box
          bg="rgba(185, 184, 184, 0.411)"
          padding="35px"
          borderRadius="10px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            fontFamily="Inter"
            fontStyle="normal"
            fontWeight="700"
            fontSize="22px"
            lineHeight="39px"
            color="others.color-light"
          >
            Criatividade
          </Text>
          <Text
            fontFamily="Inter"
            fontStyle="normal"
            fontWeight="400"
            fontSize="15px"
            lineHeight="24px"
            color="others.color-light"
            textAlign="center"
          >
            Acredito que esse seja um dos maiores diferenciais de um dev para
            outro e com certeza essa é uma de minhas qualidades mais fortes.
            Gosto de soluções realistas e ao mesmo tempo fora da curva,
            agregando sempre valor e diferencial para a empresa.
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
