// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../projects/pattern-lib/src/lib/button/button.component';
import { ButtonsetComponent } from '../projects/pattern-lib/src/lib/buttonset/buttonset.component';

export default {
  title: 'Molecules/Button Sets',
  component: ButtonsetComponent,
  argTypes: {
    label: { control: 'text' }, 
    // we need to override here since in Angular it could be null as well and therefore it would become an ambigious data type for storybook
  },
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [ButtonComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<ButtonsetComponent> = (args: ButtonsetComponent) => ({
  component: ButtonsetComponent,
  props: args,
});

export const ButtonsetSample = Template.bind({});
ButtonsetSample.args = {
  
};