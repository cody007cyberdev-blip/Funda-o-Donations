import {
    Box,
    BoxProps,
    Burger,
    Button,
    ButtonProps,
    Center,
    Collapse,
    Container,
    createStyles,
    Divider,
    Drawer,
    Flex,
    getStylesRef,
    Group,
    Header,
    HoverCard,
    rem,
    ScrollArea,
    SimpleGrid,
    Text,
    ThemeIcon,
    UnstyledButton,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import {
    IconChevronDown,
    IconSearch,
} from '@tabler/icons-react';
import { useEffect, useState } from "react";
import { BrandName, SearchDrawer } from "./index";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
    link: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        textDecoration: 'none',
        color: theme.black,
        fontWeight: 500,
        fontSize: theme.fontSizes.sm,

        [theme.fn.smallerThan('md')]: {
            height: rem(42),
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        },

        '&:hover': {
            backgroundColor: theme.colors.brand[1],
            color: theme.black,
            fontWeight: 600,

            [`& .${getStylesRef('icon')}`]: {
                color: theme.black,
            },
        },
    },

    subLink: {
        width: '100%',
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
        borderRadius: theme.radius.xs,

        ...theme.fn.hover({
            backgroundColor: theme.colors.brand[2],
        }),

        '&:active': theme.activeStyles,
    },

    dropdownFooter: {
        backgroundColor: theme.colors.brand[1],
        margin: `calc(${theme.spacing.md} * -1)`,
        marginTop: theme.spacing.sm,
        padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
        paddingBottom: theme.spacing.xl,
        borderTop: `${rem(1)} solid ${theme.colors.brand[2]}`,
    },

    linkIcon: {
        ref: getStylesRef('icon'),
        color: theme.black,
    },

    hiddenMobile: {
        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    hiddenDesktop: {
        [theme.fn.largerThan('md')]: {
            display: 'none',
        },
    },

    drawer: {
        backgroundColor: theme.white,
    },

    header: {
        backgroundColor: theme.white,
        borderBottom: `${rem(1)} solid ${theme.colors.brand[2]}`,
    },
}));

interface LinksGroup {
    label: string;
    href?: string;
    icon?: React.ReactNode;
    initiallyOpened?: boolean;
    links?: (LinksGroup | { label: string; href: string })[];
}

const mockdata: LinksGroup[] = [
    {
        label: 'Como Funciona',
        href: '/how-it-works',
    },
    {
        label: 'Campanhas',
        href: '/campaigns',
    },
    {
        label: 'Criar Campanha',
        href: '/create-campaign',
    },
];

export function LandingNavbar() {
    const { classes } = useStyles();
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const [searchOpened, { toggle: toggleSearch }] = useDisclosure(false);
    const [compressedNav, setCompressedNav] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');

    useEffect(() => {
        const handleScroll = () => {
            setCompressedNav(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = mockdata.map((item) => (
        <UnstyledButton key={item.label} component={Link} to={item.href || '#'} className={classes.link}>
            <Center inline>
                <Box component="span" mr={6}>
                    {item.label}
                </Box>
            </Center>
        </UnstyledButton>
    ));

    return (
        <>
            <Header height={compressedNav ? 60 : 70} className={classes.header} style={{ position: 'sticky', top: 0, zIndex: 100 }}>
                <Container size="lg" h="100%" px="md">
                    <Group justify="space-between" style={{ height: '100%' }} wrap="nowrap" gap={0}>
                        <BrandName />

                        <Group gap={0} className={classes.hiddenMobile} mr={-12}>
                            {links}
                        </Group>

                        <Group gap="xs" className={classes.hiddenMobile}>
                            <Button
                                variant="subtle"
                                size="sm"
                                leftSection={<IconSearch size={16} />}
                                onClick={toggleSearch}
                            >
                                Pesquisar
                            </Button>
                            <Button
                                component={Link}
                                to="/dashboard"
                                variant="filled"
                                size="sm"
                                style={{ backgroundColor: '#000000' }}
                            >
                                Painel
                            </Button>
                        </Group>

                        <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
                    </Group>
                </Container>
            </Header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Menu"
                className={classes.drawer}
                zIndex={1000000}
            >
                <ScrollArea style={{ height: 'calc(100vh - 60px)' }} mx="-md">
                    <Divider my="sm" />

                    {links}

                    <Divider my="sm" />

                    <Group justify="center" grow pb="xl" px="md">
                        <Button
                            variant="subtle"
                            size="sm"
                            leftSection={<IconSearch size={16} />}
                            onClick={() => {
                                toggleSearch();
                                closeDrawer();
                            }}
                        >
                            Pesquisar
                        </Button>
                        <Button
                            component={Link}
                            to="/dashboard"
                            variant="filled"
                            size="sm"
                            style={{ backgroundColor: '#000000' }}
                        >
                            Painel
                        </Button>
                    </Group>
                </ScrollArea>
            </Drawer>

            <SearchDrawer opened={searchOpened} onClose={toggleSearch} />
        </>
    );
}
