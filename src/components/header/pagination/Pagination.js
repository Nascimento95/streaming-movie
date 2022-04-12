import { ContainerPagination } from './PaginationStyle';
import{MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import { useRef } from 'react';

function Pagination({state, changeState}) {
    
    const ref = useRef([])

    const changePage = (state, changeState, refClick) => {
            if(ref.current[0] === refClick){
                changeState(state - 1)
            }
            if(ref.current[1] === refClick){
                changeState(state + 1)
            }
    }
    const addRef = (element) => {
        // console.log(element)
        if (element && !ref.current.includes(element)) {
            ref.current.push(element)
        }
    }
    
    return (
        <ContainerPagination>
            <div className="fleche-gauche" ref={addRef} onClick={() =>changePage(state,changeState,ref.current[0])}><MdKeyboardArrowLeft/></div>
            <div className="page1" ref={addRef}>1</div>
            <div className="page1">2</div>
            <div className="page1">3</div>
            <div className="page1">4</div>
            <div className="page1">5</div>
            <div className="page1">6</div>
            <div className="page1">7</div>
            <div className="page1">8</div>
            <div className="page1">9</div>
            <div className="page1">10</div>
            <div ref={addRef} className="fleche-droite" onClick={() =>changePage(state, changeState, ref.current[1])}><MdKeyboardArrowRight/></div>
        </ContainerPagination>
    )
}

export default Pagination
