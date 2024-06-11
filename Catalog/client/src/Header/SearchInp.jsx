import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SearchInp(props){
    const [text, setText] = useState('');
    const { showBySubName } = props;
    const handlShowBySubName = () => {
        showBySubName(text);
    } 
    return(
        <div className="search">
            <div className="block_in_search">
                <input type="text"
                 placeholder="Поиск" 
                onChange={(e) => setText(e.target.value)}
                className="input_search" 
                value={text}/>
                
                <Link to="/" className="search-button" onClick={handlShowBySubName}>{/* <button className="search-button"  ></button> */}</Link>
            </div>
        </div>
    );
};