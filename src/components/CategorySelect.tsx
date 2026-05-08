import {forwardRef} from 'react';
import {Group, Select, Text} from "@mantine/core";
import {
    IconAugmentedReality,
    IconCat,
    IconClipboardHeart,
    IconDeviceTv,
    IconFireHydrant,
    IconHeartHandshake,
    IconLeaf,
    IconReportMoney,
    IconSos
} from "@tabler/icons-react";

const mockdata = [
    {
        icon: IconClipboardHeart,
        title: 'Medical',
    },
    {
        icon: IconSos,
        title: 'Emergency',
    },
    {
        icon: IconLeaf,
        title: 'Environment',
    },
    {
        icon: IconHeartHandshake,
        title: 'Nonprofit',
    },
    {
        icon: IconReportMoney,
        title: 'Financial emergency',
    },
    {
        icon: IconCat,
        title: 'Animals',
    },
    {
        icon: IconFireHydrant,
        title: 'Crisis Relief',
    },
    {
        icon: IconAugmentedReality,
        title: 'Technology',
    },
    {
        icon: IconDeviceTv,
        title: 'Film & Videos',
    },
];

const CategorySelectItem: any = ({ option }: any) => (
    <Group wrap="nowrap">
        <option.icon size={18}/>
        <div>
            <Text size="sm">{option.label}</Text>
        </div>
    </Group>
);


const CategorySelect = () => {
    return (
        <Select
            label="Category"
            renderOption={CategorySelectItem}
            data={mockdata.map(c => ({value: c.title, label: c.title, icon: c.icon}))}
            searchable
            clearable
            maxDropdownHeight={300}
        />
    );
};

export default CategorySelect;
