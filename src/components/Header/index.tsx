import {Menu, LogoBurguer, Navigation, Logos, InputForm} from "./style"

import Burguer_Kenzie from "../../assets/Burguer_Kenzie.png"
import {FaShoppingCart, FaSignOutAlt} from "react-icons/fa"

import {useAuth} from "../../providers/AuthContext/index"
import {useProducts} from "../../providers/Products/index"

const Header = () => {

    const {logout} = useAuth()
    const {modalOpen, browseInput} = useProducts()

    return (
        <>
            <Menu>
                <LogoBurguer>
                    <img src={Burguer_Kenzie} alt="Burguer_Kenzie" />
                </LogoBurguer>
                <Navigation>
                    <InputForm>
                        <input placeholder="Pesquisar" onChange={(evt) => browseInput(evt.target.value.toLowerCase())}/>
                    </InputForm>
                    <Logos>
                        <FaShoppingCart color="var(--gray-400)" onClick={() => modalOpen()}/>
                        <FaSignOutAlt color="var(--gray-400)" onClick={() => logout()}/>
                    </Logos>
                </Navigation>
            </Menu>
        </>
    )
}

export default Header