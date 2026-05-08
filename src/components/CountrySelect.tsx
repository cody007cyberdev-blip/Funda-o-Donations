import countriesData from "../data/Countries.json";
import {Avatar, Group, Select, Text} from "@mantine/core";

const CountrySelectItem: any = ({ option }: any) => (
    <Group wrap="nowrap">
        <Avatar src={option.image} size="sm"/>
        <div>
            <Text size="sm">{option.label}</Text>
            <Text size="xs" opacity={0.65}>
                {option.code}
            </Text>
        </div>
    </Group>
);

const CountrySelect = () => {
    return (
        <Select
            label="Country"
            renderOption={CountrySelectItem}
            data={countriesData.data.map(c => ({value: c.name, label: c.name, image: c.image, code: c.code}))}
            searchable
            clearable
            maxDropdownHeight={300}
        />
    );
};

export default CountrySelect;
