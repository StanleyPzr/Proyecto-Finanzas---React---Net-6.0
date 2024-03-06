import axios from "axios"
import { CompanyProfile, CompanySearch } from "./company"

export interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try {
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}` //query para buscar por parametro otorgado en index.tsx
        );
        return data;
    } 
    
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("Mensaje de error: ", error.message);
            return error.message;
        } else{
            console.log("unexpected error: ", error);
            return "A ocurrido un error inesperado"
        }
    }
};

export const getCompanyProfile = async (query: string) => {
    try {
        const data = await axios.get<CompanyProfile[]>(
            `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}` 
        )
        return data;
    }
    catch (error: any) {
        console.log("Error inesperado desde la API: ", error.message)


    }
}