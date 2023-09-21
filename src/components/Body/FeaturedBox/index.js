import './FeaturedBox.css';

const FeaturedBox = () => {
    return (
        <section class="featured-box" className="home">
                <div class="featured-text">
                    <div class="featured-text-card">
                        <span>Rafael Brum Corrêa</span>
                    </div>
                    <div class="featured-name">
                        <p>Eu sou <span class="typedText"></span></p>
                    </div>
                    <div class="featured-text-info">
                        <p>Desenvolvedor frontend experiente com paixão por criar sites visualmente impressionantes e fáceis de usar.</p>
                    </div>
                    <div class="featured-text-btn">
                        <button class="btn blue-btn">Contrate-me</button>
                        <button class="btn">Baixar Curriculo <i class="uil uil-file-alt"></i></button>
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
                        <img src="profile.png" alt="avatar"></img>
                    </div>
                </div>
                <div class="scroll-icon-box">
                    <a href="#about" class="scroll-btn">
                        <i class="uil uil-mouse-alt"></i>
                        <p>Descer Página</p>
                    </a>
                </div>

            </section> 
    )

}
export default FeaturedBox;
 
 