import styled from "styled-components";

export const ContainerHeader = styled.div`
    width: 100vw;
    height: 70px;
    border: 1px solid black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(0,0,0, 0.8);
    .title{
        h1{
            font-size: 20px;
            font-weight: bold;
            color: red;
            border-bottom: solid;
        }
    }
    .nav-bar{
        li{
            color: white;
        }
    }
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    width: 300px;
`