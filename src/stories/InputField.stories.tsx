import type {Meta, StoryObj} from '@storybook/react';
import InputField from '@components/inputField/InputField';
import React from 'react';

const meta: Meta<typeof InputField> = {
  title: 'Example/INPUT',
  component: InputField,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;
export const LoggedIn: Story = {
  args: {
    type: 'text',
    value: 'sila@gmail.com',
    NameId: 'email',
    placeholder: 'email',
    textLabel: 'EMAIL',
    setValue: 'sisdslf',
  },
};

export const LoggedOut: Story = {};
