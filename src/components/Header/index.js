import './Header.css';

const Header = (props) => {
    return (
        <nav className="header">
            <div class="nav-logo">
                <p class="nav-name">Rafael</p>
                <span>.</span>
            </div>
            <div class="nav-menu" id="myNavMenu">
                <ul class="nav_menu_list">
                    <li class="nav_list">
                        <a href="#home" class="nav-link active-link">Home</a>
                        <div class="circle"></div>
                    </li>
                    <li class="nav_list">
                        <a href="#about" class="nav-link">Sobre Mim</a>
                        <div class="circle"></div>
                    </li>
                    <li class="nav_list">
                        <a href="#projects" class="nav-link">Projetos</a>
                        <div class="circle"></div>
                    </li>
                    <li class="nav_list">
                        <a href="#contact" class="nav-link">Contato</a>
                        <div class="circle"></div>
                    </li>
                </ul>
            </div>
            <div class="nav-button">
                <button class="btn">Baixar Curriculo <i class="uil uil-file-alt"></i></button>
            </div>
            <div class="nav-menu-btn">
                <i class="uil uil-bars" onclick="myMenuFunction()"></i>
            </div>
        </nav>
    )

}
export default Header;







