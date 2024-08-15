import style from './Header.module.scss';
import Navbar from './Navbar/Navbar';

const Header = () =>{
    return(
        <header className={style.Header}>
            <Navbar/>
            <div className={style.Head_TextDiv}>
                <span>WAWE</span>
                <p>Школа серфинга на канарских Островах</p>
            </div>
        </header>
    )
}

export default Header;