import './Rodape.css';

const Rodape = () => {
    return (
        <footer>
            <div class="top-footer">
                <p>John Doe .</p>
            </div>
            <div class="middle-footer">
                <ul class="footer-menu">
                    <li class="footer_menu_list">
                        <a href="#home">Home</a>
                    </li>
                    <li class="footer_menu_list">
                        <a href="#about">About</a>
                    </li>
                    <li class="footer_menu_list">
                        <a href="#projects">Projects</a>
                    </li>
                    <li class="footer_menu_list">
                        <a href="#contact">Contact</a>
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
                    <a href="#home">John Doe</a> - All rights reserved
                </p>
            </div>
        </footer>
    )

}
export default Rodape;
