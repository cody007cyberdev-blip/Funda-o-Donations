import {
  ActionIcon,
  Container,
  createStyles,
  Group,
  rem,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Brand from "./Brand";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor: theme.black,
    borderTop: `${rem(1)} solid ${theme.colors.brand[2]}`,
    color: theme.white,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  },

  logo: {
    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: theme.spacing.xl,
    },
  },

  description: {
    marginTop: rem(8),
    maxWidth: rem(380),
    fontSize: theme.fontSizes.sm,
    opacity: 0.8,
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.md,
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",
    gap: rem(48),
    [theme.fn.smallerThan("md")]: {
      gap: rem(32),
    },
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
      justifyContent: "center",
      marginTop: theme.spacing.xl,
    },
  },

  wrapper: {
    minWidth: rem(160),
  },

  link: {
    display: "block",
    color: theme.white,
    opacity: 0.8,
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(4),
    paddingBottom: rem(4),
    transition: "all 0.2s ease",

    "&:hover": {
      opacity: 1,
      fontWeight: 600,
    },
  },

  title: {
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.white,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: `calc(${theme.spacing.xl} * 2)`,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${theme.colors.brand[3]}`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      gap: theme.spacing.md,
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export function LandingFooter({ data }: FooterLinksProps) {
  const { classes } = useStyles();

  const groups = data.map((group) => (
    <div key={group.title} className={classes.wrapper}>
      <Text className={classes.title}>{group.title}</Text>
      {group.links.map((link, index) => (
        <a
          key={index}
          className={classes.link}
          href={link.link}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          {link.label}
        </a>
      ))}
    </div>
  ));

  return (
    <footer className={classes.footer}>
      <Container size="lg" py="xl">
        <div className={classes.inner}>
          <div className={classes.logo}>
            <Brand variant="footer" asLink={false} />
            <Text size="xs" c="dimmed" className={classes.description}>
              Há mais de 20 anos transformando vidas de crianças e jovens em Cabo Verde.
            </Text>
          </div>
          <div className={classes.groups}>{groups}</div>
        </div>
        <div className={classes.afterFooter}>
          <Text c="dimmed" size="sm">
            © 2024 Fundação Infância Feliz. Todos os direitos reservados.
          </Text>

          <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandFacebook size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandInstagram size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandYoutube size={18} stroke={1.5} />
            </ActionIcon>
          </Group>
        </div>
      </Container>
    </footer>
  );
}
