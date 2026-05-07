import { MantineThemeOverride } from "@mantine/core";

export const customTheme: MantineThemeOverride = {
  defaultRadius: "xs", // Minimalista: bordas menos arredondadas
  colorScheme: "light",

  // PALETA MINIMALISTA PRETO E BRANCO
  colors: {
    // Escala de cinzas para o tema preto e branco
    brand: [
      "#FFFFFF", // 0: Branco puro
      "#F8F9FA", // 1: Cinza muito claro
      "#E9ECEF", // 2: Cinza claro
      "#DEE2E6", // 3: Cinza borda
      "#ADB5BD", // 4: Cinza médio
      "#6C757D", // 5: Cinza texto secundário
      "#495057", // 6: Cinza escuro
      "#343A40", // 7: Quase preto
      "#212529", // 8: Preto suave
      "#000000", // 9: Preto puro
    ],
  },

  primaryColor: "brand",
  primaryShade: 9, // Preto puro como cor primária

  // Tipografia limpa e moderna
  fontFamily: "Inter, Montserrat, sans-serif",
  headings: {
    fontFamily: "Inter, Montserrat, sans-serif",
    fontWeight: 700,
  },

  // Ajustes para componentes minimalistas
  components: {
    Button: {
      defaultProps: {
        radius: "xs",
        size: "md",
        variant: "filled",
      },
      styles: (theme) => ({
        root: {
          backgroundColor: theme.black,
          color: theme.white,
          '&:hover': {
            backgroundColor: theme.colors.brand[7],
          },
        },
      }),
    },
    Card: {
      defaultProps: {
        radius: "xs",
        withBorder: true,
      },
      styles: (theme) => ({
        root: {
          backgroundColor: theme.white,
          borderColor: theme.colors.brand[2],
        },
      }),
    },
    Badge: {
      defaultProps: {
        radius: "xs",
        variant: "outline",
      },
      styles: (theme) => ({
        root: {
          borderColor: theme.black,
          color: theme.black,
        },
      }),
    },
    TextInput: {
      defaultProps: {
        radius: "xs",
      },
    },
    Paper: {
      defaultProps: {
        radius: "xs",
        withBorder: true,
      },
    },
  },
};
