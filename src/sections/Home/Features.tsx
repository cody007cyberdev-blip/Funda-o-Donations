import {
    Box,
    BoxProps,
    Button,
    Card,
    createStyles,
    Image,
    PaperProps,
    SimpleGrid,
    Stack,
    Text,
    TextProps,
    Title,
    TitleProps
} from '@mantine/core';
import { TitleBadge } from "../../components";

const useStyles = createStyles((theme) => ({
    feature: {
        padding: theme.spacing.lg,
        backdropFilter: `blur(16px) saturate(180%)`,
        backgroundColor: `rgba(255, 255, 255, 0.75)`,
        border: `1px solid rgba(209, 213, 219, 0.3)`,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: theme.shadows.xl,
        }
    },
}));

interface FeatureProps extends PaperProps {
    image: string;
    title: string;
    description: string;
    action: string;
}

const fifFeatures = [
    {
        image: '/src/assets/img/tema.png',
        title: 'Comunidade',
        description: 'Juntos somos mais fortes. Fazemos parte de uma grande família de padrinhos, voluntários, professores e crianças que acreditam num futuro melhor para Cabo Verde.',
        action: 'Conheça os nossos eventos'
    },
    {
        image: '/src/assets/img/escolafifi.png',
        title: 'Educação',
        description: 'Operamos jardins de infância, escolas e programas de recuperação escolar em todas as ilhas. Alfabetizamos mães, oferecemos bolsas e combatemos o abandono escolar.',
        action: 'Saiba mais sobre os projetos'
    },
    {
        image: '/src/assets/img/svsolidario.png',
        title: 'Apoio Direto',
        description: 'Entregamos cestas básicas, material escolar, uniformes e apoio médico. Em 2025 já ajudamos centenas de famílias em várias ilhas.',
        action: 'Veja como pode ajudar'
    },
    {
        image: '/src/assets/img/patrocinio.png',
        title: 'Parcerias',
        description: 'Trabalhamos com Ministério da Educação, Fundação Merck, embaixadas e empresas para ampliar o impacto. Juntos chegamos mais longe.',
        action: 'Conheça os nossos parceiros'
    },
];

function Feature({ image, title, description, action }: FeatureProps) {
    const { classes } = useStyles();

    return (
        <Card className={classes.feature} shadow="md" radius="sm">
            <Card.Section>
                <Image src={image} height={240} fit="cover" alt={title} />
            </Card.Section>
            <Stack spacing="sm" mt="md" pb="xs">
                <Title order={4} color="primary">{title}</Title>
                <Text size="sm" color="dimmed">{description}</Text>
                <Button variant="subtle" color="secondary" mt="auto">
                    {action}
                </Button>
            </Stack>
        </Card>
    );
}

interface IProps {
    boxProps: BoxProps
    titleProps?: TitleProps
    subtitleProps?: TextProps
}

const FeaturesSection = ({ boxProps, subtitleProps }: IProps) => {
    const items = fifFeatures.map((item) => <Feature {...item} key={item.title} />);

    return (
        <Box {...boxProps}>
            <Box mb="lg">
                <TitleBadge title="o que fazemos" />
                <Text {...subtitleProps}>
                    Há mais de 20 anos a Fundação Infância Feliz transforma vidas em todas as ilhas de Cabo Verde. 
                    Educação, saúde, proteção e amor — porque toda criança merece um futuro feliz.
                </Text>
            </Box>
            <SimpleGrid 
                cols={2} 
                spacing="lg" 
                breakpoints={[
                    { maxWidth: 'md', cols: 2, spacing: 'sm' },
                    { maxWidth: 'sm', cols: 1 }
                ]}
            >
                {items}
            </SimpleGrid>
        </Box>
    );
}

export default FeaturesSection;