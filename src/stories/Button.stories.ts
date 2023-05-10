import type { Meta, StoryObj } from '@storybook/react';
import { CustomButton } from '../components';

const meta = {
  title: 'Components/Button',
  component: CustomButton,
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Primary Button',
    color: 'pink',
  },
};
