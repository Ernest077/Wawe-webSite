import H1 from '../../../UI/H1/H1';
import style from './Main_4.module.scss'

const Main_4 = () =>{
    return(
        <main className={style.Main_4} id='Блог'>
            <H1 h1={'ГАЛЕРЕЯ'}/>
            <div className={style.Main_4_Child1}><button>ВСЕ</button><button>ТУРИСТЫ</button><button>ПРИРОДА</button><button>ПРОФИ</button></div>
            <div className={style.Main_4_Child2}>
                <div>
                    <img src="https://s3-alpha-sig.figma.com/img/8f0e/30b1/7f9bff41b75d97836217d35c52efb5f5?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gCPD~HbxzLRBmupIFd~31r64dE2nGF51cNLGrVSx5YkAxNFLFOwiBUraNV1SIwrp-05VhY8sWkwDEw8ZvXUhZv1DAewlZopsOOZXIfQqA94FEakSK4YZHhcvFgz2jivmuQQCI47bkkf~sonZpdhwnj0aov0j3WPTgyB4l7oOeZ4BF4It9uSlQ3LlWJwTYNKjPNw3iNGQkWfkhAPTR~HCj1RCSvTedH5l3oguodpmxnsLE~i0zf9oicPNVd3MXO66~ES7EVE7O30N-TyGrfSYQws2qrmqAyzoNSTja6t2OIMbZTN1XM7llGdKaGN9WgcrdXrm1z04BVR17Clc7l~quQ__" alt="" className={style.Main_4_Big_Img}/>
                    <img src="https://s3-alpha-sig.figma.com/img/2dd9/9c5f/10314761593115374cba45111a1f9d27?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kb0nmczjoI9X3O9it9GWpqgNaOVnImhQqkW3jfsIj2EX-kbOib3tSpTGil328GnbIWOrH3PwzPvYic85Rm0t~oOBjPErFs3kdjgtV-xcojDdo3KjZmr5t8hjGFDT2zi~mVhGnM~yB2qL3CDMYSrYIyNMsRkdB6XARI5ZqBpf2jtt-wC2KoXRyeBcsoMPeqe8n6yQ~7J~iNlTKTeUAo~uivFqYf~~xzEvf5koLyMTp8~OmPPkJaAwxp7Di8rnFtTLlcLbo-dcqkt7gSGzclXVVH1hfcD1wPzqi-rDd~gYnh1r1NDZsEjp2WLlaGip1GjrwlY036hn8j68vDB04rjirA__" alt="" />
                    <img src="https://s3-alpha-sig.figma.com/img/129f/dcfa/c84e1572ec3100218ca6d90f487bcef1?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CW~yYTlQWgM8NMQSfirYZE30PaQ2Y4tgKiZC6l8k-Tc9Zh7DwjUR7wTesbdo6VtnTU~fUvnE1znGTUbDOdTcUNO~XQjN52wkM5qfwR07Wm600EOaKWM~XtwMd1tW4oW4153zag7Ihzm8CXj2S4mefkgkj6O6HCcjDgis27imEF7PYEFRvvWHeGAHBnEtIhVXmzFOS2g8NZwl9IyJad6OqucaKKUaIxHnUyeKN7X1fk1-zQgf-dK3tFPDYAdIWb2399lbIkztSTA-K8CXUBxYdNFHU3WMLxvgDLvi9AH4mjGVqONFAZaSsQ~qJFbwn2iaa48d6zTBwSyA6TEpXhNviQ__" alt="" />
                </div>
                <div>
                    <img src="https://s3-alpha-sig.figma.com/img/9116/5c2a/2951374ffbe3c1df5c7183b96b508aa5?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gnqxUE6D6TwVKjxUShSZopG9Dr0pzWfzqY5khgAZozgnYIDQRM7HfqCQ~AlTEg~bg0VDzpbxqFDwnBZMG~F3EZs9Xa3KEl1MW1~bTc85ZyBR2vF3KNzO8BczNZogGNdGI775coPhJMWRhU0MN9SwFUCeB8lewuyVJxRGERm8cuTMXXhLulqE9bzt~i5ywk-0JG7ioN6MpRPJlzuIue-M769SICRng-tcIEXK67WCnM5FZEGL4zSMdJi42YMkSEyaKIhpgc4UutKBhx8Tesbm90gXgCCDL3zEhN5isHFyNzytx1-bmXc7zJaSgLDHPgh8OyNDvbiqXqs9i4XtnevbHw__" alt="" />
                    <img src="https://s3-alpha-sig.figma.com/img/7266/4acb/bc8fa7a4a34695be44f077b73b47eaec?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INJrh5DD1XFWHaP38jlrjXySBedWcyDxIskCR2eSRRxOri9A~OqyePLOUCdfwJS~T7bKiTIAbRlPhzh2ZcErAEQclFZ3ze1odLxCcpHtWSRvykZr49Ep9nQqT0mJzyB9jSrFH~ZCVqm4ef2rzD6kECq103CM9YYavfun5nN4Cb8zgk8PjeBGiFl2CiPBhmoMTfF1oyExZtPwhMDSbrzbO-75GLC9QvTtSZinJLVOPtpWgbCeLJR3xNwXjtQjEMBqjxbvZm1ILK1o2wFAkV37ujtMx4aarApwBRKtzy9txVLV6nIL3GqDu9gEDKZkMB7c6SulXc00RM9ADz22VP-mjw__" alt="" className={style.Main_4_Big_Img}/>
                </div>
            </div>
            <div className={style.Main_4_LastChild}>
            <button onClick={()=>{alert(`There are no more photos...`)}}>ПОКАЗАТЬ ЕЩЕ</button>
            </div>
        </main>
    )
}

export default Main_4;