import TrollFace from '../Images/TrollFace.jpg'
const Navbar=()=>{
    return(
        <nav>
            <img src={TrollFace} alt= "logo strane" className="logo--img"></img>
            <h1 className='title--h1'>Meme Generator</h1>
            <p className='title--p'>React Course - Project 3</p>
        </nav>
    )
}
export default Navbar;

