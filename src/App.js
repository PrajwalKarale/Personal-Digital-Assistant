import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
import Typewriter from 'typewriter-effect';

// console.log(AlexaImage);
// console.log(SiriImage);
// console.log(CortanaImage);

function App() {
    return (
        <div>
            <section class="hero is-primary">
            <div class="hero-body">
                <p class="title">
                        <Typewriter
                        onInit={(typewriter) => {
                        typewriter
                            .typeString("PERSONAL DIGITAL ASSISTANTS")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("WELCOMES YOU!!")
                            .start();
                    }}
                    />
                </p>
            </div>
            </section>
            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard title = "Alexa" handle = "@alexa99" image = {AlexaImage} />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard title = "Cortana" handle = "@cortana99"  image = { CortanaImage } />

                        </div>
                        <div className='column is-4'>
                            <ProfileCard title = "Siri" handle = "@Siri99" image = { SiriImage } />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;