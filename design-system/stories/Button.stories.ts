// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../projects/pattern-lib/src/lib/button/button.component';

export default {
  title: 'Atomics/Buttons',
  component: ButtonComponent,
  argTypes: {
    label: { control: 'text' }, 
    // we need to override here since in Angular it could be null as well and therefore it would become an ambigious data type for storybook
  }
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

export const FancyBlueButton = Template.bind({});
FancyBlueButton.args = {
  label: 'Button',
};

export const FancyPinkButton = Template.bind({});
FancyPinkButton.args = {
  label: 'Pink version',
  pink: true,
};