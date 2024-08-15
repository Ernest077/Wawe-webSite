import H1 from '../../../UI/H1/H1';
import TextP from '../../../UI/TextP/TextP';
import style from './Main_3.module.scss';

const Main_3 = () =>{
    return(
        <main className={style.Main_3} id='Стоимость'>
            <div className={style.Main_3_Child1}>
                <H1 h1={'ПОКОРЯЙ ВЕРШИНЫ'}/>
                <TextP p={'Преподаватели нашей школы серфинга в числе лучших серферов на Канарских островах. Среди них - чемпион Европы по лонгборду, который с радостью поделится опытом как с новичками, так и более опытными серферами. Все члены преподавательского состава являются сертифицированными членами Федерации серфинга Канарских островов. Некоторые из них знают русский язык, что определенно позиционирует нас как русскую школу серфинга за границей!'}/>
                <TextP p={'Весь тренерский состав регулярно участвует в семинарах и курсах повышения квалификации, которые проводятся по всему миру различными известными серф-клубами и федерациями. Поэтому в нашей школе серфинга вы можете быть спокойны: вас обучают лучшие тренеры!'}/>
                <TextP p={'Методика обучения серфингу рассчитана как на новичков, на серферов среднего уровня, так и на серферов уровня ТОП. Тренеры находят подход к каждому, несмотря на то, что обучение серфингу в нашей школе производится в группах. Однако, мы предлагаем персональные уроки серфинга - только вы и тренер!'}/>
            </div>
            <div className={style.Main_3_Child2}>
                <img src="https://s3-alpha-sig.figma.com/img/0e75/4a7a/d9eed764ff4e7c7f45900657b827949f?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yb-~52Dxg3~cxaMzGbLsdceAOGM~DYheKe-dGl8dlzNrZmJLtb76Wk2ZKDBfZI5R3VFv-iZtO2VpLevlxpiT7VqEjxNaEVrLr5AdL-tyVn2~vAyY-vTmARFLrnTqHqVZVYGAniV8S3B6usOzxMC6xmOpfD5tdE13-jIbsLR2exYcuPQN~ii621CRdAmGiOly25BTm9fcbd~MqgzRiJ~peZtPPFc0sztqL4woHWnuo8lIwcFzZkFOBoDKI6Pj6sw5hiW04R3VAbBAE~YOjVNm~IiVARbg5rOymVX~F255uacflIee5~RTEK25YledR3kBfgWVVcb2QS4yiFOjjFl3Xg__" alt="" />
            </div>
        </main>
    )
}
export default Main_3;