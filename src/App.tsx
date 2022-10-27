import { Envelope, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { InputText } from './components/InputText';
import { Text } from './components/Text';
import { Logo } from './logo';
import './styles/global.css';

export function App() {
    return(
        <div className="w-screen h-screen bg-gray-900 flex items-center justify-center flex-col text-gray-100 py-3 px-3 overflow-hidden">
        <header className="flex flex-col items-center">
            <Logo/>
            <Heading size="lg">
                Ignite Lab
            </Heading>

            <Text size="md" className="text-gray-600 block mt-1" 	 >
                Faça login e comece a usar!
            </Text>
        </header>
        <form className="w-full max-w-[400px] mt-9 flex flex-col gap-4">
            <label htmlFor="email" className=" flex flex-1 gap-3 flex-col" >
                <Text size="md" className="font-semibold">Endereço de e-mail</Text>
                <InputText.Root>
                    <InputText.Icon>
                        <Envelope/>
                    </InputText.Icon>
                    <InputText.Input placeholder="Digite seu e-mail" type="email" id="email"/>
                </InputText.Root>
            </label>

            <label htmlFor="password" className=" flex flex-1 gap-3 flex-col" >
                <Text size="md" className="font-semibold">Sua senha</Text>
                <InputText.Root>
                    <InputText.Icon>
                        <Lock/>
                    </InputText.Icon>
                    <InputText.Input placeholder="******" type="password" id="password"/>
                </InputText.Root>
            </label>
            <label htmlFor="remember" className="flex align-center gap-2 mt-4">
                <Checkbox id="remember"/>
                <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias</Text>
            </label>

            <Button type="submit" className="mt-4">Entrar na Plataforma</Button>
         </form>

         <footer className="flex gap-4 flex-col  items-center mt-4 ">

            <Text size="md" asChild className="text-gray-600 underline hover:text-gray-200">
                <a href="">Esqueceu sua senha?</a>
             </Text>

            <Text size="md" asChild className="text-gray-600 underline hover:text-gray-200">
                 <a href="">Não possue conta? Crie uma agora</a>
            </Text>
         </footer>
        </div>
  
    )}

