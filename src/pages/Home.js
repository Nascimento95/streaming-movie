import { ContainerHome } from '../globalStyle/HomeStyle';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <ContainerHome>
      <div className="categories-movies">
        <div className="movie">
          <div className="hover"><Link to="/allmovies"><h2>Tous les film</h2></Link></div>
        </div>
        <div className="serie">
        <div className="hover"><h2>Toute les series</h2></div>
        </div>
      </div>
    </ContainerHome>
  );
};

export default Home;