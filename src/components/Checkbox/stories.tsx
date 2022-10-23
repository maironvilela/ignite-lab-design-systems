import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from '.';
import { Text } from '../Text';

export default{
    title: 'Components/checkbox',
    component: Checkbox,
    decorators:[
        (Story) =>{
            return(
                <div className="flex align-center gap-2">
                    {Story()}
                    <Text size='sm'>Lembrar-me de mim por 30 dias</Text>
                </div>
            );
        }
    ]

}as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
