import { extendTheme } from "@chakra-ui/react"

const customTheme = {
  colors: {
    gray: {
      "100": "#D9D9D9",
      "500": "#000000",
    },
    others: {
      "purple-dark": "#610D68",
      "red-circle": "#FE0B0B",
      "yellow-circle": "#EBFF00",
      "green-circle": "#24FF00",
      "color-light": "#FBFBFB",
    },
  },
  fonts: {
    body: "Inter",
  },
  styles: {
    global: {
      body: {
        bg: "gray.500",
      },
    },
  },
}
export const theme = extendTheme(customTheme)
