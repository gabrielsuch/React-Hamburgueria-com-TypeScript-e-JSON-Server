import {createContext, useContext, ReactNode, useState, useEffect} from "react"
import {useAuth} from "../AuthContext/index"

import api from "../../services/api"

interface ProviderProps{
    children: ReactNode
}

interface ProductsContext {
    getProducts: () => void
    addToCart: (product: ProductInfo, userId: string) => void
    getCart: () => void
    removeAllFromCart: () => void
    deleteCart: (productId: number) => void
    totalCartPrice: () => void
    products: ProductInfo[]
    cart: ProductInfo[]
    totalCart: number
    isOpen: boolean
    modalOpen: () => void
    modalClose: () => void
    subAmount: (product: ProductInfo) => void
    sumAmount: (product: ProductInfo) => void
    browseInput: (word: string) => void
    inputSearch: string
}

interface ProductInfo {
    id: number
    name: string
    category: string
    price: number
    img_url: string
    amount: number
    userId: string
}

const ProductsContext = createContext<ProductsContext>({} as ProductsContext)

export const ProductsProvider = ({children}: ProviderProps) => {

    const [products, setProducts] = useState<ProductInfo[]>([])
    const [cart, setCart] = useState<ProductInfo[]>([])
    const [totalCart, setTotalCart] = useState(0) 
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [inputSearch, setInputSearch] = useState("")

    const {accessToken, user} = useAuth()

    const browseInput = (word: string) => {
        setInputSearch(word)
    }

    const modalOpen = () => {
        setIsOpen(true)
    }

    const modalClose = () => {
        setIsOpen(false)
    }

    const getProducts = () => {
        api.get("/products", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then((response) => {
            setProducts(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const addToCart = (data: ProductInfo, userId: string) => {
        const newData = {
            id: data.id,
            name: data.name,
            category: data.category,
            price: data.price,
            img_url: data.img_url,
            userId: userId,
            amount: data.amount
        }

        api.post(`/cart`, newData, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then((response) => {
            getCart()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const getCart = () => {
        api.get(`/cart?userId=${user.id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then((response) => {
            setCart(response.data)
        })
        .catch((err) => {
            setCart([])
            console.log(err)
        })
    }

    const deleteCart = (productId: number) => {
        api.delete(`/cart/${productId}/`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then((response) => {
            getCart()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const removeAllFromCart = () => {
        cart.map((product) => {
            api.delete(`/cart/${product.id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            .then((response) => {
                setCart([])
            })
            .catch((err) => {
                console.log(err)
            })
        })
    }

    const totalCartPrice = () => {
        setTotalCart(cart.reduce((acumulador, valorAtual) => {
            return acumulador + (valorAtual.price * valorAtual.amount)
        }, 0))
    }

    const subAmount = (product: ProductInfo) => {
        if(product.amount >= 2){
            product.amount = product.amount - 1
            const newAmount = {...product}
            
            api.patch(`/cart/${product.id}`, newAmount, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            .then((response) => {
                getCart()
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    const sumAmount = (product: ProductInfo) => {
        product.amount = product.amount + 1
        const newAmount = {...product}
        console.log(newAmount)

        api.patch(`/cart/${product.id}`, newAmount, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then((response) => {
            getCart()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <ProductsContext.Provider value={{getProducts, products, addToCart, cart, removeAllFromCart, getCart, totalCartPrice, totalCart, deleteCart, modalOpen, modalClose, isOpen, subAmount, sumAmount, browseInput, inputSearch}}>
            {children}
        </ProductsContext.Provider>
    )   
}

export const useProducts = () => useContext(ProductsContext)