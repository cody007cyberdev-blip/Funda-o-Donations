import {Helmet} from "react-helmet";
import {
    ActionIcon,
    Alert,
    Anchor,
    Box,
    Button,
    Checkbox,
    Container,
    Flex,
    Group,
    NumberInput,
    Paper,
    PaperProps,
    Radio,
    SegmentedControl,
    Select,
    SimpleGrid,
    Stack,
    Stepper,
    Text,
    TextInput,
    Title,
    TitleProps,
    useMantineTheme
} from "@mantine/core";
import {Link, RichTextEditor} from '@mantine/tiptap';
import {useEditor} from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import React, {forwardRef, useState} from "react";
import {DateInput} from "@mantine/dates";
import {
    IconBrandApple,
    IconBrandFacebook,
    IconBrandGoogle,
    IconBrandLinkedin,
    IconBrandPaypal,
    IconBrandTwitter,
    IconBrandWhatsapp,
    IconBrandYoutube,
    IconCalendar,
    IconCheck,
    IconChevronLeft,
    IconChevronRight,
    IconCurrency,
    IconCurrencyDollar,
    IconInfoCircleFilled,
    IconLink,
    IconMail,
    IconPlus,
    IconTrash
} from "@tabler/icons-react";
import {CategorySelect, CountrySelect, CurrencySelect, FileDropzone} from "../components";
import {randomId} from "@mantine/hooks";
import {useForm} from "@mantine/form";

interface ISocialProps {
    icon: React.FC<any>;
    title: React.ReactNode;
}

const SocialSelectItem = forwardRef<HTMLDivElement, ISocialProps>(
    ({title, icon: Icon, ...others}: ISocialProps, ref) => (
        <div ref={ref} {...others}>
            <Group wrap="nowrap">
                <Icon size={18} stroke={1.5}/>
                <Text size="sm" style={{textTransform: 'capitalize'}}>{title}</Text>
            </Group>
        </div>
    )
);

const CreateCampaignPage = () => {
    const theme = useMantineTheme()
    const [active, setActive] = useState(0);
    const [target, setTarget] = useState('deadline');
    const [deadlineDate, setDeadlineDate] = useState<Date | null>(null);
    const [donationType, setDonationType] = useState('any');
    const [minimumCheck, setMinimumCheck] = useState(false);
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link,
            Superscript,
            SubScript,
            Highlight,
            TextAlign.configure({types: ['heading', 'paragraph']}),
        ],
        content: '',
    });

    const socialForm = useForm({
        initialValues: {
            employees: [{name: '', active: false, key: randomId()}],
        },
    });

    const nextStep = () => setActive((current: number) => (current < 4 ? current + 1 : current));
    const prevStep = () => setActive((current: number) => (current > 0 ? current - 1 : current));

    const socialFields = socialForm.values.employees.map((item, index) => (
        <Group key={item.key} mt="xs">
            <Select
                aria-label="social"
                data={
                    [
                        {title: 'Facebook', icon: IconBrandFacebook},
                        {title: 'Whatsapp', icon: IconBrandWhatsapp},
                        {title: 'LinkedIn', icon: IconBrandLinkedin},
                        {title: 'Twitter', icon: IconBrandTwitter},
                        {title: 'Youtube', icon: IconBrandYoutube},
                        {title: 'Outros links', icon: IconLink},
                    ].map(c => ({value: c.title, label: c.title, ...c}))}
                renderOption={SocialSelectItem}
            />
            <TextInput
                placeholder="https://"
                style={{flex: 1}}
                {...socialForm.getInputProps(`employees.${index}.name`)}
            />
            <ActionIcon color="red" onClick={() => socialForm.removeListItem('employees', index)}>
                <IconTrash size="1rem"/>
            </ActionIcon>
        </Group>
    ));

    const titleProps: TitleProps = {
        size: 24,
        mb: "md"
    }

    const subTitleProps: TitleProps = {
        size: 18,
        mb: "sm"
    }

    const paperProps: PaperProps = {
        p: "md",
        withBorder: false,
        shadow: 'sm',
        mb: "md",
        style: {backgroundColor: theme.white}
    }

    return (
        <>
            <Helmet>
                <title>Criar Campanha</title>
            </Helmet>
            <Box>
                <Container my={36}>
                    <Title mb="xl" ta="center">Criar a sua campanha</Title>
                    <Stepper active={active} onStepClick={setActive} breakpoint="sm">
                        <Stepper.Step
                            label="Começar"
                            description="Defina detalhes essenciais como título, objetivo e moeda"
                        >
                            <Title {...titleProps}>Informações da campanha</Title>
                            <Paper {...paperProps}>
                                <SimpleGrid cols={{base: 1, sm: 2}}>
                                    <TextInput label="Título"/>
                                    <CategorySelect/>
                                </SimpleGrid>
                            </Paper>
                            <Paper {...paperProps}>
                                <Title {...subTitleProps}>Localização da campanha</Title>
                                <Text size="sm" mb="sm">Selecione o país para onde enviaremos os fundos (normalmente onde reside). Isto ajuda a emparelhar com os processadores de pagamento corretos.</Text>
                                <SimpleGrid cols={{base: 1, sm: 2}}>
                                    <CountrySelect/>
                                    <TextInput label="Cidade" placeholder="cidade"/>
                                </SimpleGrid>
                            </Paper>
                            <Paper {...paperProps}>
                                <Stack gap="sm">
                                    <Title {...subTitleProps}>Informações de doação</Title>
                                    <CurrencySelect/>
                                    <Radio.Group
                                        label="Que tipo de angariação gostaria de criar?"
                                        value={target}
                                        onChange={setTarget}
                                    >
                                        <Group mt="xs">
                                            <Radio value="deadline" label="Angariação com data de fim específica?"/>
                                            <Radio value="no-deadline" label="Angariação contínua (sem prazo)?"/>
                                        </Group>
                                    </Radio.Group>
                                    <Paper {...paperProps}>
                                        {target === 'deadline' ?
                                            <Stack gap="xs">
                                                <Text size="sm">Angariação com data de fim específica?</Text>
                                                <Text size="sm">Cria urgência e deve ser usada quando o dinheiro é necessário antes de uma certa data.</Text>
                                                <DateInput
                                                    value={deadlineDate}
                                                    onChange={setDeadlineDate}
                                                    label="Prazo final"
                                                    placeholder="Data"
                                                    icon={<IconCalendar size={18}/>}
                                                />
                                                <NumberInput
                                                    label="Valor objetivo"
                                                    icon={<IconCurrencyDollar size={18}/>}/>
                                                <Checkbox
                                                    label="Permitir que a sua angariação seja financiada acima do valor necessário?"/>
                                            </Stack> :
                                            <Stack gap="xs">
                                                <Text size="sm">Angariação contínua (sem prazo)?</Text>
                                                <Text size="sm">Deve ser usada se está a recolher dinheiro regularmente.</Text>
                                                <Checkbox
                                                    checked={minimumCheck}
                                                    onChange={(event) => setMinimumCheck(event.currentTarget.checked)}
                                                    label="Selecione esta opção se quiser definir um objetivo financeiro mínimo específico"/>
                                                {minimumCheck &&
                                                    <NumberInput
                                                        label="Valor objetivo"
                                                        icon={<IconCurrencyDollar size={18}/>}
                                                    />}
                                            </Stack>}
                                    </Paper>
                                </Stack>
                            </Paper>
                            <Paper {...paperProps}>
                                <Title {...subTitleProps}>Tipo de doação</Title>
                                <SegmentedControl
                                    size="md"
                                    value={donationType}
                                    onChange={setDonationType}
                                    data={[
                                        {label: 'Qualquer (opção popular)', value: 'any'},
                                        {label: 'Mínimo', value: 'minimum'},
                                        {label: 'Fixo', value: 'fixed'},
                                    ]}
                                    mb="sm"
                                />
                                {donationType === 'minimum' ?
                                    <NumberInput label="Valor mínimo"/> :
                                    <NumberInput label="Valor fixo"/>}
                                <Checkbox
                                    label="Gostaria que a sua página de angariação fosse mostrada em mais de um idioma?"
                                    mt="sm"
                                />
                            </Paper>
                            <Paper {...paperProps}>
                                <Stack gap="sm">
                                    <Title {...subTitleProps}>Detalhes de fundos e registo</Title>
                                    <Text size="sm">*Nome da pessoa que recebe os fundos. Para organizações, o nome do representante legal (pode ser alterado posteriormente).</Text>
                                    <SimpleGrid cols={{base: 1, sm: 2}}>
                                        <TextInput label="Primeiro nome"/>
                                        <TextInput label="Último nome"/>
                                    </SimpleGrid>
                                    <FileDropzone
                                        label="Carregue a sua foto de perfil"
                                        description="Esta foto será mostrada ao lado do seu nome"
                                    />
                                    <Checkbox label={
                                        <>
                                            Concordo com os{' '}
                                            <Anchor href="#" target="_blank">
                                                termos e condições e política de privacidade da FIF
                                            </Anchor>
                                        </>
                                    }/>
                                </Stack>
                            </Paper>
                        </Stepper.Step>
                        <Stepper.Step
                            label="História da campanha"
                            description="Conte a sua história! Adicione descrição, imagens, vídeos e mais"
                        >
                            <Title {...titleProps}>
                                A história da sua campanha
                            </Title>
                            <Paper {...paperProps}>
                                <Stack gap="sm">
                                    <Text size="sm">Explique por que está a angariar dinheiro, para que serão usados os fundos e o quanto valoriza o apoio</Text>
                                    <RichTextEditor editor={editor}>
                                        <RichTextEditor.Toolbar sticky stickyOffset={60}>
                                            <RichTextEditor.ControlsGroup>
                                                <RichTextEditor.Bold/>
                                                <RichTextEditor.Italic/>
                                                <RichTextEditor.Underline/>
                                                <RichTextEditor.Strikethrough/>
                                                <RichTextEditor.ClearFormatting/>
                                                <RichTextEditor.Highlight/>
                                                <RichTextEditor.Code/>
                                            </RichTextEditor.ControlsGroup>

                                            <RichTextEditor.ControlsGroup>
                                                <RichTextEditor.H1/>
                                                <RichTextEditor.H2/>
                                                <RichTextEditor.H3/>
                                                <RichTextEditor.H4/>
                                            </RichTextEditor.ControlsGroup>

                                            <RichTextEditor.ControlsGroup>
                                                <RichTextEditor.Blockquote/>
                                                <RichTextEditor.Hr/>
                                                <RichTextEditor.BulletList/>
                                                <RichTextEditor.OrderedList/>
                                                <RichTextEditor.Subscript/>
                                                <RichTextEditor.Superscript/>
                                            </RichTextEditor.ControlsGroup>

                                            <RichTextEditor.ControlsGroup>
                                                <RichTextEditor.Link/>
                                                <RichTextEditor.Unlink/>
                                            </RichTextEditor.ControlsGroup>

                                            <RichTextEditor.ControlsGroup>
                                                <RichTextEditor.AlignLeft/>
                                                <RichTextEditor.AlignCenter/>
                                                <RichTextEditor.AlignJustify/>
                                                <RichTextEditor.AlignRight/>
                                            </RichTextEditor.ControlsGroup>
                                        </RichTextEditor.Toolbar>

                                        <RichTextEditor.Content/>
                                    </RichTextEditor>
                                    <FileDropzone
                                        label="Carregar fotos da angariação"
                                        description="Pode selecionar e carregar várias de uma vez"
                                    />
                                    <TextInput
                                        label="URL do vídeo"
                                        description="A inclusão de um vídeo personalizado pode ajudar a sua angariação a angariar mais dinheiro. Suportamos links do YouTube e Vimeo. Basta copiar e colar o link do seu vídeo no campo abaixo."
                                        icon={<IconLink size={18}/>}
                                    />
                                </Stack>
                            </Paper>
                        </Stepper.Step>
                        <Stepper.Step
                            label="Detalhes finais"
                            description="Adicione membros da equipa, personalize a visibilidade e mais"
                        >
                            <Title {...titleProps}>Detalhes finais</Title>
                            <Paper {...paperProps}>
                                <Stack gap="sm">
                                    <Title {...subTitleProps}>Gerir Equipa</Title>
                                    <Text size="sm">Se há mais de uma pessoa responsável por esta angariação e gostaria que recebam crédito público e ajudem a gerir esta página, convide-as por email.</Text>
                                    <Text size="sm">Os membros da equipa serão mostrados na sua página juntamente com a sua função. Lembre-se, os membros da equipa podem alterar todos os elementos da página.</Text>
                                    <Alert color="orange" variant="light" icon={<IconInfoCircleFilled size={18}/>}>
                                        Ainda não convidou ninguém para ajudar a gerir esta angariação.
                                    </Alert>
                                    <SimpleGrid cols={{base: 1, sm: 2}}>
                                        <TextInput label="Primeiro nome"/>
                                        <TextInput label="Último nome"/>
                                        <TextInput label="Email" mb="xs"/>
                                        <TextInput
                                            label="Função"
                                            placeholder="ex: Gestor de redes sociais, gestor de fundos"
                                            mb="xs"
                                        />
                                    </SimpleGrid>
                                    <Button
                                        leftSection={<IconMail size={18}/>}
                                        mx="auto"
                                        variant="light"
                                    >
                                        Enviar convite por email
                                    </Button>
                                </Stack>
                            </Paper>
                            <Paper {...paperProps}>
                                <Title {...subTitleProps}>Visibilidade</Title>
                                <Stack gap="sm">
                                    <Checkbox label="Permitir que a sua angariação seja mostrada em grupos criados por utilizadores."/>
                                    <Checkbox
                                        label="Marque esta caixa se quiser ocultar a sua campanha no nosso site. Apenas aqueles a quem enviar o URL poderão encontrá-la e doar."/>
                                    <Checkbox
                                        label="Marque se quiser impedir que motores de busca como o Google indexem esta página."/>
                                    <Checkbox
                                        label="Marque se quiser adicionar uma palavra-passe à sua página de angariação. Apenas aqueles com a palavra-passe poderão visualizar e doar para a campanha."/>
                                </Stack>
                            </Paper>
                            <Paper {...paperProps}>
                                <Title {...subTitleProps}>Links de redes sociais</Title>
                                <Text size="sm">Esta angariação aparece noutros lugares? Se sim, adicione links para essas páginas.</Text>
                                <Box>
                                    {socialFields.length > 0 ? (
                                        <Flex mb="xs">
                                        </Flex>
                                    ) : (
                                        <Text c="dimmed" ta="center" my="md">
                                            Adicionar link de rede social
                                        </Text>
                                    )}

                                    {socialFields}

                                    <Group justify="center" mt="md">
                                        <Button
                                            leftSection={<IconPlus size={18}/>}
                                            onClick={() =>
                                                socialForm.insertListItem('employees', {
                                                    name: '',
                                                    active: false,
                                                    key: randomId()
                                                })
                                            }
                                            variant="light"
                                        >
                                            Adicionar novo link social
                                        </Button>
                                    </Group>
                                </Box>
                            </Paper>
                            <Paper {...paperProps}>
                                <Select
                                    label="Como ficou a saber sobre nós?"
                                    data={['Motor de busca', 'Amigos e família', 'Redes sociais', 'Outro']}
                                />
                            </Paper>
                        </Stepper.Step>
                        <Stepper.Step label="Métodos de pagamento" description="Obter acesso completo">
                            <Title {...titleProps}>Métodos de Pagamento da Angariação</Title>
                            <Paper {...paperProps}>
                                <Stack gap="sm">
                                    <Title {...subTitleProps}>Ativar processadores de pagamento para a sua página de angariação</Title>
                                    <Alert icon={<IconCurrency size={18}/>} color="blue">Pode ativar Pagamentos por Cartão GGF (alimentados por MangoPay) se mudar a sua moeda de GBP para USD</Alert>
                                    <Text size="sm">Métodos de pagamento disponíveis</Text>
                                    <Group>
                                        <Button variant="light" leftSection={<IconBrandPaypal size={18}/>}>
                                            Ligar com Paypal
                                        </Button>
                                        <Button variant="light" leftSection={<IconBrandGoogle size={18}/>}>
                                            Ligar com Google Pay
                                        </Button>
                                        <Button variant="light" leftSection={<IconBrandApple size={18}/>}>
                                            Ligar com Apple Pay
                                        </Button>
                                    </Group>
                                </Stack>
                            </Paper>
                        </Stepper.Step>
                        <Stepper.Completed>
                            <Title {...titleProps} ta="center" my="xl">Concluído, sente-se enquanto terminamos de configurar tudo para si</Title>
                        </Stepper.Completed>
                    </Stepper>

                    <Group justify="center" mt="xl">
                        <Button
                            variant="default"
                            onClick={prevStep}
                            leftSection={<IconChevronLeft size={18}/>}
                        >
                            Anterior
                        </Button>
                        {active < 4 ?
                            <Button onClick={nextStep} leftSection={<IconChevronRight size={18}/>}>Próximo passo</Button> :
                            <Button component="a" href="/dashboard" leftSection={<IconCheck size={18}/>}>
                                Lançar campanha
                            </Button>
                        }
                    </Group>
                </Container>
            </Box>
        </>
    );
};

export default CreateCampaignPage;