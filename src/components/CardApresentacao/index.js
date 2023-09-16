import './CardApresentacao.css';

const CardApresentacao = () => {
    return (
        <section class="featured-box" id="home">
                <div class="featured-text">
                    <div class="featured-text-card">
                        <span>John Doe</span>
                    </div>
                    <div class="featured-name">
                        <p>I'm <span class="typedText"></span></p>
                    </div>
                    <div class="featured-text-info">
                        <p>Experienced frontend developer with a passion for creating visually stunning
                            and user-friendly websites.
                        </p>
                    </div>
                    <div class="featured-text-btn">
                        <button class="btn blue-btn">Hire Me</button>
                        <button class="btn">Download CV <i class="uil uil-file-alt"></i></button>
                    </div>
                    <div class="social_icons">
                        <div class="icon"><i class="uil uil-instagram"></i></div>
                        <div class="icon"><i class="uil uil-linkedin-alt"></i></div>
                        <div class="icon"><i class="uil uil-twitter"></i></div>
                        <div class="icon"><i class="uil uil-github-alt"></i></div>
                    </div>
                </div>
                <div class="featured-image">
                    <div class="image">
                        <img src="./profile.png" alt="avatar"></img>
                    </div>
                </div>
                <div class="scroll-icon-box">
                    <a href="#about" class="scroll-btn">
                        <i class="uil uil-mouse-alt"></i>
                        <p>Scroll Down</p>
                    </a>
                </div>

            </section> 
    )

}
export default CardApresentacao;
 
 