import Menu from "./Menu.jsx";
import './DadosPessoais.css';
import './Educacao.css';
import './Download.css';

function Download() {
    return (
        <main className='main'>
            <Menu/>

            <div className="data">
                <div className="titleGeral">
                    <h1>Download do seu Currículo</h1>
                    <h3>Pressione CTRL + P para imprimir ou salvar como PDF</h3>
                </div>

                <div className="form">

                    <p>O PDF para download ficará aqui...</p>

                    <div className="btn">
                        <button className='btnForm btnProximo'>Download</button>
                    </div>
                </div>
            </div>           
            
        </main>
    )}

export default Download;