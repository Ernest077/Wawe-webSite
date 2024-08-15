import TextP from '../../../UI/TextP/TextP';
import H1 from '../../../UI/H1/H1';
import style from './Main_2.module.scss'
import ProgressBar from '../../../UI/ProgressBar/ProgressBar';
import IMG1 from '../../../assets/Group1.png';
import IMG2 from '../../../assets/Group2.png';
import IMG3 from '../../../assets/Group3.png';

const Main_2 = () => {
    return (
        <main className={style.Main_2} id='Услуги'>
            <H1 h1={'В  ШКОЛЕ ВЫ ПОЛУЧИТЕ'} />
            <div className={style.Main_2_Child1}>
                <div>
                    <div className={style.Main_2_Child1Last}>
                        <img src={IMG1} alt="" />
                        <h1>ПРОЖИВАНИЕ</h1>
                    </div>
                    <TextP p={'Наша школа серфинга находится в 100 м от океанского побережья. К услугам гостей открытый бассейн и бесплатный Wi-Fi. Из верхней террасы открывается вид на океан. Расстояние до центра города 15 мин. '} />
                </div>
                <div>
                    <div className={style.Main_2_Child1Last}>
                        <img src={IMG2} alt="" />
                        <h1>ПЕРЕЛЕТ И
                            СТРАХОВКУ</h1>
                    </div>
                    <TextP p={'Все участники программы застрахованы страховой компанией Allianz. Перелет из Тенерифе до острова Лансароте  и обратно входит в стоимость программы'} />
                </div>
                <div>
                    <div className={style.Main_2_Child1Last}>
                        <img src={IMG3} alt="" />
                        <h1>ОБУЧЕНИЕ И
                            ЭКИПИРОВКУ</h1>
                    </div>
                    <TextP p={'Все оборудование и экипировка известных производителей и предоставляется на весь курс программы. Тренировочный процесс начинается с определения вашего уровня катания'} />
                </div>
            </div>
            <div className={style.Main_2_Child2}>
                <div className={style.Main_2_Child2_1}>
                    <ProgressBar label={'Приехали второй раз'} percentage={85} />
                    <ProgressBar label={'Научились кататься'} percentage={95} />
                    <ProgressBar label={'Довольных клиентов'} percentage={99} />
                </div>
                <div className={style.Main_2_Child2_2}>
                    <TextP p={'Огромным преимуществом нашей школы является собственная методика обучения. Мы разработали собственный стиль обучения серфингу, который позволяет новичкам максимально быстро встать на доску. '} />
                    <TextP p={'Именно наша методика и наши преподаватели позволили нам пройти аттестацию Федерации серфинга Канарских островов - FEDERACIÓN CANARIA DE SURF. Это означает, что наша школа соответствует всем мировым стандартам. Переаттестация производится ежегодно и это позволяет нам всегда стремиться к улучшению обучения.'} />
                </div>
            </div>
        </main >
    )
}

export default Main_2;