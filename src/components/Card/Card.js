import { CardContainer, CardImage, CardTitle } from './CardStyle';

function Card({image, title, id}) {
    
    return (
        <CardContainer>
            <a 
            target="_blank" 
            rel="noreferrer" 
            href={`https://imdbembed.xyz/movie/tmdb/${id}`}
            >
                <CardImage 
                    src={`https://image.tmdb.org/t/p/original${image}`} alt={title} 
                />
            </a>
            <CardTitle>
                {title} 
            </CardTitle>
        </CardContainer>
    )
}

export default Card
