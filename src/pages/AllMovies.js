import { useFetch } from '../utils/hooks/FetchApi';
import Card from '../components/Card/Card';
import { ContainerAllMovies } from '../globalStyle/HomeStyle';
import Pagination from '../components/header/pagination/Pagination';
import { useState } from 'react';

const AllMovies = () => {
    const [page, setPage] = useState(1)
    const AllMovies = useFetch(`https://api.themoviedb.org/3/movie/popular?api_key=5d1c9f4a2a00e22a4f0c1ac9f9aec7fc&language=en-US&page=${page}`)
    // console.log(AllMovies)
    return (
        <ContainerAllMovies>
            <h2>Découvrez tous nos Film</h2>
            <div className="card-movies">
                {AllMovies.isLoading === true ? <p>Chargement...</p>
                :
                AllMovies.data.results.map((movie, index) => 
                    <Card
                        key={index}
                        image= {movie.poster_path}
                        title= {movie.original_title}
                        id={movie.id}
                    />
                )} 
            </div>
            <Pagination
                state= {page}
                changeState= {setPage}
            />
        </ContainerAllMovies>
    )
}

export default AllMovies
