import styled from "styled-components"

export const Container = styled.div `
    width: 500px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    background-color: white;
    border-radius: 10px;
    opacity: 1;
    box-shadow: 1px 1px 25px black;
    z-index: 1;
    
    @media (max-width: 500px){
        width: 100%;
    }
`

export const ModalContainer = styled.div `
    width: 100%;
    height: 100vh;
    top: 0;
    position: fixed;
    opacity: 0.8;
    background-color: #131313;
    z-index: 0;
`

export const Title = styled.h3 `
    width: 100%;
    background-color: var(--color-primary);
    padding: 15px;
    color: var(--color-white);
    font-weight: 700;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    `

export const BodyContainer = styled.div `
    background-color: var(--color-white);
    padding: 15px;

    ul {
        list-style: none;
        height: 50vh;
        overflow: auto;
    }

    .removeButton {
        margin: 15px 0px;
    }
    
    button {
        width: 100%;
        border-radius: 8px;
        background-color: var(--gray-100);
        color: var(--gray-300);
        font-weight: 600;
        padding: 20px;
        cursor: pointer;
    }
`

export const Center = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h3 {
        font-weight: 700;
    }
    p{
        padding: 13px 0px;
        font-weight: 400;
    }
`

export const TotalPrice = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top: 2px solid var(--gray-100);
    padding-top: 10px;  

    p{
        font-weight: 600;
        color: var(--gray-600);
    }
    span{
        font-weight: 600;
        color: var(--gray-300);
    }
`