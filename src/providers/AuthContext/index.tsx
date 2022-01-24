import {createContext, useContext, ReactNode, useState} from "react"
import api from "../../services/api"

import {toast} from "react-toastify"

import {useHistory} from "react-router-dom"

import {useProducts} from "../Products/index"

interface AuthProviderProps {
    children: ReactNode
}

interface User {
    email: string
    name: string
    id: string
    cart: []
}

interface AuthState {
    accessToken: string
    user: User
}

interface SignupProps {
    name: string
    email: string
    password: string
}

interface LoginProps {
    email: string
    password: string
}

interface AuthContextData {
    sendLoginAuth: (data: LoginProps) => void
    logout: () => void
    sendRegisterData: (data: SignupProps) => void
    user: User
    accessToken: string
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider = ({children}: AuthProviderProps) => {

    const history = useHistory()

    const [data, setData] = useState<AuthState>(() => {
        const accessToken = localStorage.getItem("@Hamburgueria:token")
        const user = localStorage.getItem("@Hamburgueria:user")

        if(accessToken && user){
            return {
                accessToken, user: JSON.parse(user)
            }
        }

        return {} as AuthState
    })

    const sendRegisterData = (data: SignupProps) => {
        const newData = {
            email: data.email,
            password: data.password,
            name: data.name,
            cart: []
        }

        api.post("/signup/", newData)
        .then((response) => {
            toast.success("Cadastro Realizado com Sucesso!")
            history.push("/login")
        })
        .catch((err) => {
            console.log(err)
            toast.error("Erro no Cadastro!")
        })
    }
    
    const sendLoginAuth = (data: LoginProps) => {
        api.post("/login", data)
        .then((response) => {           
            const {accessToken, user} = response.data

            localStorage.setItem("@Hamburgueria:token", accessToken)
            localStorage.setItem("@Hamburgueria:user", JSON.stringify(user))
            
            setData({accessToken, user})
            toast.success("Login Realizado!")
            history.push("/dashboard")
        })
        .catch((err) => {
            console.log(err)
            toast.error("Erro no Login! Verique os Campos Novamente.")
        })
    }

    const logout = () => {
        localStorage.clear()
        history.push("/login")
    }

    return (
        <AuthContext.Provider value={{sendLoginAuth, sendRegisterData, accessToken: data.accessToken, user: data.user, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)