import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'

type Props = {}

const DesignPage = (props: Props) => {
  return (
    <>
        <h1 className='text-center'>Mercado y Acciones</h1>
        <h2 className='text-center'>Esta es la página de diseño del sistema.</h2>
        <RatioList/>
        <Table/>
    </>    
  )
}

export default DesignPage