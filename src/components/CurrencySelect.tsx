import {Group, Select, Text} from "@mantine/core";
import currencyData from "../data/Currencies.json";

const CurrencySelectItem: any = ({ option }: any) => (
    <Group wrap="nowrap">
        <Text size="sm">{option.label}</Text>
        <Text size="sm" opacity={0.65}>
            {option.cc}
        </Text>
    </Group>
);

const CurrencySelect = () => {
    return (
        <Select
            label="What currency do you want to raise money in?"
            renderOption={CurrencySelectItem}
            data={currencyData.data.map(c => ({value: c.name, label: c.name, cc: c.cc}))}
            searchable
            clearable
            maxDropdownHeight={300}
        />
    );
};

export default CurrencySelect;
