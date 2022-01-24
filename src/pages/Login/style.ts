import styled from "styled-components"

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Boxes = styled.div `
    max-width: 1000px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;   

    @media (max-width: 520px){
        flex-direction: column-reverse;
    }
`

export const ContainerForm = styled.form `
    max-width: 500px;
    background-color: #FFFFFF;
    padding: 26px;
    border-radius: 5px;
    border: 2px solid var(--gray-0);
    display: flex;
    flex-direction: column;

    @media (max-width: 800px){
        max-width: 700px;
    }
`

export const GreenSchema = styled.div `
    button {
        background-color: var(--color-button);
        color: white;
        font-weight: 600;
        font-size: var(--font-size-headline);
    }
`

export const GraySchema = styled.div `
    button {
        background-color: var(--gray-0);
        color: var(--gray-50);
        font-weight: 600;
        font-size: var(--font-size-headline);
    }
`

export const ContainerInfo = styled.div `
    max-width: 500px;
    padding: 26px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 800px){
        max-width: 300px;
    }
`

export const Title = styled.h3 `
    font-weight: 700;
`

export const Text = styled.p `
    width: 75%;
    margin: 19px auto;
    text-align: center;
    color: var(--gray-50);
`

export const Description = styled.div `
    display: flex;
    flex-direction: row;
    border: 1px solid var(--gray-100);
    padding: 10px;
    margin: 15px 0px;
`

export const DescriptionImage = styled.div `
    margin: 15px 0px;
    background-color: var(--color-primary-50);
    padding: 10px;
`

export const DescriptionText = styled.div `
    color: var(--gray-300);
    font-weight: 400;
    margin: 0px 20px;
    display: flex;
    align-items: center;
`

export const Image = styled.div `
    margin: 15px 0px;

    @media (max-width: 520px){
        display: none;
    }
`

export const Button = styled.button `
    width: 100%;
    height: 62px;
    border-radius: 8px;
    cursor: pointer;
    font-size: var(--font-size-headline);
`

export const ErrorMessage = styled.span `
    color: var(--negative);
    margin-bottom: 15px;
`