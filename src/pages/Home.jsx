import {FaLongArrowAltRight} from "react-icons/fa";

export  const Home = ( ) => {
    return (
        <main className = "hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">Empowering Businesses with us, On-Demand IT Talent</h1>
                    <p className="paragraph">At FreelnHub, From websites to web apps, We turn ideas into clean, working code with a focus on performance and user experience. We’ve got the right talent for your project.</p>
                    <button className="btn btn-darken btn-inline bg-white-box">Start Exploring <FaLongArrowAltRight/></button>
                </div>
                <div className="hero-image">
                    <img src="/images/webit.jpg" alt="IT Code" className="banner-image" />
                </div>
            </div>
        </main>
    )
};