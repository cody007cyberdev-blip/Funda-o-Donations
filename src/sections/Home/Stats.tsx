import { Box, BoxProps, Paper, PaperProps, SimpleGrid, Text, TextProps, Title, TitleProps } from "@mantine/core";
import { TitleBadge } from "../../components";

const fifStats = [
    {
        amount: "1.200",
        description: "Crianças e jovens diretamente apoiados todos os anos em jardins de infância, escolas e programas de recuperação escolar."
    },
    {
        amount: "23",
        description: "Anos de trabalho contínuo em todas as ilhas de Cabo Verde, desde a fundação em 31 de maio de 2002."
    },
    {
        amount: "500+",
        description: "Famílias beneficiadas com cestas básicas, material escolar, uniformes e apoio médico nos últimos anos."
    },
    {
        amount: "42",
        description: "Bolseiros universitários apoiados em 2024/2025 através de parcerias como a Fundação Merck."
    },
    {
        amount: "10+",
        description: "Jardins de infância e complexos escolares geridos ou apoiados pela FIF em várias ilhas."
    },
    {
        amount: "1000+",
        description: "Pessoas impactadas indiretamente (pais, professores, comunidades) através de formações e sensibilização."
    }
];

interface IStatsProps extends PaperProps {
    amount: string;
    description: string;
}

function Stats({ amount, description }: IStatsProps) {
    return (
        <Paper
            p="xl"
            shadow="lg"
            radius="md"
            style={{
                backdropFilter: `blur(16px) saturate(180%)`,
                backgroundColor: `rgba(255, 255, 255, 0.85)`,
                border: `2px solid rgba(0, 48, 135, 0.1)`,
                textAlign: "center",
                transition: "all 0.3s ease",
            }}
        >
            <Title order={1} size={48} fw={900} c="primary" mb="sm">
                {amount}
            </Title>
            <Text size="md" c="dimmed" fw={500}>
                {description}
            </Text>
        </Paper>
    );
}

interface IProps {
    boxProps: BoxProps;
    titleProps?: TitleProps;
    subtitleProps?: TextProps;
}

const StatsSection = ({ boxProps, subtitleProps, titleProps }: IProps) => {
    const items = fifStats.map((stat) => (
        <Stats {...stat} key={stat.amount + stat.description.slice(0, 20)} />
    ));

    return (
        <Box {...boxProps}>
            <Box mb="xl" ta="center">
                <TitleBadge title="o nosso impacto" />
                <Title {...titleProps} ta="center">
                    Números que contam histórias de esperança
                </Title>
                <Text {...subtitleProps} ta="center" maw={680} mx="auto">
                    Desde 2002, a Fundação Infância Feliz transforma vidas todos os dias. 
                    Cada número representa uma criança com mais oportunidades, uma família mais digna e um futuro mais feliz.
                </Text>
            </Box>

            <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 3 }}
                gap="xl"
            >
                {items}
            </SimpleGrid>
        </Box>
    );
};

export default StatsSection;
