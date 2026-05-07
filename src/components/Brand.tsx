import { createStyles, rem, Text, Title, TitleProps, UnstyledButton } from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: "Inter, Montserrat, sans-serif",
    fontWeight: 800,
    letterSpacing: -1,
    color: theme.black,

    [theme.fn.smallerThan("md")]: {
      fontSize: rem(28),
    },

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
      textAlign: "left",
    },
  },

  highlight: {
    color: theme.black,
    opacity: 0.6,
  },

  // Variante para footer ou fundo escuro
  white: {
    color: theme.white,
    fontWeight: 800,
    letterSpacing: -1,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
      textAlign: "left",
    },
  },
}));

interface BrandProps extends TitleProps {
  asLink?: boolean;
  variant?: "default" | "grayscale" | "footer";
}

const Brand = ({ asLink = true, variant = "default", ...others }: BrandProps) => {
  const { classes } = useStyles();

  const titleContent = (
    <Title
      className={
        variant === "footer" || variant === "grayscale"
          ? classes.white
          : classes.title
      }
      {...others}
    >
      Fundação Infância Feliz
      <Text
        component="span"
        className={classes.highlight}
        inherit
        weight={900}
        ml={6}
      >
        - FIF
      </Text>
    </Title>
  );

  if (asLink) {
    return (
      <UnstyledButton component={Link} to="/">
        {titleContent}
      </UnstyledButton>
    );
  }

  return titleContent;
};

export default Brand;
