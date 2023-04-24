import AboutContent from '../../Content/AboutContent'
import Title from '../../Title/Title'
function About(){
    return(
        <div className="about" id="about">
            <Title text="About Me"/>
            <AboutContent/>
        </div>
    )
}
export default About