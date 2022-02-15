import React, { useEffect, useState } from 'react';
import instagramLogo from '../assets/assets/owner/instagram.png';
import twitterLogo from '../assets/assets/owner/twitter.png';
import moreIcon from '../assets/assets/owner/more.png';
import './main.css';


const Main = ({selectedPunk, punkListData}) => {
    const [activePunk,setActivePunk] =useState(punkListData[0])


    useEffect(()=>{
        setActivePunk(punkListData[selectedPunk])
    },[punkListData,selectedPunk])
   
  return (
  <div className='main'>
      <div className='mainContaner' >
          <div className="punkHighLight">
              <div className="punkContaner">
                  <img className='selectedPunk' src={activePunk.image_original_url} />
              </div>    
          </div>
          <div className="punkDetails" style={{color:'#fff'}}>
                <div className="title">
                    {activePunk.name}
                    <span className='itemNumber'>.#{activePunk.token_id}</span>
                </div>            
               
                <div className="owner">
                    <div className="ownerimage">
                        <img src={activePunk.owner.profile_img_url} alt="" />
                    </div>
                    <div className="ownerDetails">
                        <div className="ownername">
                            <div>{activePunk.owner.address}</div>
                            <div className="ownerhandel">@deepak</div>  
                        </div>
                        <div className="links">
                            <div className="ownerLink">
                                <img src={instagramLogo} alt="instagram" />
                            </div>
                            <div className="ownerLink">
                                <img src={twitterLogo} alt="twitter" />
                            </div>
                            <div className="ownerLink">
                                <img src={moreIcon} alt="more" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
      </div>

  </div>
  );
};

export default Main;
