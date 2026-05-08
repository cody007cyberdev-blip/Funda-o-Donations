import { Helmet } from "react-helmet";
import {
    AspectRatio,
    Box,
    BoxProps,
    Button,
    Card,
    CardProps,
    Container,
    Image,
    ImageProps,
    List,
    ListProps,
    SimpleGrid,
    Stack,
    Text,
    Title,
    TitleProps
} from "@mantine/core";
import AddImg from "../assets/img/add-campaign.png";
import MoneyImg from "../assets/img/money-income.png";
import ShareImg from "../assets/img/share-campaign.png";
import TestimonialsSection from "../sections/Home/Testimonials";
import { Link } from "react-router-dom";
import React from "react";

const HowItWorksPage = (): React.ReactElement => {
    const boxProps: BoxProps = {
        mt: 96,
        mb: 136,
        py: 48
    }

    const titleProps: TitleProps = {
        size: 32,
        fw: 800,
        mb: "xl",
        style: { textTransform: 'capitalize', lineHeight: '40px' }
    }

    const listProps: Omit<ListProps, 'children'> = {
        size: "sm",
        withPadding: true
    }

    const cardProps: Omit<CardProps, 'children'> = {
        radius: "sm",
        shadow: "md",
        padding: "lg",
        style: {
            backdropFilter: `blur(16px) saturate(180%)`,
            backgroundColor: `rgba(255, 255, 255, 0.75)`,
            border: `none`,
        }
    }

    const imageProps: ImageProps = {
        h: 160,
        fit: "contain",
        py: "xl"
    }

    return (
        <>
            <Helmet>
                <title>Como Ajudar | Fundação Infância Feliz</title>
            </Helmet>

            <Box>
                <Container>
                    {/* Hero + Vídeo */}
                    <Box {...boxProps} style={{ textAlign: 'center' }}>
                        <Title mb={48} fw={800}>Como pode ajudar a Fundação Infância Feliz</Title>
                        <Text>
                            Há mais de 20 anos trabalhamos para garantir os direitos e o bem-estar das crianças e jovens de Cabo Verde.
                        </Text>
                        <Text fw={600} mb={36}>Veja o nosso vídeo institucional</Text>
                        <AspectRatio ratio={16 / 9} maw={800} mx="auto">
                            <iframe
                                src="https://www.youtube.com/embed/ajSmGohkdA4"
                                title="Ação solidária da Fundação Infância Feliz"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </AspectRatio>
                    </Box>

                    {/* 3 Passos */}
                    <Box {...boxProps}>
                        <Title {...titleProps} ta="center">É muito simples ajudar</Title>
                        <SimpleGrid
                            cols={{ base: 1, sm: 3 }}
                            gap="lg"
                        >
                            {/* Passo 1 */}
                            <Card {...cardProps}>
                                <Card.Section>
                                    <Image src={AddImg} {...imageProps} alt="Apadrinhar criança" />
                                </Card.Section>
                                <Text my="sm" fw={600}>1. Escolha como quer ajudar</Text>
                                <List {...listProps}>
                                    <List.Item>Apadrinhar uma criança</List.Item>
                                    <List.Item>Fazer um donativo único ou mensal</List.Item>
                                    <List.Item>Tornar-se sócio da FIF</List.Item>
                                    <List.Item>Oferecer bens ou serviços</List.Item>
                                </List>
                            </Card>

                            {/* Passo 2 */}
                            <Card {...cardProps}>
                                <Card.Section>
                                    <Image src={ShareImg} {...imageProps} alt="Partilhar campanha" />
                                </Card.Section>
                                <Text my="sm" fw={600}>2. Partilhe com amigos e família</Text>
                                <List {...listProps}>
                                    <List.Item>Envie por WhatsApp e email</List.Item>
                                    <List.Item>Publique no Facebook e Instagram</List.Item>
                                    <List.Item>Convide a sua empresa ou grupo</List.Item>
                                    <List.Item>Marque a FIF nas suas publicações</List.Item>
                                </List>
                            </Card>

                            {/* Passo 3 */}
                            <Card {...cardProps}>
                                <Card.Section>
                                    <Image src={MoneyImg} {...imageProps} alt="Receber donativos" />
                                </Card.Section>
                                <Text my="sm" fw={600}>3. Veja o impacto real</Text>
                                <List {...listProps}>
                                    <List.Item>Receba relatórios e fotos das crianças</List.Item>
                                    <List.Item>Conheça os projetos que apoia</List.Item>
                                    <List.Item>Participe nos nossos eventos</List.Item>
                                    <List.Item>Acompanhe tudo pelas redes sociais</List.Item>
                                </List>
                            </Card>
                        </SimpleGrid>
                    </Box>

                    {/* Testemunhos */}
                    <TestimonialsSection boxProps={boxProps} titleProps={titleProps} />

                    {/* Call to Action Final */}
                    <Box {...boxProps}>
                        <SimpleGrid
                            cols={{ base: 1, sm: 2 }}
                            gap="lg"
                        >
                            {/* Card 1 */}
                            <Card
                                shadow="md"
                                radius="sm"
                                component={Link}
                                to="/projetos"
                            >
                                <Card.Section>
                                    <Image
                                        src="src/assets/img/atividadecoletiva.png"
                                        alt="Crianças felizes na escola da FIF"
                                    />
                                </Card.Section>
                                <Stack gap="sm" align="start" mt="md" px="md" pb="md">
                                    <Text size="lg" fw={500}>Conheça os nossos projetos e beneficiários</Text>
                                    <Button size="md" component={Link} to="/projetos">
                                        Ver Projetos
                                    </Button>
                                </Stack>
                            </Card>

                            {/* Card 2 */}
                            <Card
                                shadow="md"
                                radius="sm"
                                component={Link}
                                to="/doar"
                            >
                                <Card.Section>
                                    <Image
                                        src="src/assets/img/patrocinio.png"
                                        alt="Fazer donativo"
                                    />
                                </Card.Section>
                                <Stack gap="sm" align="start" mt="md" px="md" pb="md">
                                    <Text size="lg" fw={500}>Faça já o seu donativo ou apadrinhamento</Text>
                                    <Button size="md" c="yellow" component={Link} to="/doar">
                                        Quero Ajudar Agora
                                    </Button>
                                </Stack>
                            </Card>
                        </SimpleGrid>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default HowItWorksPage;
