import {
    Anchor,
    Button,
    Checkbox,
    Container,
    Divider,
    Group,
    Paper,
    PasswordInput,
    Text,
    TextInput,
    Title,
} from '@mantine/core';
import {Helmet} from "react-helmet";
import {IconBrandFacebook, IconBrandGoogle} from "@tabler/icons-react";

const SignupPage = () => {
    return (
        <>
            <Helmet>
                <title>Criar Conta</title>
            </Helmet>
            <Container size={420} my={40}>
                <Title
                    ta="center"
                    fw={900}
                >
                    Bem-vindo!
                </Title>
                <Text c="dimmed" size="sm" ta="center" mt={5}>
                    Já tem uma conta?{' '}
                    <Anchor size="sm" component="button">
                        Iniciar Sessão
                    </Anchor>
                </Text>

                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <Group grow mb="md" mt="md">
                        <Button radius="xl" leftSection={<IconBrandFacebook size={18}/>}>Facebook</Button>
                        <Button radius="xl" leftSection={<IconBrandGoogle size={18}/>}>Google</Button>
                    </Group>
                    <Divider label="Ou continue com email" labelPosition="center" my="lg" />
                    <TextInput label="Nome" placeholder="O seu nome" required/>
                    <TextInput label="Email" placeholder="exemplo@email.com" required mt="md"/>
                    <PasswordInput label="Palavra-passe" placeholder="A sua palavra-passe" required mt="md"/>
                    <Group justify="space-between" mt="lg">
                        <Checkbox label="Lembrar-me"/>
                        <Anchor component="button" size="sm">
                            Esqueceu-se da palavra-passe?
                        </Anchor>
                    </Group>
                    <Button fullWidth mt="xl">
                        Criar Conta
                    </Button>
                </Paper>
            </Container>
        </>
    );
}

export default SignupPage;