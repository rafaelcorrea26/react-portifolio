import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div class="top-footer">
                <p>Rafael Brum Corrêa.</p>
            </div>
            <div class="middle-footer">
                <ul class="footer-menu">
                    <li class="footer_menu_list">
                        <a href="#home">Home</a>
                    </li>
                    <li class="footer_menu_list">
                        <a href="#about">Sobre Mim</a>
                    </li>
                    <li class="footer_menu_list">
                        <a href="#projects">Projetos</a>
                    </li>
                    <li class="footer_menu_list">
                        <a href="#contact">Contato</a>
                    </li>
                </ul>
            </div>
            <div class="footer-social-icons">
                <div class="icon"><i class="uil uil-instagram"></i></div>
                <div class="icon"><i class="uil uil-linkedin-alt"></i></div>
                <div class="icon"><i class="uil uil-twitter"></i></div>
                <div class="icon"><i class="uil uil-github-alt"></i></div>
            </div>
            <div class="bottom-footer">
                <p>Copyright &copy; 
                    <a href="#home">Rafael Brum Corrêa</a> - Direitos reservados.
                </p>
            </div>
        </footer>
    )

}
export default Footer;
