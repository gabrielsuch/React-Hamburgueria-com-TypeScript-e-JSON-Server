import styled from "styled-components"

export const Box = styled.li `
    max-width: 300px;
    height: 350px;
    border: 2px solid var(--gray-100);
    margin: 30px;

    img{
        width: 158px;
        height: 158px;
    }

    :hover {
        border: 2px solid var(--color-primary);
    }

    :hover .addButton button {
        background-color: var(--color-primary);
    }

    @media (max-width: 425px){
        margin: 30px 5px;
    }
`

export const ProductImage = styled.div `
    width: 295px;
    background-color: var(--gray-0);
    text-align: center;

    img{
        background-color: transparent;
    }
`

export const ProductInfo = styled.div `
    padding: 21px;

    .category {
        font-size: var(--font-size-caption);
        font-weight: 400;
        color: var(--gray-300);
        padding: 14px 0px;
    }

    .price {
        color: var(--color-primary);
        font-weight: 600;
    }

    .addButton {
        padding-top: 14px;

        button {
            width: 106px;
            padding: 15px;
            border-radius: 8px;
            background-color: var(--gray-400);
            color: var(--color-white);
            font-weight: 600;
            cursor: pointer;
        }
    }
`