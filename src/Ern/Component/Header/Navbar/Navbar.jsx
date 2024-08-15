import style from './Navbar.module.scss';
import Logo from '../../../assets/лого.png';

const Navbar = () =>{
    return(
        <nav>
            <img src={Logo} alt=""/>
            <div className={style.Nav_Child}>
                <div><a href="#О_нас">О нас</a></div>
                <div><a href="#Услуги">Услуги</a></div>
                <div><a href="#Стоимость">Стоимость</a></div>
                <div><a href="#Блог">Блог</a></div>
                <div><a href="#Команда">Команда</a></div>
                <div><a href="#Контакты">Контакты</a></div>
            </div>
        </nav>
    )
}

export default Navbar;