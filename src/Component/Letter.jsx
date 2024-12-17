import React from 'react'
import weddimg from '../Img/Wedding.png'
import { Link } from 'react-router-dom'
import T1 from '../Img/T1.png'
import T2 from '../Img/T2.png'
export const Letter = () => {
    return (
        <>

            <div className='letter' style={{ gap: '30px' }}>
                <div className='Parent'>
                    <div className='AParent'>
                        <h2>លោក សាយ សុភាព</h2>
                        <h2>លោកស្រី អឿង សូឃិត</h2>
                    </div>
                    <div className='BParent'>
                        <h2>លោកស្រី ម៉ឹក ណាវី</h2>
                    </div>
                </div>
                <div className='Parenttext'>
                    <h2 style={{ textAlign: "center", marginBottom: '20px', fontSize: "1.1rem" }}>មានកិត្តិយសសូមគោរពអញ្ជើញ</h2>
                    <h2 style={{ textAlign: "center", fontFamily: "Bokor", fontSize: "0.9rem" }}>ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាង កញ្ញា អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធិ ពរជ័យ សិរីសួស្ដី ជ័យមង្គល នៅក្នុង ពិធីរៀបអាពាហ៍ពិពាហ៍ កូនប្រុស កូនស្រី របស់យើងខ្ញុំ</h2>

                </div>
                <div className='Parent' style={{ padding: "30px 50px" }}>
                    <div className='Konname'>
                        <p style={{ fontFamily: "Bokor" }}>កូនប្រុសនាម</p>
                        <h2>សាយ វុទ្ធី</h2>
                    </div>
                    <img src={weddimg} alt='' width={'40%'} />
                    <div className='Konname'>
                        <p style={{ fontFamily: "Bokor" }}>កូនស្រីនាម</p>
                        <h2>ឆុន ណារី</h2>
                    </div>
                </div>
                <Link to={'/Location'} className='Openletter'>សូមចុចទីនេះដើម្បីបើកសំបុត្រ</Link>

                <div className='imageletter'>

                    <img className='imgT1' src={T1} alt='' />

                    <img className='imgT2' src={T2} alt='' />
                </div>
            </div>
            {/* <div className='letterform' >

                
                

                
                <Link to={'/Location'} className='Openletter'>ចុចទីនេះ មើលពេលវេលា</Link>


            </div>
            <img className='imgT1' src={T1} alt='' />
            <img className='imgT2' src={T2} alt=''  style={{height: "150px"}}/> */}
        </>

    )
}
