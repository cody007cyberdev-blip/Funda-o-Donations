import HeroSection from "../sections/Home/Hero.tsx";
import { Box, BoxProps, Container, Text, TextProps, Title, TitleProps } from "@mantine/core";
import { TitleBadge } from "../components";
import FeaturesSection from "../sections/Home/Features.tsx";
import StatsSection from "../sections/Home/Stats";
import JoinUsSection from "../sections/Home/JoinUs";
import WaysToFundSection from "../sections/Home/WaysToFund";
import CampaignsSection from "../sections/Home/Campaigns";
import GetStartedSection from "../sections/Home/GetStarted";
import TestimonialsSection from "../sections/Home/Testimonials";
import { Helmet } from "react-helmet";
import React from "react";

const HomePage = (): React.ReactElement => {
    const boxProps: BoxProps = {
        mt: 96,
        mb: 136,
        py: 48
    }

    const titleProps: TitleProps = {
        size: 32,
        fw: 800,
        mb: "lg",
        style: { textTransform: 'capitalize', lineHeight: '40px' }
    }

    const subTitleProps: TextProps = {
        size: 20,
        fw: 700,
        mb: "md",
        style: { lineHeight: '28px' }
    }

    return (
        <>
            <Helmet>
                <title>Início | Fundação Infância Feliz</title>
                <meta name="description" content="Fundação Infância Feliz – Há mais de 20 anos a promover os direitos e o bem-estar das crianças e jovens de Cabo Verde." />
            </Helmet>

            <Box>
                <HeroSection />

                <Container>
                    <Box {...boxProps}>
                        <TitleBadge title="Sobre nós" />
                        <Title {...titleProps}>
                            Juntos fazemos mais pela infância feliz
                        </Title>
                        <Text {...subTitleProps}>
                            Desde 2002 trabalhamos em todas as ilhas de Cabo Verde para garantir que nenhuma criança fique para trás. 
                            Com educação, saúde, proteção e amor, transformamos vidas todos os dias.
                        </Text>
                    </Box>

                    <FeaturesSection boxProps={boxProps} subtitleProps={subTitleProps} />
                    <StatsSection boxProps={boxProps} titleProps={titleProps} subtitleProps={subTitleProps} />
                    <JoinUsSection boxProps={boxProps} titleProps={titleProps} subtitleProps={subTitleProps} />
                </Container>

                <WaysToFundSection boxProps={boxProps} titleProps={titleProps} subtitleProps={subTitleProps} />

                <Container>
                    <TestimonialsSection boxProps={boxProps} titleProps={titleProps} />
                    <CampaignsSection boxProps={boxProps} titleProps={titleProps} subtitleProps={subTitleProps} />
                    <GetStartedSection boxProps={boxProps} titleProps={titleProps} />
                </Container>
            </Box>
        </>
    );
};

export default HomePage;
