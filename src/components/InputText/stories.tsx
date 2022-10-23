/* eslint-disable react/jsx-key */
import { Meta, StoryObj } from '@storybook/react';
import { EnvelopeSimple } from 'phosphor-react';
import { InputText, TextInputRootProps } from '.';

export default{
    title: 'Components/InputText',
    component: InputText.Root,
    args:{
        children: [
            <InputText.Icon >
                <EnvelopeSimple/>
            </InputText.Icon>,
            <InputText.Input placeholder="Type your e-mail address"/>
        ],
    },
    argTypes:{}
}as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};
export const withoutIcon: StoryObj<TextInputRootProps> = {
    args:{
        children:<InputText.Input placeholder="Type your e-mail address"/>
    }
};
