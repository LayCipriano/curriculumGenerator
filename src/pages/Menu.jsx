import logo from '../assets/logo.png'
import dadosPessoais from '../assets/dadosPessoais.png'
import educacao from '../assets/educacao.png'
import xProfissional from '../assets/expProfissionais.png'
import goals from '../assets/metas.png'
import skills from '../assets/skills.png'
import './Menu.css'
import { Link } from 'react-router-dom'


function Menu() {
    return (

        <div className="menu">
            <div className="header">
                 <img className='logotipo' src={logo} alt='Logotipo Curriculum Generator'></img>
                 <h1 className='title'>Free Curriculum<br/> Generator</h1>
            </div>

            <div className="menuItems">
                <div className="dadosPessoais">
                <Link to={'/'}>
                    <img className='iconMenu' src={dadosPessoais} alt="ícone do menu, dados pessoais" />
                    <span>Dados Pessoais</span>
                </Link>
                </div>

                <div className="educacao">
                    <Link to={'/Educacao'}>
                        <img className='iconMenu' src={educacao} alt="ícone do menu, educação" />
                        <span>Educação</span>
                    </Link>
                </div>

                <div className="xProfissional">
                    <Link to={'/xProfissionais'}>
                        <img className='iconMenu' src={xProfissional} alt="ícone do menu, experiências profissionais" />
                        <span>Experiências Profissionais</span>
                    </Link>
                </div>

                <div className="goals">
                    <Link to={'/MetasProfissionais'}>
                        <img className='iconMenu' src={goals} alt="ícone do menu, metas profissionais" />
                        <span>Metas Profissionais</span>
                    </Link>
                </div>

                <div className="skills">
                    <Link to={'/Habilidades'}>
                        <img className='iconMenu' src={skills} alt="ícone do menu, habilidades" />
                        <span>Habilidades</span>
                    </Link>
                </div>
            </div>
        </div>
)}

export default Menu;