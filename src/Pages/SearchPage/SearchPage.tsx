import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { CompanySearch } from '../../company';
import { searchCompanies } from '../../api';
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio';
import CardList from '../../Components/CardList/CardList';
import Search from '../../Components/Search/Search';

interface Props {}

const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>("");
    const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
    const [searchResult, setsearchResult] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string | null>(null);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      console.log(e);
    };

    const onPortfolioCreate = (e: any) => {
        e.preventDefault();
        const exists = portfolioValues.find((value) => value === e.target[0].value);
        if(exists) return console.log("ya existe en el portafolio");
        const updatedPortfolio = [...portfolioValues, e.target[0].value];
        setPortfolioValues(updatedPortfolio);
    }

    const onPortDelete = (e: any) => {
        e.preventDefault();
        const removed = portfolioValues.filter((value) => value!== e.target[0].value);
        setPortfolioValues(removed);
    }

    const onSearchSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const result = await searchCompanies(search);
        /* setsearchResult(result.data); */ // no maneja Datos de string
        if (typeof result == "string"){
            setServerError(result);
        } 
        else if(Array.isArray(result.data)) {
            setsearchResult(result.data);
        }
        console.log(searchResult);
    };
    return (
        <>            
            <Search onSearchSubmit = {onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
            <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortDelete}/>   
            <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate} />
            {serverError && <div>No es posible contectar a la API.</div>} 
        </>
    )
}

export default SearchPage