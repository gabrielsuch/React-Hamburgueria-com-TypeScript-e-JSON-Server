import {AuthProvider} from "./AuthContext/index"
import {ProductsProvider} from "./Products/index"
import {ReactNode} from "react"


interface ProviderProps {
    children: ReactNode
}

const Provider = ({children}: ProviderProps) => {
    return (
        <AuthProvider>
            <ProductsProvider>
                {children}
            </ProductsProvider>
        </AuthProvider>
    )
}

export default Provider