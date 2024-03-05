import { SyntheticEvent } from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/solid'

interface Props {
    onPortfolioCreate: (e:SyntheticEvent) => void;
    symbol: string;
}

const AddPortfolio = ({onPortfolioCreate, symbol}: Props) => {
  return ( 
    <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
      <form onSubmit={onPortfolioCreate}>
        <input readOnly={true} hidden={true} value={symbol} />
        
        <button
          type="submit"
          className="p-2 px-8 text-white bg-darkBlue rounded-lg hover:opacity-70 focus:outline-none"
        >
           <PlusCircleIcon className="h-6 w-6 text-white-500 text-center" />         
        </button>
      </form>
    </div>
  );  
};

export default AddPortfolio