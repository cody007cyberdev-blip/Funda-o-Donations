import { Box, BoxProps, Button, Flex, Image, Stack, TextProps, Title, TitleProps } from "@mantine/core";
import HandFlowerImg from "../../assets/img/lotus-flower.png";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

interface IProps {
    boxProps: BoxProps;
    titleProps?: TitleProps;
    subtitleProps?: TextProps;
}

const GetStartedSection = ({ boxProps, titleProps }: IProps) => {
    const matchesMobile = useMediaQuery("(max-width: 600px)");

    return (
        <Box {...boxProps}>
            <Flex
                align="center"
                gap={{ base: "xl", sm: "xxl" }}
                direction={{ base: "column-reverse", sm: "row" }}
                justify="space-between"
            >
                {/* Texto + Botões */}
                <Stack align={matchesMobile ? "center" : "start"} gap="lg" maw={560}>
                    <Title
                        {...titleProps}
                        align={matchesMobile ? "center" : "start"}
                        size={matchesMobile ? "h3" : "h2"}
                        fw={800}
                        c="primary"
                    >
                        Pronto para mudar a vida de uma criança?
                    </Title>

                    <Title
                        order={3}
                        fw={600}
                        c="dimmed"
                        align={matchesMobile ? "center" : "start"}
                        opacity={0.9}
                    >
                        Apadrinhe, doe ou torne-se sócio hoje mesmo. Cada gesto conta.
                    </Title>

                    <Flex gap="md" wrap="wrap" justify={matchesMobile ? "center" : "flex-start"}>
                        <Button
                            size="lg"
                            color="secondary"
                            radius="xl"
                            component={Link}
                            to="/apadrinhar"
                            leftSection={<span role="img" aria-label="Coração" title="Coração">❤️</span>}
                        >
                            Quero Apadrinhar
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            color="primary"
                            radius="xl"
                            component={Link}
                            to="/doar"
                        >
                            Fazer Donativo
                        </Button>

                        <Button
                            size="lg"
                            variant="light"
                            color="primary"
                            radius="xl"
                            component={Link}
                            to="/socio"
                        >
                            Tornar-me Sócio
                        </Button>
                    </Flex>
                </Stack>

                {/* Imagem decorativa */}
                <Image
                    src={HandFlowerImg}
                    height={matchesMobile ? 200 : 280}
                    width={matchesMobile ? 200 : 280}
                    fit="contain"
                    alt="Mão com flor de lótus – símbolo de esperança e renascimento"
                />
            </Flex>
        </Box>
    );
};

export default GetStartedSection;