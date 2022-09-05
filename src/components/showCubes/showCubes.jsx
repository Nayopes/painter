
import CubesRow from '../cubesRow/cubesRow';

const ShowCubes = () => {
    const widthSize = window.innerWidth;
    const heightSize = window.innerHeight;
    const quantityHorizontal = (widthSize - 100) / 100 ;

    const vertical = (heightSize - widthSize/100 ) / quantityHorizontal;

    const vert = [];

    for(let i =0; i<vertical; i++){
        vert.push(i);
    }

    const lines = vert.map((item, index) => (
        <CubesRow key={index} id={item}/>
    ))
    return(
        <>
        {lines}
        </>
    )
}

export default ShowCubes;