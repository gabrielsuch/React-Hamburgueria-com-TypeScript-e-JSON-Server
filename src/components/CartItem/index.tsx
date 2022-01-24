import {Box, ProductImage, ProductTitle, ProductHeader, ProductFooter, FixProduct, Menu} from "./style"

import {FaTrash} from "react-icons/fa"

import {useAuth} from "../../providers/AuthContext/index"
import {useProducts} from "../../providers/Products/index"
import { useEffect } from "react"

interface ProductInfo {
    id: number
    name: string
    category: string
    price: number
    img_url: string
    amount: number
    userId: string
}

interface ProductProps {
    product: ProductInfo
}

const CartItem = ({product}: ProductProps) => {
    
    const {deleteCart, subAmount, sumAmount, getCart} = useProducts()

    useEffect(() => {
        getCart()
    }, [])

    return (
        <Box>
            <ProductImage>
                <img src={product.img_url} alt={product.name} />
            </ProductImage>
            <FixProduct>
                <ProductHeader>
                    <ProductTitle>{product.name}</ProductTitle>
                    <FaTrash color="var(--gray-400)" onClick={() => deleteCart(product.id)}/>
                </ProductHeader>
                <ProductFooter>
                    <Menu>
                        <h2 onClick={() => subAmount(product)}>-</h2>
                        <p>{product.amount}</p>
                        <h2 onClick={() => sumAmount(product)}>+</h2>
                    </Menu>
                </ProductFooter>
            </FixProduct>
        </Box>
    )
}

export default CartItem