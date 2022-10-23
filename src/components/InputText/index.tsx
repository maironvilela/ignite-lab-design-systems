import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';


export type InputTextInputProps = InputHTMLAttributes<HTMLInputElement>
export type TextInputRootProps = {
  children: ReactNode,
}
export type InputTextIconProps = {
  children: ReactNode,
}
function InputTextRoot({children}: TextInputRootProps){
    return(
        <div className='flex items-center h-12 p-4 bg-gray-800  gap-4 rounded  w-full focus-within:ring-2 ring-cyan-300'>
            {children}
        </div>
    );

}
InputTextRoot.displayName = 'InputText.Root';


function InputTextIcon({children}:InputTextIconProps){
    return(
        <Slot className="w-6 h-6 text-gray-500">
            {children}
        </Slot>
    );

}
InputTextIcon.displayName = 'InputText.Icon';


function InputTextInput(props: InputTextInputProps){
    return(
        <input  className='flex-1 bg-transparent outline-none text-xs placeholder: text-gray-500'{...props} />
    );
}
InputTextInput.displayName = 'InputText.Input';



export const InputText = {
    Root: InputTextRoot,
    Input: InputTextInput,
    Icon: InputTextIcon
};
