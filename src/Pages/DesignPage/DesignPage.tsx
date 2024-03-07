import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { CompanyKeyMetrics } from '../../company'
import { testIncomeStatementData } from '../../Components/Table/testData'

type Props = {}

const tableConfig = [{
  label: "Market Cap",
  render: (company: any) => company.marketCapTTM,
},]

const DesignPage = (props: Props) => {
  return (
    <>
        <h1 className='text-center'>Mercado y Acciones</h1>
        <h2 className='text-center'>Esta es la página de diseño del sistema.</h2>
        <RatioList data={testIncomeStatementData} config={tableConfig}/>
        <Table data={testIncomeStatementData} config={tableConfig}/>
    </>    
  )
}

export default DesignPage