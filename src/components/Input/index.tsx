import {InputForm} from "./style"

interface InputProps {
    name: string
    type?: string
    placeholder: string
    register: (user: any) => void
}

export const Input = ({name, type, placeholder, register, ...rest}: InputProps) => {
    return (
        <InputForm>
            <input name={name} type={type} placeholder={placeholder} {...register(name)} {...rest}/>
        </InputForm>
    )
}