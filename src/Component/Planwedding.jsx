import React from 'react'
import T1 from '../Img/T1.png'
import T2 from '../Img/T2.png'
import { Link } from 'react-router-dom'
export const Planwedding = () => {
    return (
        <>
            <div className='letter' style={{ gap: "10px" }}>
                <h2 style={{ fontFamily: "Bokor", padding: "0px 30px 0px 30px", fontSize:"1rem" }}>កម្មវិធីថ្ងៃទី០១ ថ្ងៃសុក្រ ទី១០ ខែមករា ឆ្នាំ ២០២៥</h2>
                <ul>
                    <li>ម៉ោង ០២ៈ០០ រសៀល     : ពិធីសែនក្រុងពាលី</li>
                    <li>ម៉ោង ០៣ៈ០០ រសៀល     : ពិធីសូត្រមន្ដចម្រើនព្រះបវិត្ត</li>
                    <li>ម៉ោង ០៤ៈ០០ រសៀល : ពិធីជាវខាន់ស្លា</li>
                    <li>ម៉ោង ០៥ៈ០០ រសៀល : អញ្ជើញភ្ញៀវពិសាអាហារពេលល្ងាច</li>
                </ul>
                <h2 style={{ fontFamily: "Bokor", padding: "0px 30px 0px 30px", fontSize:"1rem"  }}>កម្មវិធីថ្ងៃទី០២ ថ្ងៃសៅរ៍ ទី១១ ខែមករា ឆ្នាំ ២០២៥</h2>
                <ul>
                    <li>ម៉ោង ០៦ៈ៣០ ព្រឹក : ជួបជុំភ្ញៀវកិត្តិយស ដើម្បីរៀបចំហែជំនូន</li>
                    <li>ម៉ោង ០៧ៈ០០ ព្រឹក  : ពិធីហែកំណត់ (ជំនូន) ពិសាអាហារពេលព្រឹក</li>
                    <li>ម៉ោង ០៧ៈ៣០ ព្រឹក  : ចៅមហា និងលោកមេបា និយាយជើងការ</li>
                    <li>ម៉ោង ០៨ៈ០០ ព្រឹក  : ពិធីបំពាក់ចិញ្ជៀន</li>
                    <li>ម៉ោង ០៩ៈ០០ ព្រឹក  : ពិធីកាត់សក់បង្កក់សិរី</li>
                    <li>ម៉ោង ១០ៈ០០ ព្រឹក  : ពិធីសំពះផ្ទឹម សែនចងដៃ ព្រះថោងតោងស្បៃ</li>
                    <li>ម៉ោង ១១ៈ០០ ព្រឹក  : អញ្ជើញភ្ញៀវពិសាអាហារពេលថ្ងៃ</li>
                    <li>ម៉ោង ០៤ៈ០០ ព្រឹក  : អញ្ជើញភ្ញៀវពិសាភោជនាហារ</li>

                </ul>
                <Link to={'/GoogleMap'} className='Openletter'>សូមចុចទីនេះដើម្បីមើលផែនទី</Link>

                <div className='imageletter'>

                    <img className='imgT1' src={T1} alt='' />

                    <img className='imgT2' src={T2} alt='' />
                </div>
            </div>
            {/* <div className='letterform'>
                
            </div>
            
            <Link to={'/GoogleMap'} className='Openletter'>ចុចទីនេះ ដើម្បីមើលទីតាំង</Link>
            <img className='imgT1' src={T1} alt='' />
            <img className='imgT2' src={T2} alt='' style={{height: "150px"}}/> */}
        </>
    )
}
