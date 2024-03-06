import React, { useEffect, useState } from 'react'
import { CompanyProfile } from '../../company';
import { useParams } from 'react-router-dom';
import { getCompanyProfile } from '../../api';
import Sidebar from '../../Components/SideBar/Sidebar';
import Dashboard from '../../Components/Dashboard/Dashboard';
import Tile from '../../Components/Tile/Tile';

interface Props {}

const CompanyPage = (props: Props) => {
  let {ticker} = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    }
    getProfileInit();
  }, [])

  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
        <Sidebar/>
        <Dashboard><Tile title="Nombre de la Compañía" subTitle={company.companyName}></Tile> </Dashboard>
      </div>
      ) : (
        <div>Compañía no encontrada!</div>
      )}
    </>
  );
};

export default CompanyPage