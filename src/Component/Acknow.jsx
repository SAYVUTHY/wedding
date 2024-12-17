import React from 'react'
import T1 from '../Img/T1.png'
import T2 from '../Img/T2.png'
import { Link } from 'react-router-dom'
export const Acknow = () => {
    return (
        <>
            <div className='letter' style={{gap:"10px"}}>
            <h2>សេចក្ដីថ្លែងអំណរគុណ</h2>
                <h2 style={{fontFamily: "Freehand", padding: "5px 30px", textAlign: "center", fontSize:"0.8rem"}}>យើងខ្ញុំជា មាតាបិតា កូនប្រុស កូនស្រី សូមថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅចំពោះការអញ្ញើញចូលរួម ជាភ្ញៀវកិត្តិយស ក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍ កូនប្រុស កូនស្រីរបស់យើងខ្ញុំ។ <br></br> 
                យើងខ្ញុំសូមគោរពជូនពរដល់ ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាង កញ្ញា និងជាភ្ញៀវកិត្តិយសទាំងអស់ សូមប្រកបតែភាពសុខដុម ចម្រុងចម្រើន និងសុភមង្គលក្នុងក្រុមគ្រួសារជានិច្ចរន្ដរ៍។</h2>
                <h2 style={{ textAlign: "center" }}>លិខិតសូមអភ័យទោស</h2>
                <h2 style={{fontFamily: "Freehand", padding: "5px 30px", textAlign: "center", fontSize:"0.8rem"}}>យើងខ្ញុំជា មាតាបិតា កូនប្រុស កូនស្រី សូមអភ័យទោសក្នុងករណីពុំបានជូនសំបុត្រអញ្ជើញដោយផ្ទាល់ និងការសរសេរឈ្មោះរបស់ភ្ញៀវកិត្តិយសមិនបានត្រឹមត្រូវ ឬមិនបានសរសេរឈ្មោះ។ <br></br>
                វត្តមានរបស់ ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាង កញ្ញា ជាភ្ញៀវកិត្តិយសដ៏ឩត្តុង្គឩត្តមចំពោះក្រុមគ្រួសាររបស់យើងខ្ញុំ <br></br> សូមអរគុណ។</h2>
                
                <Link to={'/Letter'} className='Openletter'>សូមចុចទីនេះដើម្បីបើកលិខិតអញ្ញើញ</Link>

                <div className='imageletter'>

                    <img className='imgT1' src={T1} alt='' />

                    <img className='imgT2' src={T2} alt='' />
                </div>
            </div>
            {/* <div className='letterform'>
                
            </div>
            
            <Link to={'/Letter'} className='Openletter'>សូមចុចទីនេះ</Link>
            <img className='imgT1' src={T1} alt='' />
            <img className='imgT2' src={T2} alt=''  style={{height: "150px"}}/> */}

        </>
    )
}
