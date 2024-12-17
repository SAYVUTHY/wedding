import React from 'react'
import cn from '../Img/CN.png'
import cn2 from '../Img/CN2.png'
import { Link, useParams } from 'react-router-dom'
import T1 from '../Img/T1.png'
import T2 from '../Img/T2.png'
export const Home = () => {

  const {nameid} = useParams()
  // console.log(listname)
  console.log(nameid)
  return (
    <>

      <div className='letter'>

        <h1>សិរីមង្គលអាពាហ៍ពិពាហ៍</h1>
        <div className='imgcnn'>
          <img className='imgcn' src={cn} />
          <h2>សូមគោរពអញ្ជើញ</h2>
          <img className='imgcn2' src={cn2} />
        </div>
        <h3>{nameid}</h3>
        {/* <h3>{listname[nameid]}​​</h3> */}
        <h4>ថ្ងៃ សៅរ៍ ទី ១១ ខែ មករា ឆ្នាំ ២០២៥<br></br>
          គេហដ្ឋានខាងស្រី ភូមិ ខ្លាខាំ ឃុំ សេនារាជឩត្តម ស្រុក ព្រះស្ដេច ខេត្ត ព្រៃវែង
        </h4>
        <Link to={'/Thanks'} className='Openletter'>សូមចុចទីនេះដើម្បីបើកសំបុត្រ</Link>

        <div className='imageletter'>

          <img className='imgT1' src={T1} alt='' />

          <img className='imgT2' src={T2} alt='' />
        </div>
      </div>

      {/* 
      <h2 className='Text2'>សូមគោរពអញ្ជើញ</h2>
      <h3 className='Text3'>{listname[nameid]}</h3>
      
       */}




    </>
  )
}
