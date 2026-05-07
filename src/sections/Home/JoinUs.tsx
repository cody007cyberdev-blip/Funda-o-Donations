import {
    Avatar,
    Box,
    BoxProps,
    Button,
    Flex,
    Image,
    Progress,
    Stack,
    Text,
    TextProps,
    ThemeIcon,
    TitleProps
} from "@mantine/core";
import { IconHeartHandshake, IconWorld } from "@tabler/icons-react";
import { TitleBadge } from "../../components";
import { useMediaQuery } from "@mantine/hooks";

interface IProps {
    boxProps: BoxProps;
    titleProps?: TitleProps;
    subtitleProps?: TextProps;
}

const JoinUsSection = ({ boxProps, subtitleProps }: IProps) => {
    const matchesMobile = useMediaQuery('(max-width: 768px)');

    return (
        <Box {...boxProps}>
            <Flex
                gap={{ base: 'lg', sm: 'xl' }}
                direction={{ base: 'column-reverse', md: 'row' }}
                align={{ base: 'center', md: 'flex-start' }}
            >
                {/* Texto + Call to Action */}
                <Stack spacing="lg" maw={520}>
                    <TitleBadge title="Junte-se a nós" />
                    <Text {...subtitleProps} size="xl" weight={700} color="primary">
                        Faça parte de uma família que transforma vidas todos os dias
                    </Text>

                    <Flex gap="md" align="flex-start">
                        <ThemeIcon size={48} radius="xl" color="secondary" variant="filled">
                            <IconWorld size={26} />
                        </ThemeIcon>
                        <Stack spacing={4}>
                            <Text weight={600}>Comunidade global</Text>
                            <Text size="sm" color="dimmed">
                                Padrinhos e doadores de Portugal, Suíça, Alemanha, EUA e de todo o mundo apoiam as nossas crianças.
                            </Text>
                        </Stack>
                    </Flex>

                    <Flex gap="md" align="flex-start">
                        <ThemeIcon size={48} radius="xl" color="secondary" variant="filled">
                            <IconHeartHandshake size={26} />
                        </ThemeIcon>
                        <Stack spacing={4}>
                            <Text weight={600}>Impacto real</Text>
                            <Text size="sm" color="dimmed">
                                Cada contributo chega diretamente às crianças: material escolar, alimentação, saúde e educação.
                            </Text>
                        </Stack>
                    </Flex>

                    <Avatar.Group spacing="sm">
                        <Avatar radius="xl" />
                        <Avatar radius="xl" />
                        <Avatar radius="xl" />
                        <Avatar radius="xl" />
                        <Avatar radius="xl" color="primary" variant="filled">
                            +850
                        </Avatar>
                    </Avatar.Group>

                    <Text size="sm" color="dimmed" mb="xs">
                        Mais de 850 pessoas já fazem parte da nossa família de apoio
                    </Text>

                    <Progress value={78} color="secondary" size="lg" radius="xl" mb="md" />

                    <Button
                        component="a"
                        href="/ajudar"
                        size="lg"
                        color="secondary"
                        radius="xl"
                        fullWidth={!matchesMobile}
                    >
                        Quero Fazer Parte
                    </Button>
                </Stack>

                {/* Imagem */}
                <Box mx={matchesMobile ? 0 : 'auto'}>
                    <Image
                        src="/src/assets/img/infanciafeliz.png"
                        alt="Crianças felizes da Fundação Infância Feliz"
                        width={matchesMobile ? '90%' : 520}
                        height={420}
                        radius="lg"
                        fit="cover"
                        caption="Crianças do Jardim de Infância Sol d’Infância – Praia, 2025"
                    />
                </Box>
            </Flex>
        </Box>
    );
};

export default JoinUsSection;