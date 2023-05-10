import type { Meta, StoryObj } from '@storybook/react';
import { CustomStack } from '../components';

const meta = {
  title: 'Components/Button',
  component: CustomStack,
} satisfies Meta<typeof CustomStack>;

// export default {
//     title: "Components/Stack",
//     component: CustomStack,
//     argTypes: {
//         numberOfChildren: { type: "number", defaultValue: 4 }
//     }
// }

// const Template = ({ numberOfChildren, ...args }) => (
//     <CustomStack>
//     </CustomStack>
// )
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    children: 'Primary Button',
  },
};
