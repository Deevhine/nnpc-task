 import '../header/Header.css'
 import nnpc from "../assestfolder/nnpc-logo.77c29e8.png"
 import arrow from "../assestfolder/arrow-white.564516c.svg"
 function Header() {

return(
    <>
     <div className="NavBar">
         <img src={nnpc} alt="" className='img1' />
         <div className="Menu">
             <a href="">Who we are</a>
             <a href="">Investors</a>
             <a href="">Sustainability</a>
             <a href="">Our Businesses</a>
             <a href="">Insights</a>
             <div className="ButtonHolder">
         <button className='button1'>CONTACT US</button>
         <button className='button2'> <img src={arrow} className='img2' alt="" /> </button> 
         </div>
         </div>
     </div>
    </>
  )
 };

 


 export default Header