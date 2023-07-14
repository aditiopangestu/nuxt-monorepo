import type { Meta, StoryObj } from '@storybook/vue3';

import EkaTabs from '../components/EkaTabs.vue';

const meta = {
  title: 'Eka Component / EkaTabs',
  component: EkaTabs,
  tags: ['autodocs'],
} satisfies Meta<typeof EkaTabs>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Basic: Story = {};
