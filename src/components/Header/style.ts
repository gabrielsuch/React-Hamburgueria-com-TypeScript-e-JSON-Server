import styled from "styled-components"

export const Menu = styled.div `
    width: 100%;
    padding: 10px;
    background-color: var(--gray-0);
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @media (max-width: 600px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const LogoBurguer = styled.div `
    display: flex;
    align-items: center;
    background-color: transparent;
    
    img{
        background-color: transparent;
    }
`

export const Navigation = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: transparent;
    
    @media (max-width: 600px){
        margin: 10px 0px;
    }
`

export const InputForm = styled.div `
    input {
        width: 100%;
        margin: 0px;
        padding: 21px 15px;
        border-radius: 8px;
        border: 2px solid var(--gray-600);
    }
`

export const Logos = styled.div `
    background-color: transparent;

    svg{
        width: 25px;
        height: 25px;
        margin: 0px 15px;
        background-color: transparent;
        cursor: pointer;

        @media (max-width: 340px){
            margin: 8px 15px;
        }
    }

    @media (max-width: 340px){
        display: flex;
        flex-direction: column;
    }
`