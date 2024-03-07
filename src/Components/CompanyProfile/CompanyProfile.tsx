import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { CompanyKeyMetrics } from "../../company";
import { getKeyMetrics } from "../../api";
import RatioList from "../RatioList/RatioList";
import Spinner from "../Spinner/Spinner";

type Props = {};

const tableConfig = [
  {
    label: "Capitalización de Mercado",
    render: (company: CompanyKeyMetrics) => company.marketCapTTM,
    subTitle: "Valor total de todas las acciones de una empresa",
  },
  {
    label: "Índice de Liquidez",
    render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
    subTitle:
      "Mide la capacidad de la empresa para pagar sus obligaciones de deuda a corto plazo",
  },
  {
    label: "Retorno sobre el Patrimonio",
    render: (company: CompanyKeyMetrics) => company.roeTTM,
    subTitle:
      "Medida del ingreso neto de una empresa \n dividido por su patrimonio de los accionistas.",
  },  
  {
    label: "Retorno sobre los Activos",
    render: (company: CompanyKeyMetrics) => company.returnOnTangibleAssetsTTM,
    subTitle:
      "Es la medida de qué tan efectiva es una empresa utilizando sus activos.",
  },
];

const CompanyProfile = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();
  useEffect(() => {
    const getCompanyKeyRatios = async () => {
      const value = await getKeyMetrics(ticker);
      setCompanyData(value?.data[0]);
    };
    getCompanyKeyRatios();
  }, []);
  return (
    <>
      {companyData ? (
        <>
          <RatioList config={tableConfig} data={companyData} />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CompanyProfile;