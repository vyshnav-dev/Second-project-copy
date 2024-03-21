import Footer from '../../components/Footer';
import '../../css/about.css'

function About() {
  return (
    <>
    <div className='about'>

    </div>
    <div className="about1">
      <div className='new1'>
        <div style={{marginTop:'7rem'}}>
            <h1 className='tkk'>GREEN GLIDE</h1>
            <h3 style={{color:'white',}}>   Leading Sports
             Facility Booking & Management Platform</h3>
             </div>
             
      </div>



      <div className='stock1' style={{display:'flex'}}>
        <div className='b1'>
          <img src="https://www.playspots.in/wp-content/themes/playspots/assets/images/about-page/step1.png" alt="" />
        </div>
       <div className='new2'>
          <h2 style={{marginTop:'2rem',marginLeft:'1rem',color:'white'}}>Find Co Player</h2>
        </div>  

      </div>
        
        <div className='stock2'  style={{display:'flex'}}>
            <div className='new3'>
            <h2 style={{marginTop:'2rem',marginLeft:'38rem',color:'white'}}>Discover Venues</h2>
            </div>
            <div className='b2'>
            <img src="https://www.playspots.in/wp-content/themes/playspots/assets/images/about-page/step2.png" alt="" />
            </div>
        </div>
        


        <div className='stock3' style={{display:'flex'}}>
        <div className='b3'>
          <img src="https://www.playspots.in/wp-content/themes/playspots/assets/images/about-page/step3.png" alt="" />
        </div>
       <div className='new4'>
       <h2 style={{marginTop:'2rem',marginLeft:'1rem',color:'white'}}>Join Nearby Tournaments</h2>
        </div>  

      </div>
        
        <div className='stock4' style={{display:'flex'}}>
            <div className='new5'>
            <h2 style={{marginTop:'2rem',marginLeft:'42rem',color:'white'}}>Build Profile</h2>
            </div>
            <div className='b4'>
            <img src="https://www.playspots.in/wp-content/themes/playspots/assets/images/about-page/step4.png" alt="" />
            </div>
        </div>

        <div className='ablast'>
            <div className='ab1'>
            <img  src="https://w0.peakpx.com/wallpaper/630/203/HD-wallpaper-soccer-ball-game-balls-grass-stadium-football-thumbnail.jpg" alt="" />
              <h3 style={{color:'white',textAlign:'center'}}>Football</h3>
            </div>
            <div className='ab1'>
            <img  src="data:image/jpeg;base64,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" alt="" />
              <h3 style={{color:'white',textAlign:'center'}}>Cricket</h3>
            </div>
            <div className='ab1'>
            <img src="https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
              <h3 style={{color:'white',textAlign:'center'}}>Basketball</h3>
            </div>

            <div className='enddiv'>
                <h3>𝙊𝙪𝙧 𝙢𝙞𝙨𝙨𝙞𝙤𝙣 𝙞𝙨 𝙢𝙖𝙠𝙞𝙣𝙜 𝙞𝙩 𝙚𝙖𝙨𝙞𝙚𝙧 𝙛𝙤𝙧 𝙚𝙫𝙚𝙧𝙮𝙤𝙣𝙚 𝙩𝙤 𝙥𝙡𝙖𝙮 𝙨𝙥𝙤𝙧𝙩𝙨 𝙖𝙣𝙙 𝙞𝙣𝙘𝙧𝙚𝙖𝙨𝙞𝙣𝙜 𝙩𝙝𝙚 𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙞𝙤𝙣 𝙤𝙛 𝙛𝙖𝙘𝙞𝙡𝙞𝙩𝙞𝙚𝙨 𝙖𝙨 𝙖 𝙧𝙚𝙨𝙪𝙡𝙩. 𝙎𝙥𝙤𝙧𝙩𝙨 𝙥𝙡𝙖𝙮 𝙖 𝙥𝙞𝙫𝙤𝙩𝙖𝙡 𝙧𝙤𝙡𝙚 𝙞𝙣 𝙗𝙧𝙞𝙣𝙜𝙞𝙣𝙜 𝙥𝙚𝙤𝙥𝙡𝙚 𝙩𝙤𝙜𝙚𝙩𝙝𝙚𝙧, 𝙨𝙝𝙖𝙧𝙞𝙣𝙜 𝙢𝙤𝙢𝙚𝙣𝙩𝙨 𝙖𝙣𝙙 𝙚𝙣𝙝𝙖𝙣𝙘𝙞𝙣𝙜 𝙩𝙝𝙚 𝙬𝙚𝙡𝙡-𝙗𝙚𝙞𝙣𝙜 𝙖𝙧𝙚 𝙧𝙚𝙖𝙨𝙤𝙣𝙨 𝙩𝙝𝙖𝙩 𝙛𝙤𝙧𝙢 𝙩𝙝𝙚 𝙚𝙨𝙨𝙚𝙣𝙘𝙚 𝙤𝙛 𝙂𝙧𝙚𝙚𝙣 𝙂𝙡𝙞𝙙𝙚. 𝙊𝙪𝙧 𝙂𝙤𝙖𝙡 𝙞𝙨 𝙢𝙖𝙠𝙞𝙣𝙜 𝙩𝙝𝙚 𝙨𝙥𝙤𝙧𝙩𝙨 𝙨𝙞𝙢𝙥𝙡𝙚 #𝙇𝙚𝙩𝙏𝙝𝙚𝙒𝙤𝙧𝙡𝙙𝙋𝙡𝙖𝙮</h3>
            </div>
           
        </div>
        
        
    </div>
      <Footer/>
    </>
  );
}

export default About;
