import { createTheme, MantineThemeOverride } from "@mantine/core";

export const customTheme: any = createTheme({
  defaultRadius: "xs",
  
  colors: {
    brand: [
      "#FFFFFF",
      "#F8F9FA",
      "#E9ECEF",
      "#DEE2E6",
      "#ADB5BD",
      "#6C757D",
      "#495057",
      "#343A40",
      "#212529",
      "#000000",
    ],
  },

  primaryColor: "brand",
  primaryShade: 9,

  fontFamily: "Inter, Montserrat, sans-serif",
  headings: {
    fontFamily: "Inter, Montserrat, sans-serif",
    fontWeight: "700",
  },

  components: {
    Button: {
      defaultProps: {
        radius: "xs",
        size: "md",
        variant: "filled",
      },
    },
    Card: {
      defaultProps: {
        radius: "xs",
        withBorder: true,
      },
    },
    Badge: {
      defaultProps: {
        radius: "xs",
        variant: "outline",
      },
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
});
