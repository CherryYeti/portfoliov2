import './Hero.css';

function Hero(){
    return(
        <div className="hero" id="hero">
            <div className="flexcontent">
                <img src="fs.png" alt="Logo" />
            </div>
            <div className="flexcontent">
                <h1>Hello, I'm</h1>
                <h1 className="herotitle">CherryYeti</h1>
            </div>
        </div>
    )
}
export default Hero