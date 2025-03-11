import '../footer/Footer.css'
import nnpc from "../assestfolder/nnpc-logo.77c29e8.png"
import arrow from "../assestfolder/arrow-white.564516c.svg"
 import active from "../assestfolder/download (4).svg"
 import youtube from "../assestfolder/download (3).svg"
 import facebook from "../assestfolder/download (2).svg"
 import twitter from "../assestfolder/download (1).svg"
 import instagram from "../assestfolder/instagram-icon.3c77e4e.svg"
 import linkedin from "../assestfolder/linkedin-icon.896a563.svg"
 import thread from "../assestfolder/threads-icon.cf618b3.svg"
function Footer() {

return(
   <>
    <div className='Footer'>
        <div className='page1'>
            <h3 className='upper'><img src={nnpc} alt="" className='img01' /> Energy for Today, <br />Energy for Tomorrow</h3>
            <div className='card'>
            <div className='header'>
                <h3>BENTROIL</h3>
            </div>
            <div className='Number'>
                <h2>$65.98</h2>
                <h5><img src={active} alt="" />+0.75</h5>
                <h5><img src={active} alt="" />+3.29 %</h5>
            </div>
            </div>
            <p>© 2025 NNPC Limited.</p>
        </div>
       <div className='display'>
        <div className='head'>
            <h3>Never miss out on what we’re up to</h3>
            <h3 className='proper'>What’s your email?<img src={arrow} alt="" /> </h3>
        </div>
       <div className='folders'>
        <div className='page2'>
            <h3>NNPC</h3>
            <div className='nnpcfolder'>
                <a href="">Who we are</a>
                <a href="">Investors</a>
                <a href="">Contact</a>
                <a href="">Term of use</a>
                <a href="">Privacy Policy</a>
                <a href="">Documents</a>
                <a href="">Careers</a>
            </div>
        </div>
        <div className='page3'>
            <h3>SERVICES</h3>
         <div className='Holder'>
         <div className='serviceholder1'>
                <a href="">Upstream</a>
                <a href="">Gas & Power</a>
                <a href="">New Enegry</a>
            </div>
            <div className='serviceholder1'>
                <a href="">Downstream</a>
                <a href="">Non-Energy</a>
            </div>
         </div>
        </div>
        <div className='page4'>
            <h3>SOCIAL MEDIA</h3>
            <div className='socialfolder'>
                <a href=""><img src={twitter} alt="" />X</a>
                <a href=""><img src={facebook} alt="" />Facebook</a>
                <a href=""><img src={instagram} alt="" />Instagram</a>
                <a href=""><img src={linkedin} alt="" />Linkedin</a>
                <a href=""><img src={youtube} alt="" className='youtube'/>Youtube</a>
                <a href=""><img src={thread} alt="" />Threads</a>
            </div>
        </div>
        </div>
       </div>
    </div>
   </>
 )
};




export default Footer