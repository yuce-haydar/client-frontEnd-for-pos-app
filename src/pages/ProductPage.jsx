import React from 'react'
import Edit from '../components/products/Edit'
import Header from '../components/Header/Header'

const ProductPage = () => {
  return (
    <>
    <Header></Header>
    <div className='p-6'>
        <h1 className='text-4xl text-center font-bold mb-4'>
            Urunler
        </h1>
        <Edit></Edit>
    </div>
    </>
  )
}

export default ProductPage