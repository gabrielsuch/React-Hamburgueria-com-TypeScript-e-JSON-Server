import {Container, ModalContainer, Title, BodyContainer, Center, TotalPrice} from "./style"

import {useProducts} from "../../providers/Products/index"
import CartItem from "../CartItem/index"

const Modal = () => {

    const {cart, totalCart, getCart, removeAllFromCart, modalClose} = useProducts()

    return (
        <>
            <Container>
                <Title>Carrinho de Compras</Title>
                <BodyContainer>
                        {
                            cart.length <= 0 ? 
                            <>
                                <Center>
                                    <h3>Sua sacola está vazia</h3>
                                    <p>Adicione itens</p>
                                </Center>
                            </>
                            :
                            <>
                                <ul>
                                    {
                                        cart.map((product) => (
                                            <CartItem key={product.id} product={product}/>
                                        ))
                                    }
                                </ul>
                                <TotalPrice>
                                    <p>Total</p>
                                    <span>R$ {totalCart.toFixed(2)}</span>
                                </TotalPrice>
                                <div className="removeButton">
                                    <button onClick={() => removeAllFromCart()}>Remover Todos</button>
                                </div>
                            </>
                        }
                </BodyContainer>
            </Container>
            <ModalContainer onClick={() => modalClose()}/>
       </>
    )
}

export default Modal