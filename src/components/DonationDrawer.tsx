import {useState, useEffect} from 'react';
import {
    ActionIcon,
    Anchor,
    Button,
    Checkbox,
    Container,
    Drawer,
    DrawerProps,
    Flex,
    Group,
    Image,
    NumberInput,
    Paper,
    PaperProps,
    Popover,
    Radio,
    ScrollArea,
    Slider,
    Stack,
    Text,
    TextInput,
    ThemeIcon,
    Transition,
    useMantineTheme,
    Divider // Adicionado Divider aqui
} from "@mantine/core";
import {
    IconBrandApple,
    IconBrandGoogle,
    IconCreditCard,
    IconCurrencyDollar,
    IconInfoCircleFilled,
    IconShieldCheckFilled
} from "@tabler/icons-react";
import {CountrySelect} from "./index";
import {ICampaign} from "../types";

interface IProps extends Pick<DrawerProps, 'opened' | 'onClose' | 'size'> {
    campaign?: ICampaign
    iconSize: number
}

const DonationDrawer = ({campaign, iconSize, ...others}: IProps) => {
    const [payment, setPayment] = useState('');
    const [donationAmount, setDonationAmount] = useState<number>(0);
    const [fifPercentage, setFifPercentage] = useState<number>(20); // Valor inicial 20%
    const theme = useMantineTheme()

    const paperProps: PaperProps = {
        p: "md",
        withBorder: true,
        sx: {backgroundColor: theme.white}
    }

    // Calcular os valores
    const fifContribution = donationAmount * (fifPercentage / 100);
    const netDonation = donationAmount - fifContribution;
    const totalAmount = donationAmount; // O total é o valor original do donativo

    // Formatar para moeda
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-CV', {
            style: 'currency',
            currency: 'CVE',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);
    };

    useEffect(() => {
        // Atualizar valores quando donationAmount mudar
        if (donationAmount < 0) {
            setDonationAmount(0);
        }
    }, [donationAmount]);

    return (
        <Drawer
            position="bottom"
            title="Fazer um Donativo"
            size="100%"
            scrollAreaComponent={ScrollArea.Autosize}
            {...others}
        >
            <Container>
                <Stack>
                    <Flex gap="xs" align="center">
                        <Image src={campaign?.mainImage} height={96} width={120} fit="contain" radius="sm"/>
                        <Text>Está a apoiar <b>{campaign?.title}</b></Text>
                    </Flex>
                    <NumberInput
                        size="md"
                        label="Insira o valor do seu donativo (CVE)"
                        precision={2}
                        min={0}
                        step={100}
                        value={donationAmount}
                        onChange={(value) => setDonationAmount(value || 0)}
                        rightSection={<IconCurrencyDollar size={iconSize}/>}
                        parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
                        formatter={(value) =>
                            !Number.isNaN(parseFloat(value || '0'))
                                ? `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                : ''
                        }
                    />
                    <Paper {...paperProps}>
                        <Text fw={500}>Contribua para os serviços da FIF</Text>
                        <Text size="sm" my="xs">A FIF tem 0% de taxa de plataforma para organizadores. A FIF continuará a oferecer os seus serviços
                            graças aos doadores que deixam aqui um valor opcional:</Text>
                        <Slider
                            value={fifPercentage}
                            onChange={setFifPercentage}
                            marks={[
                                {value: 0, label: '0%'},
                                {value: 20, label: '20%'},
                                {value: 50, label: '50%'},
                                {value: 80, label: '80%'},
                                {value: 100, label: '100%'},
                            ]}
                            mb="lg"
                            label={(value) => `${value}%`}
                        />
                        <Flex justify="space-between" align="center">
                            <Text size="sm">Percentagem da FIF: <b>{fifPercentage}%</b></Text>
                            <Text size="sm">Valor: <b>{formatCurrency(fifContribution)}</b></Text>
                        </Flex>
                    </Paper>
                    <Paper {...paperProps}>
                        <Radio.Group
                            name="paymentMethod"
                            label="Método de pagamento"
                            value={payment}
                            onChange={setPayment}
                            mb="md"
                        >
                            <Group mt="sm">
                                <Radio
                                    value="gpay"
                                    label={<Group spacing="xs"><IconBrandGoogle size={iconSize}/><Text>Google Pay</Text></Group>}/>
                                <Radio
                                    value="applepay"
                                    label={<Group spacing="xs"><IconBrandApple size={iconSize}/><Text>Apple
                                        Pay</Text></Group>}/>
                                <Radio
                                    value="card"
                                    label={<Group spacing="xs"><IconCreditCard size={iconSize}/><Text>Cartão de crédito ou
                                        débito</Text></Group>}/>
                            </Group>
                        </Radio.Group>
                        <Transition
                            mounted={payment === 'card'}
                            transition="scale-y"
                            duration={400}
                            timingFunction="ease"
                        >
                            {(styles) =>
                                <Paper
                                    p="md"
                                    radius="sm"
                                    mt="sm"
                                    style={styles}
                                >
                                    <Stack sx={{width: '100%'}}>
                                        <TextInput label="Endereço de email"/>
                                        <Group grow>
                                            <TextInput label="Primeiro nome"/>
                                            <TextInput label="Último nome"/>
                                        </Group>
                                        <Checkbox label="Usar como nome de faturação"/>
                                        <NumberInput label="Número do cartão"/>
                                        <Group grow>
                                            <NumberInput label="MM/AA"/>
                                            <NumberInput label="CVV"/>
                                        </Group>
                                        <TextInput label="Nome no cartão"/>
                                        <Group grow>
                                            <CountrySelect/>
                                            <TextInput label="Código postal"/>
                                        </Group>
                                        <Checkbox label="Guardar cartão para futuros donativos"/>
                                    </Stack>
                                </Paper>
                            }
                        </Transition>
                    </Paper>
                    <Paper {...paperProps}>
                        <Stack>
                            <Group spacing={4}>
                                <Checkbox label="Não exibir o meu nome publicamente na campanha de angariação."/>
                                <Popover width={200} position="bottom" withArrow shadow="md">
                                    <Popover.Target>
                                        <ActionIcon color="primary" variant="subtle">
                                            <IconInfoCircleFilled size={iconSize}/>
                                        </ActionIcon>
                                    </Popover.Target>
                                    <Popover.Dropdown>
                                        <Text size="sm">O seu nome será visível apenas para o organizador, membros da equipa e o beneficiário</Text>
                                    </Popover.Dropdown>
                                </Popover>
                            </Group>
                            <Checkbox
                                label="Receber atualizações de marketing ocasionais da FIF. Pode cancelar a subscrição a qualquer momento."/>
                        </Stack>
                    </Paper>
                    <Paper {...paperProps}>
                        <Stack>
                            <Text fw={700} size="lg">Resumo do seu donativo</Text>
                            <Group position="apart">
                                <Text>Valor total do donativo</Text>
                                <Text fw={500}>{formatCurrency(donationAmount)}</Text>
                            </Group>
                            <Group position="apart">
                                <Flex align="center" gap="xs">
                                    <Text>Contribuição FIF ({fifPercentage}%)</Text>
                                    <Popover width={200} position="bottom" withArrow shadow="md">
                                        <Popover.Target>
                                            <ActionIcon size="xs" color="gray" variant="transparent">
                                                <IconInfoCircleFilled size={14}/>
                                            </ActionIcon>
                                        </Popover.Target>
                                        <Popover.Dropdown>
                                            <Text size="xs">Valor opcional para apoiar os serviços da plataforma FIF</Text>
                                        </Popover.Dropdown>
                                    </Popover>
                                </Flex>
                                <Text fw={500}>{formatCurrency(fifContribution)}</Text>
                            </Group>
                            <Group position="apart">
                                <Text>Valor que vai para a campanha</Text>
                                <Text fw={500}>{formatCurrency(netDonation)}</Text>
                            </Group>
                            <Divider my="xs" />
                            <Group position="apart">
                                <Text fw={700}>Total a pagar hoje</Text>
                                <Text fw={700} size="lg" color="green">{formatCurrency(totalAmount)}</Text>
                            </Group>
                            <Button size="lg" color="secondary" disabled={donationAmount <= 0}>
                                Doar Agora {formatCurrency(totalAmount)}
                            </Button>
                            <Text size="xs" color="dimmed" align="center">
                                * {formatCurrency(netDonation)} será direcionado para a campanha "{campaign?.title}"
                            </Text>
                        </Stack>
                    </Paper>
                    <Paper {...paperProps}>
                        <Stack>
                            <Text size="sm">Ao continuar, concorda com os <Anchor>termos da FIF</Anchor> e <Anchor>aviso de privacidade.</Anchor></Text>
                            <Text size="sm">Saiba mais sobre <Anchor>preços e taxas.</Anchor></Text>
                            <Flex gap="sm">
                                <ThemeIcon size="lg" variant="light" color="blue">
                                    <IconShieldCheckFilled size={18}/>
                                </ThemeIcon>
                                <Text size="sm">Garantimos-lhe um reembolso total até um ano no raro caso de ocorrer fraude.&nbsp;<Anchor>Veja a nossa Garantia de Doações FIF.</Anchor>
                                </Text>
                            </Flex>
                        </Stack>
                    </Paper>
                </Stack>
            </Container>
        </Drawer>
    );
};

export default DonationDrawer;