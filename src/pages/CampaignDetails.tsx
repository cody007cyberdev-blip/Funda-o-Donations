import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ICampaign } from "../types";
import dayjs from 'dayjs';
import campaignsData from "../data/Campaigns.json";
import {
    Accordion,
    ActionIcon,
    Avatar,
    Button,
    Card,
    Container,
    Divider,
    Flex,
    Grid,
    Image,
    Paper,
    PaperProps,
    Progress,
    Stack,
    Text,
    TextProps,
    Title,
    TitleProps,
} from "@mantine/core";
import { IconFlag, IconHeart, IconHeartFilled, IconShare } from "@tabler/icons-react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { BackButton, DonationDrawer, NotFound, ShareModal } from "../components";
import { Helmet } from "react-helmet";
import * as localizedFormat from "dayjs/plugin/localizedFormat";
//import { notifications } from "@mantine/notifications";

dayjs.extend(localizedFormat);

const CampaignDetailsPage = (): React.ReactElement => {
    const { id } = useParams();
    const [campaign, setCampaign] = useState<ICampaign | undefined>();
    const [opened, { open, close }] = useDisclosure(false);
    const [donateOpened, { open: donateOpen, close: donateClose }] = useDisclosure(false);
    const [following, setFollowing] = useState(false);
    const matchesMobile = useMediaQuery('(max-width: 768px)');

    const paperProps: PaperProps = { p: "lg", shadow: "md", radius: "md", withBorder: true };
    const titleProps: TitleProps = { size: 32, weight: 800, color: "primary" };
    const subTitleProps: TextProps = { size: 20, weight: 700, color: "primary" };
    const iconSize = 20;

    useEffect(() => {
        const found = campaignsData.data.find(c => c.id === id);
        setCampaign(found);
    }, [id]);

    if (!campaign) return <NotFound />;

    const progress = campaign.goal
        ? Math.min(
              Math.round(
                  (parseFloat(campaign.amountRaised.replace(/[^\d.-]/g, "")) /
                  parseFloat(campaign.goal.replace(/[^\d.-]/g, ""))) * 100
              ),
              100
          )
        : 0;

    return (
        <>
            <Helmet>
                <title>{campaign.title} • Fundação Infância Feliz</title>
                <meta name="description" content={campaign.description.slice(0, 150) + "..."} />
            </Helmet>

            <Container size="lg" py="xl">
                <BackButton mb="lg" />

                <Grid gutter="xl">
                    {/* Coluna Principal */}
                    <Grid.Col span={{lg: 8}}>
                        <Stack gap="lg">
                            <Card radius="lg" shadow="sm">
                                <Card.Section>
                                    <Image
                                        src={campaign.mainImage}
                                        height={480}
                                        fit="cover"
                                        radius="lg"
                                        alt={campaign.title}
                                    />
                                </Card.Section>

                                <Stack mt="lg" gap="md">
                                    <Title order={1} {...titleProps}>
                                        {campaign.title}
                                    </Title>

                                    <Flex align="center" gap="xs" c="dimmed" wrap="wrap">
                                        <Text size="sm">Campanha oficial da</Text>
                                        <Flex align="center" gap="xs">
                                            <Avatar src="/logo-fif.png" size="sm" radius="xl" />
                                            <Text fw={600} size="sm">Fundação Infância Feliz</Text>
                                            <Text size="xs" c="green">✓ Verificada</Text>
                                        </Flex>
                                        <Text size="sm">• Cabo Verde • {campaign.category}</Text>
                                    </Flex>

                                    <Text {...subTitleProps}>A nossa missão</Text>
                                    <Text size="md" c="dimmed" style={{ lineHeight: 1.8 }}>
                                        {campaign.description}
                                    </Text>

                                    {/* Mobile: Progresso + Botões */}
                                    {matchesMobile && (
                                        <>
                                            <Divider my="lg" />
                                            <Stack gap="sm">
                                                <Flex justify="space-between" align="flex-end">
                                                    <Title order={2} c="secondary">
                                                        {campaign.amountRaised}
                                                    </Title>
                                                    <Text size="lg" c="dimmed">
                                                        angariados de {campaign.goal}
                                                    </Text>
                                                </Flex>
                                                <Progress value={progress} size="xl" c="secondary" radius="xl" />
                                                <Flex justify="space-between">
                                                    <Text fw={600}>{progress}% angariados</Text>
                                                    <Text fw={600}>{campaign.contributors} doadores</Text>
                                                </Flex>

                                                <Flex gap="xs">
                                                    <Button fullWidth size="lg" c="secondary" onClick={donateOpen}>
                                                        Fazer Donativo
                                                    </Button>
                                                    <ActionIcon size="lg" variant="light" onClick={open}>
                                                        <IconShare size={iconSize} />
                                                    </ActionIcon>
                                                    <ActionIcon
                                                        size="lg"
                                                        variant={following ? "filled" : "outline"}
                                                        c="secondary"
                                                        onClick={() => setFollowing(prev => !prev)}
                                                    >
                                                        {following ? <IconHeartFilled size={iconSize} /> : <IconHeart size={iconSize} />}
                                                    </ActionIcon>
                                                </Flex>
                                            </Stack>
                                        </>
                                    )}
                                </Stack>
                            </Card>

                            {/* Organizador - Manual (sem UserCard) */}
                            <Paper {...paperProps}>
                                <Text {...subTitleProps} mb="sm">Organizador</Text>
                                <Flex align="center" gap="md">
                                    <Avatar src="/logo-fif.png" size="lg" radius="xl" />
                                    <Stack gap={0}>
                                        <Text fw={700} size="lg">Fundação Infância Feliz</Text>
                                        <Text size="sm" c="dimmed">
                                            ONG de utilidade pública em Cabo Verde desde 2002
                                        </Text>
                                        <Text size="xs" c="green" mt={4}>✓ Organização verificada</Text>
                                    </Stack>
                                </Flex>
                            </Paper>

                            <Paper {...paperProps}>
                                <Text size="sm" c="dimmed">
                                    Campanha criada em {dayjs(campaign.createdAt).format("LL")}
                                </Text>
                            </Paper>
                        </Stack>
                    </Grid.Col>

                    {/* Coluna Lateral */}
                    <Grid.Col span={{lg: 4}}>
                        <Stack gap="lg">
                            {!matchesMobile && (
                                <Paper {...paperProps}>
                                    <Stack gap="md">
                                        <Flex justify="space-between" align="flex-en                                            <Title order={2} c="secondary">
                                                {campaign.amountRaised}
                                            </Title>
                                            <Text size="lg" c="dimmed">de {campaign.goal}</Text>
                                        </Flex>
                                        <Progress value={progress} size="xl" c="secondary" radius="xl" />
                                        <Flex justify="space-between">
                                            <Text fw={600}>{progress}% angariados</Text>
                                            <Text fw={600}>{campaign.contributors} doadores</Text>
                                        </Flex>

                                        <Button size="xl" c="secondary" onClick={donateOpen}>
                                            Fazer Donativo
                                        </Button>

                                        <Button leftSection={<IconShare size={iconSize} />} variant="outline" onClick={open}>
                                            Partilhar com amigos
                                        </Button>

                                        <Button
                                            leftSection={following ? <IconHeartFilled size={iconSize} /> : <IconHeart size={iconSize} />}
                                            variant={following ? "filled" : "outline"}
                                            c="secondary"
                                            onClick={() => setFollowing(prev => !prev)}
                                        >
                                            {following ? "A seguir" : "Seguir campanha"}
                                        </Button>
                                    </Stack>
                                </Paper>
                            )}

                            <Paper {...paperProps}>
                                <Text {...subTitleProps} mb="md">Perguntas Frequentes</Text>
                                <Accordion variant="separated">
                                    <Accordion.Item value="1">
                                        <Accordion.Control>Quando a FIF recebe o meu donativo?</Accordion.Control>
                                        <Accordion.Panel>
                                            Em poucos dias úteis, via transferência segura. Aplicamos imediatamente nas crianças.
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value="2">
                                        <Accordion.Control>Os meus dados estão seguros?</Accordion.Control>
                                        <Accordion.Panel>
                                            Sim! Encriptação SSL e zero armazenamento de cartões. A sua confiança é tudo para nós.
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value="3">
                                        <Accordion.Control>Recebo recibo para o IRS?</Accordion.Control>
                                        <Accordion.Panel>
                                            Sim! Enviado automaticamente por email. Dedutível em Portugal.
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                </Accordion>
                            </Paper>

                            {matchesMobile && (
                                <Button leftSection={<IconFlag size={iconSize} />} variant="subtle" c="red">
                                    Denunciar campanha
                                </Button>
                            )}
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Container>

            <ShareModal opened={opened} onClose={close} campaign={campaign} iconSize={iconSize} />
            <DonationDrawer campaign={campaign} opened={donateOpened} onClose={donateClose} iconSize={iconSize} />
        </>
    );
};

export default CampaignDetailsPage;