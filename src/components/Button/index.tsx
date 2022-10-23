import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';



export type ButtonProps = {
  children: ReactNode,
  asChild: boolean
}

export function Button({children, asChild}:ButtonProps ){
    const Comp = asChild ? Slot : 'button';

    return(
        <Comp className={clsx(
            'bg-cyan-300  w-full py-3 px-4 font-semibold text-black rounded text-sm transition-colors hover:bg-cyan-100 focus:ring-2 ring-white'
        )} >{children}</Comp>
    );
}
