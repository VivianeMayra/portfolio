import { Box, Flex, Text } from "@chakra-ui/react"

export function SoftSkills() {
  return (
    <Box marginTop="5rem">
      <Box>
        <Text
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="700"
          fontSize="45"
          lineHeight="85px"
          color="others.color-light"
        >
          Se você chegou até aqui ...
        </Text>
        <Text
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="700"
          fontSize="40"
          lineHeight="48.41px"
          color="others.color-light"
        >
          é um bom sinal e que busca saber mais sobre mim ^^
        </Text>
      </Box>
      <Box marginTop="5rem" display="flex" gap="3rem">
        <Box bg="rgba(217, 217, 217, 0.11)" padding="35px" borderRadius="10px">
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
          >
            Tenho uma boa oratória e consigo me comunicar com excelência no meu
            ambiente de trabalho com colegas e superiores.
          </Text>
        </Box>
        <Box bg="rgba(217, 217, 217, 0.11)" padding="35px" borderRadius="10px">
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
          >
            Não importa o quê seja, sempre busco me focar na solução da
            problemática, investigando suas causas e achando a melhor resolução
            possível.
          </Text>
        </Box>
        <Box bg="rgba(217, 217, 217, 0.11)" padding="35px" borderRadius="10px">
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
