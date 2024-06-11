import { useEffect, useState } from 'react';
import SmartBlock from './SmartBlock';
import './SmartBlockList'
const SmartList = ({ data, setSmartList, where }) => {
    const [count, setCount] = useState(0);
    let sortData = [...data];
    let sortDirection  = '▲';
    
    const sortSP = () => {
        if(count == 0){
            setCount((count) => count + 1);
        } else {
            setCount((count) => count - 1);
        }
        sortSmartPhone(count)
    }
    
    const sortSmartPhone = (sortBy) => {
        if(sortBy == 0){
            sortDirection = sortDirection === '▲' ? '▼' : '▲';
        } else {
            sortDirection = '▲';
        }
  
        sortData.sort((a, b) => {
            console.log(a.prices);
        if(b.prices == null || a.prices == null){
            return 1;
        }
        if (parseInt(a.prices.price_max.amount) > parseInt(b.prices.price_max.amount)) {
            return sortDirection === '▲' ? 1 : -1;
        }
        if (parseInt(a.prices.price_max.amount) < parseInt(b.prices.price_max.amount)) {
            return sortDirection === '▲' ? -1 : 1;
        }
        else {
            return 0;
        }
    });

    setSmartList((smartList) => {
        smartList = smartList.filter((smart) => smart.id < 1);
        smartList = sortData;
        return smartList;
    });
        return sortData;
}
    
    return(
        <>
        {data.length > 0 && 
            <div style={{display: "flex", flexDirection: "column"}}>
            <button  style={{marginBottom: "15px" }} onClick={sortSP}>Отсортировать по цене</button>
            {sortData.map((item, index) => (
            <SmartBlock  key={`${index}`} data={item} where={where} setSmartList={setSmartList} ></SmartBlock >
        ))} 
        </div>
        }
    </>
    );
    
};
export default SmartList;