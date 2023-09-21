import './Body.css';
import AboutBox from './AboutBox';
import ContactBox from './ContactBox';
import FeaturedBox from './FeaturedBox';
import ProjectBox from './ProjectBox';

const Body = () => {
    return (
        <main class="wrapper">
            <FeaturedBox />
            <div className='body-app'>
                <AboutBox />
                <ProjectBox />
                <ContactBox />
            </div>
        </main>
    )

}
export default Body;