import React from 'react'
import map from "../Img/Map.png"
import T1 from '../Img/T1.png'
import T2 from '../Img/T2.png'
export const GoogleMap = () => {
    return (
        <>
            <div className='letter' style={{ gap: "10px" }}>
            <h2 style={{textAlign: "center",fontSize: "1rem", padding: "0", margin:"0"}}>សូមចុចលើផែនទី ដើម្បីបង្ហាញទីតាំងនៅក្នុង<br/> កម្មវិធី Google Map</h2>
            <a className='mapping' href="https://www.google.com/maps/place/11%C2%B003'21.0%22N+105%C2%B025'10.8%22E/@11.055842,105.4147964,1009m/data=!3m2!1e3!4b1!4m7!1m2!2m1!1sgoogle+map!3m3!8m2!3d11.055842!4d105.419662!5m1!1e1?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D" target='new'>'
            <img src={map} alt='' width={"600px"}/>
            
            </a>
                
            
                <div className='imageletter'>

                    <img className='imgT1' src={T1} alt='' />

                    <img className='imgT2' src={T2} alt='' />
                </div>
            </div>
            {/* <div className='letterform'>    
                
            </div>
            <img className='imgT1' src={T1} alt='' />
            <img className='imgT2' src={T2} alt='' style={{height: "150px"}}/> */}
        </>
    )
}
