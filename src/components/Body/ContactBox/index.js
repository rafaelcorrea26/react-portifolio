import './ContactBox.css';

const ContactBox = () => {
    return (
        <section class="section" className="contact">
                <div class="top-header">
                    <h1>Entrar em contato</h1>
                    <span>Você tem algum projeto, contate me.</span>
                </div>
                <div class="row">
                  <div class="col">
                        <div class="contact-info">
                            <h2>Fale comigo: <i class="uil uil-corner-right-down"></i></h2>
                            <p><i class="uil uil-envelope"></i> Email: rafael.fs.camaqua@gmail.com</p>
                            <p><i class="uil uil-phone"></i> +51 984097595</p>
                        </div>
                    </div>                    
                    <div class="col">
                        <div class="form-control">
                            <div class="form-inputs">
                                <input type="text" class="input-field" placeholder="Nome"></input>
                                <input type="text" class="input-field" placeholder="Email"></input>
                            </div>
                            <div class="text-area">
                                <textarea placeholder="Mensagem"></textarea>
                            </div>
                            <div class="form-button">
                                <button class="btn">Enviar <i class="uil uil-message"></i></button>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
    )

}
export default ContactBox;