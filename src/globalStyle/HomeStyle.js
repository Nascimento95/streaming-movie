import styled from "styled-components";

export const ContainerHome = styled.div`
    width: 100%;
    height: 100vh;

    .categories-movies{
        width: 700px;
        height: 300px;
        margin: 100px auto 0px;
        display: flex;
        flex-wrap: wrap;
        .movie{
            width: 400px;
            height: 100%;
            background-image: url("https://images.ladepeche.fr/api/v1/images/view/60ee57273e45461e284aa9ce/full/image.jpg?v=1");
            background-size: cover;
            .hover{
            width: 400px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover{
                background: rgba(0, 0, 0, 0.5); 
            }
            }
            h2{
                color: white;
                font-size: 20px;
            }
        }
        .serie{
            width: 300px;
            height: 100%;
            background-image: url("https://adala-news.fr/wp-content/uploads/2019/11/The-Witcher-Saison-1-image.png");
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
            .hover{
            width: 400px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover{
                background: rgba(0, 0, 0, 0.5); 
            }
            h2{
                color: white;
                font-size: 20px;
            }
        }
    }
`

export const ContainerAllMovies = styled.div`
    h2{
        text-align: center;
        margin: 100px ;
    }
    .card-movies{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 20px;
        justify-items: center;
    
    }
`