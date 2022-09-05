import style from './cubesRow.module.css';
import SingleCube  from '../singleCube/singleCube';
const CubesRow = () => {
    const widthSize = window.innerWidth;
    const quantityHorizontal = (widthSize - 100) / 100 ;
    
    return(
        <>
        <div className={style.item} height={quantityHorizontal} >
            <SingleCube />
        </div>
        </>
    )
}

export default CubesRow;