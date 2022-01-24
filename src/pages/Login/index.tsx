import {Container, Boxes, ContainerForm, GreenSchema, GraySchema, ContainerInfo, Title, Text, Description, DescriptionImage, DescriptionText, Image, Button, ErrorMessage} from "./style"
import {Input} from "../../components/Input/index"
import Burguer_Kenzie from "../../assets/Burguer_Kenzie.png"
import Ellipse from "../../assets/Ellipse.png"
import {FaShoppingBag} from "react-icons/fa"

import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {useHistory} from "react-router-dom"

import {useAuth} from "../../providers/AuthContext/index"

interface LoginProps {
    email: string
    password: string
}

const Login = () => {

    const history = useHistory()

    const {sendLoginAuth} = useAuth()

    const schema = yup.object().shape({
        email: yup.string().required("Campo Obrigatório").email("Email Inválido"),
        password: yup.string().required("Campo Obrigatório")
    })

    const {register, handleSubmit, formState: {errors}} = useForm<LoginProps>({
        resolver: yupResolver(schema)
    })

    const handleSendData = (data: LoginProps) => {
        sendLoginAuth(data)
    }

    return (
        <Container>
            <Boxes>
                <ContainerForm onSubmit={handleSubmit(handleSendData)}>
                    <Title>Login</Title>
                    <Input name="email" placeholder="Email" register={register}/>
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>
                    <Input name="password" type="password" placeholder="Senha" register={register}/>
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>
                    <GreenSchema>
                        <Button type="submit">Logar</Button>
                    </GreenSchema>
                    <Text>Crie sua conta para saborear muitas delícias e matar sua fome!</Text>
                    <GraySchema>
                        <Button onClick={() => history.push("/")}>Cadastrar</Button>
                    </GraySchema>
                </ContainerForm>
                <ContainerInfo>
                    <img src={Burguer_Kenzie} alt="Burguer_Kenzie" />
                    <Description>
                        <DescriptionImage>
                            <FaShoppingBag color="var(--color-primary)"/>
                        </DescriptionImage>
                        <DescriptionText>
                            A vida é como um sanduíche, é preciso recheá-la com os melhores ingredientes.
                        </DescriptionText>
                    </Description>
                    <Image>
                        <img src={Ellipse} alt="Ellipse" />
                    </Image>
                </ContainerInfo>
            </Boxes>
        </Container>
    )
}

export default Login