import { Figure } from "react-bootstrap";
import profile_picture from '../Images/profile_picture.jpg';
import '../styles.css';

export default function About() {

    return(
        <div className="container-fluid about-container">
            <Figure>
                <Figure.Image width={171} height={256.5} alt="171x256.5" src={profile_picture} />
            </Figure>
            <div className="container">
                <h2>About</h2>
                <br/>
                <p>
                    Hi, My name is Charlie Ellenbecker. I am currently a senior Computer Science major at 
                    UW-Milwaukee. I created this website so that I can display some of the projects that 
                    I am working on outside of school. I am interested in Software Engineering and web 
                    development. Recently have found React JS to be a lot of fun.
                </p>
            </div>
        </div>
    );
}