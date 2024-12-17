import React from 'react'

import T1 from '../Img/T1.png'
import T2 from '../Img/T2.png'
import img01 from "../Img/AF1I1826.jpg"
import img02 from "../Img/AF1I2147.jpg"
import img03 from "../Img/AF1I2311.jpg"
import { Link } from 'react-router-dom'
export const Location = () => {
    return (
        <>
            <div className='letter' style={{ gap: "10px" }}>

                <Link to={'/Planwedding'} className='Openletter'>សូមចុចទីនេះដើម្បីមើលកម្មវិធី</Link>
                <img src={img01} alt="" className='myimg01' />
                <img src={img03} alt="" className='myimg02' />
                <img src={img02} alt="" className='myimg03' />
                <div className='imageletter'>

                    <img className='imgT1' src={T1} alt='' />

                    <img className='imgT2' src={T2} alt='' />
                </div>
            </div>
            {/* <div className='letterform'>
            <h2 style={{ textAlign: "center", fontFamily: "Bokor", padding: "10px 30px 0px 30px" }}>ពិសាភោជនាហារ ដែលនឹងប្រព្រឹត្តិទៅ <br /><span style={{ fontFamily: "Moul" }}>នៅថ្ងៃ សៅរ៍ ១៣ កើត ខែ បុស្ស ឆ្នាំរោង ឆស័ក ព.ស. ២៥៦៨ <br />ត្រូវនឹងថ្ងៃទី ១១ ខែមករា ឆ្នាំ ២០២៥ វេលាម៉ោង ៤ៈ០០រសៀល <br />នៅគេហដ្ឋានខាងស្រី <br />ភូមិ ខ្លាខាំ ឃុំ សេនារាជឧត្តម ស្រុក ព្រះស្ដេច ខេត្ត ព្រៃវែង</span><br /> 
            <Link to={'/Planwedding'}>ចុចទីនេះ ដើម្បីមើលកម្មវិធីអាពាហ៍ពិពាហ៍</Link>
            </h2> */}
            {/* <div style={{ width: "610px", display: "flex", justifyContent: "center" , zIndex: "99"}}>
                    <a ><img src={map} alt='' height={"300px"} /></a>
                </div> */}
            {/* <h2 className='Openletter' style={{ textAlign: "center", fontFamily: "Bokor", padding: "10px 30px 0px 30px" }}>សូមចុចលើផែនទី ដើម្បីចូលទៅក្នុង Google Map</h2> */}
            {/* </div>

            <img className='imgT1' src={T1} alt='' />
            <img className='imgT2' src={T2} alt='' style={{zIndex: "99",height: "100px"}} />
*/}

        </>

    )
}
