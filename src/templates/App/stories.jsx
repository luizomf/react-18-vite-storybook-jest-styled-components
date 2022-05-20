import { App } from '.';

export default {
  title: 'App',
  component: App,
  args: {
    children: 'Children padrão',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => <App {...args} />;
