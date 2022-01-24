import {Container, Boxes, Head, ContainerForm, GreenSchema, ContainerInfo, Title, Text, Description, DescriptionImage, DescriptionText, Image, Button, ErrorMessage} from "./style"
import {Input} from "../../components/Input/index"
import Burguer_Kenzie from "../../assets/Burguer_Kenzie.png"
import Ellipse from "../../assets/Ellipse.png"
import {FaShoppingBag} from "react-icons/fa"

import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {useHistory} from "react-router-dom"

import {useAuth} from "../../providers/AuthContext/index"

interface DataProps {
    name: string
    email: string
    password: string
    confirm_password: string
}

const Signup = () => {

    const history = useHistory()

    const {sendRegisterData} = useAuth()

    const schema = yup.object().shape({
        name: yup.string().required("Campo Obrigatório"),
        email: yup.string().required("Campo Obrigatório").email("Email Inválido"),
        password: yup.string().required("Campo Obrigatório").min(6, "Necessita 6 caractéres"),
        confirm_password: yup.string().required("Campo Obrigatório").oneOf([yup.ref("password")], "Senhas Diferentes")
    })

    const {register, handleSubmit, formState: {errors}} = useForm<DataProps>({
        resolver: yupResolver(schema)
    })

    const handleSendRegister = (data: DataProps) => {
        sendRegisterData(data)
    }

    return (
        <Container>
            <Boxes>
                <ContainerForm onSubmit={handleSubmit(handleSendRegister)}>
                    <Head>
                        <Title>Cadastro</Title>
                        <p onClick={() => history.push("/login")}>Retornar para o Login</p>
                    </Head>
                    <Input name="name" type="text" placeholder="Nome" register={register}/>
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                    <Input name="email" placeholder="Email" register={register}/>
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>
                    <Input name="password" type="password" placeholder="Senha" register={register}/>
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>
                    <Input name="confirm_password" type="password" placeholder="Confirmar Senha" register={register}/>
                    <ErrorMessage>{errors.confirm_password?.message}</ErrorMessage>
                    <GreenSchema>
                        <Button type="submit">Cadastrar</Button>
                    </GreenSchema>
                    <Text>Crie sua conta para saborear muitas delícias e matar sua fome!</Text>
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

export default Signup