import './Projects.css'
import Title from '../../Title/Title'
import Card from '../../Card/Card'
function Projects() {
    return (
        <div className="projects"  id="projects">
            <Title text='Projects'/>
            <div className="cards">
                <Card 
                    img="fs.png"
                    name='FireStarter (Archived due to lack of time)'
                    description='FireStarter is a free and open source Discord bot used to start, stop and manage options on your minecraft servers using Node.js'
                />
                <Card 
                    img="snippet.png"
                    name='This Portfolio'
                    description='This portfolio was created entirely from scratch in react in a few days.'
                />
                <Card 
                    img="github.png"
                    name='My Github'
                    description='You can visit my github to see the source code for all of my projects'
                />
            </div>
        </div>

    )
}
export default Projects