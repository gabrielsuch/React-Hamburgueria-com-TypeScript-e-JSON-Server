import styled from "styled-components"

export const Container = styled.div `
    max-width: 1500px;
    margin: auto;
    background-color: green;

    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        list-style: none;
        width: 100%;

        @media (max-width: 425px){
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            overflow: auto;
        }
    }
`