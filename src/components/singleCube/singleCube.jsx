import style from './singleCube.module.css';
const SingleCube = () => {
    const widthSize = window.innerWidth;
    const quantityHorizontal = (widthSize - 100) / 100 ;
    const divs = [];
    for(let i=0; i<100; i++){
        divs.push(i);
    }
    const paint = (e) => {
        if(e.target.className.includes('colorful')){
            e.target.className = e.target.className.replace('colorful' , '');
        }else{
            e.target.className += ' colorful';
        }
    }
    const item = divs.map((item, index) => (
        <div key={index} className={style.item1} width={quantityHorizontal + 'px'} height={quantityHorizontal + 'px'}  onClick={(e)=>paint(e)}  ></div>
    ))
    return(
        <>
            {item}
        </>
    )
}
export default SingleCube;