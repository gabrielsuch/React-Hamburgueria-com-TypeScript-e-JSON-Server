import {Box, ProductImage, ProductInfo} from "./style"

import {useProducts} from "../../providers/Products/index"
import {useAuth} from "../../providers/AuthContext/index"
import {useEffect} from "react"

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

const Card = ({product}: ProductProps) => {

    const {user} = useAuth()
    const {addToCart, totalCartPrice} = useProducts()

    useEffect(() => {
        totalCartPrice()
    })

    return (
        <>
            <Box>
                <ProductImage>
                    <img src={product.img_url} alt={product.name} />
                </ProductImage>
                <ProductInfo>
                    <h3>{product.name}</h3>
                    <p className="category">{product.category}</p>
                    <p className="price">R${product.price.toFixed(2)}</p>
                    <div className="addButton">
                        <button onClick={() => addToCart(product, user.id)}>Adicionar</button>
                    </div>
                </ProductInfo>
            </Box>
        </>
    )
}

export default Card 