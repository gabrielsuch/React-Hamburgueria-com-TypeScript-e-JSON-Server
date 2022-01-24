import styled from "styled-components"

export const Box = styled.li `
    max-width: 470px;
    margin: 20px 0px;
    display: flex;
    flex-direction: row;
`

export const ProductImage = styled.div `
    width: 82px;
    height: 80px;
    
    img {
        width: 100%;
        height: 100%;
        background-color: var(--gray-100);
        border-radius: 5px;
    }
`

export const ProductHeader = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: space-between;

    svg{
        cursor: pointer;
    }
`

export const ProductTitle = styled.h3 `
    margin-left: 10px;
    font-weight: 700;
    color: var(--gray-600);
`

export const ProductFooter = styled.div `
    margin-left: 10px;
`

export const FixProduct = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Menu = styled.div `
    width: 106px;
    height: 34px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--gray-100);
    line-height: 34px;

    h2 {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--gray-100);
        cursor: pointer;
        color: var(--color-secondary);
    }
    p{
        font-size: var(--font-size-caption);
        padding: 0px 15px;
    }
`