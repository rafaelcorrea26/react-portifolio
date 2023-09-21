import './AboutBox.css';

const AboutBox = () => {
    return (
        <section class="section" className="about">
                <div class="top-header">
                    <h1>Sobre mim</h1>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="about-info">
                            <h3>Minha introdução</h3>
                            <p>Sou bem versado em HTML, CSS e JavaScript e outras tecnologias de ponta
                                frameworks e bibliotecas, o que me permite implementar recursos interativos.
                            </p>
                            <div class="about-btn">
                                <button class="btn">Baixar Curriculo <i class="uil uil-import"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="skills-box">
                            <div class="skills-header">
                                <h3>Frontend</h3>
                            </div>
                            <div class="skills-list">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>React</span>
                                <span>Angular</span>
                            </div>
                        </div>
                        <div class="skills-box">
                            <div class="skills-header">
                                <h3>Backend</h3>
                            </div>
                            <div class="skills-list">
                                <span>Node.js</span>
                                <span>JAVA</span>
                                <span>Dart</span>
                                <span>Delphi</span>
                            </div>
                        </div>
                        <div class="skills-box">
                            <div class="skills-header">
                                <h3>Database</h3>
                            </div>
                            <div class="skills-list">
                                <span>MySQL</span>
                                <span>PostgreSQL</span>
                                <span>SqlServer</span>
                                <span>Oracle</span>
                                <span>Firebard</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )

}
export default AboutBox;