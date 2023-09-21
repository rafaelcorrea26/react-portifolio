import './ProjectBox.css';

const ProjectBox = () => {
    return (
        <section class="section" id="projects">
                <div class="top-header">
                    <h1>Projetos</h1>
                </div>
                <div class="project-container">
                    <div class="project-box">
                        <i class="uil uil-briefcase-alt"></i>
                        <h3>Completados</h3>
                        <label>+15 Projetos completos</label>
                    </div>
                    <div class="project-box">
                        <i class="uil uil-users-alt"></i>
                        <h3>Clientes</h3>
                        <label>+25 Clientes Felizes</label>
                    </div>
                    <div class="project-box">
                        <i class="uil uil-award"></i>
                        <h3>Experiência</h3>
                        <label>+7 Anos na área</label>
                    </div>
                </div>
            </section> 
    )

}
export default ProjectBox;
