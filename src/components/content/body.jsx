import AboutMe from "./components/about-me";
import ContactMe from "./components/contact-me";
import Projects from "./components/projects";

function Body(){
    return(
    <div>
        <AboutMe/>
        <Projects/>
        <ContactMe/>
    </div>
    )
}

export default Body;