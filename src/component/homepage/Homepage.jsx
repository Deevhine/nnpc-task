import '../homepage/Homepage.css'
import arrow from "../assestfolder/button-icon.ecbc15f.svg"
import why from "../assestfolder/why-nnpc.ba1fe63.svg"
import gas from "../assestfolder/barrels-icon.84c5aba.svg"
import people from "../assestfolder/workers-icon.533c3aa.svg"
import nnpc from "../assestfolder/nnpc-logo.77c29e8.png"
import greenarrow from "../assestfolder/arrow-green.50b8b0b.svg"
import whitearrow from "../assestfolder/arrow-white.564516c.svg"
function Homepage() {

return(
   <>
        <div className='card1'>
            <div className='text'>
                <h1>Repositioned <br />for customer focus</h1>
                <p>We maintain our market<br />leadership in innovation and<br />supplying while delivering value<br />to our shareholders</p>
            </div>
            <div className='buttonHolder'>
            <button className='button01'>CONTACT US</button>
            <button className='button02'> <img src={arrow} className='img2' alt="" /> </button> 
            </div>
        </div>
        <div className='card2'>
            <div className='cardholder'>
               <div>
               <img src={why} alt="" className='why' />
               </div>
                <div className='textholder'>
                    <p>WHY NNPC WAS FOUNDED</p>
                    <h1>To <span>harness the possibilities of <br />oil and gas,</span> to address energy <br />demand and drive the national <br />economy.</h1>
                </div>
            </div>
            <div className='cardholder1'>
                <div className='gas'>
                    <img src={gas} alt="" />
                    <p className='phar'>No <span className='span1'>1</span></p>
                    <h4>Oil producer and supplier in Africa</h4>
                </div>
                <div className='oil'>
                    <img src={people} alt="" />
                    <span className='span1'>7000+</span>
                    <h4>Total workforce</h4>
                </div>
            </div>
        </div>
        <div className='card3'>
            <p>Over</p>
            <h1>47</h1>
            <p>Years of Exprerience</p>
            <p>We have come a long way as the energy <br />market leader for Africa’s largest <br />economy</p>
        </div>
        <div className='card4'>
            <div className='box1'>
                <h1>Never miss what we are up to</h1>
            </div>
            <div className='box2'>
                <div className='news'>
                    <div className='new'>
                        <img src={nnpc} alt="" />
                    </div>
                    <div className='time'>
                        <button>NEWS</button>
                        <p>MARCH 7, 2025</p>
                    </div>
                </div>
                <div className='cast'>
                    <div className='cast1'>
                        <p>FEBRUARY 25, 2025</p>
                        <h3>NIES 2025: NNPC Ltd Leading the Charge Towards Africa’s Gas Infrastructure Expansion---Kyari ...Laud...</h3>
                        <div className='files'>
                            <p>READ POST</p>
                            <img src={greenarrow} alt="" />
                        </div>
                    </div>
                    <div className='cast1'>
                        <p>FEBRUARY 18, 2025</p>
                        <h3>Talks on Fuel Quality Just Drama, Bad Marketing Antics, Says Kyari ...Insists NNPC Ltd Didn’t Import...</h3>
                        <div className='files'>
                            <p>READ POST</p>
                            <img src={greenarrow} alt="" />
                        </div>
                    </div>
                </div>
                <div className='cast'>
                    <div className='cast1'>
                        <p>FEBRUARY 25, 2025</p>
                        <h3>NNPC Shipping, Stena Bulk, Caverton Launch New Joint Venture … Partnership To Boost Nigeria, Africa...</h3>
                        <div className='files'>
                            <p>READ POST</p>
                            <img src={greenarrow} alt="" />
                        </div>
                    </div>
                    <div className='cast2'>
                        <p>FEBRUARY 15, 2025</p>
                        <h3>NNPC Refutes Misleading Claims in Viral Video</h3>
                        <div className='files'>
                            <p>READ POST</p>
                            <img src={greenarrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='box3'>
                <h3>NNPC Ltd Expands Domestic Gas Supply <br />Footprint ...Signs Landmark Agreement <br />with Ssonic Petroleum Ltd to Supply <br />80mmscf/d</h3>
                     <div className="ButtonHolders">
                       <button className='button001'><a href="">VIEW ALL NEWS</a></button>
                       <button className='button002'> <img src={whitearrow} className='img002' alt="" /> </button> 
                    </div>
            </div>
            <div className='box4'>
                <div className='textfolder'>
                    <h3>For investor <br />opportunities in NNPC <br />Ltd.</h3>
                    <a href="">GET STARTED <img src={greenarrow} alt="" /></a>
                </div>
                <div className='imagefolder'></div>
            </div>
        </div>
   </>
 )
};



export default Homepage