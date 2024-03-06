import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import DesignPage from "../Pages/DesignPage/DesignPage";

export const router = createBrowserRouter([{
    path:"/",
    element: <App/>,
    children: [
        {path: "", element: <HomePage/>},
        {path: "diseño", element: <DesignPage/>},
        {path: "company/:ticker",
         element: <CompanyPage/>,
         children: [
            {path: "company-profile", element: <CompanyProfile/>},
            {path: "income-statement", element: <IncomeStatement/>},
        ]},
        {path: "search", element: <SearchPage/>},
        
    ]

}]);
