import {Container} from "./style"

import {useEffect} from "react"
import Header from "../../components/Header/index"
import {useProducts} from "../../providers/Products/index"

import Card from "../../components/Card/index"

import Modal from "../../components/Modal/index"

const Dashboard = () => {

    const {getProducts, products, getCart, isOpen, inputSearch} = useProducts()

    useEffect(() => {
        getProducts()
        getCart()
    }, [])

    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().startsWith(inputSearch) || product.category.toLowerCase().startsWith(inputSearch)
    })

    return (
        <>
            {
                isOpen && <Modal/>
            }
            <Header/>
            <Container>
                {
                    <ul>
                    {
                        filteredProducts.map((product, index) => (
                            <Card key={index} product={product}/>
                        ))
                    }
                    </ul>
                }
            </Container>
        </>
    )
}

export default Dashboard