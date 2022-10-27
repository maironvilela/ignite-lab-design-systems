import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';



export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  asChild?: boolean,
  className?:string
}

export function Button({children, asChild, className,...props}:ButtonProps ){
    const Comp = asChild ? Slot : 'button';

    return(
        <Comp className={clsx(
            'bg-cyan-300  w-full py-3 px-4 font-semibold text-black rounded text-sm transition-colors hover:bg-cyan-100 focus:ring-2 ring-white',className
        )}   {...props} >{children}</Comp>
    );
}
