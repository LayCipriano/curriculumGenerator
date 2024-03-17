import logo from '../assets/logo.png'
import dadosPessoais from '../assets/dadosPessoais.png'
import educacao from '../assets/educacao.png'
import xProfissional from '../assets/expProfissionais.png'
import goals from '../assets/metas.png'
import skills from '../assets/skills.png'
import './Menu.css'


function Menu() {
    return (

        <div className="menu">
            <div className="header">
                <img className='logotipo' src={logo} alt='Logotipo Curriculum Generator'></img>
                <h1 className='title'>Free Curriculum<br/> Generator</h1>
            </div>

            <div className="menuItems">
                <div className="dadosPessoais">
                    <img className='iconMenu' src={dadosPessoais} alt="ícone do menu, dados pessoais" />
                    <span>Dados Pessoais</span>
                </div>

                <div className="educacao">
                    <img className='iconMenu' src={educacao} alt="ícone do menu, educação" />
                    <span>Educação</span>
                </div>

                <div className="xProfissional">
                    <img className='iconMenu' src={xProfissional} alt="ícone do menu, experiências profissionais" />
                    <span>Experiências Profissionais</span>
                </div>

                <div className="goals">
                    <img className='iconMenu' src={goals} alt="ícone do menu, metas profissionais" />
                    <span>Metas Profissionais</span>
                </div>

                <div className="skills">
                    <img className='iconMenu' src={skills} alt="ícone do menu, habilidades" />
                    <span>Habilidades</span>
                </div>
            </div>
        </div>
)}

export default Menu;