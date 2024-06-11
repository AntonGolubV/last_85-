import React, { useState, useEffect } from "react";

export default function Brand(props){
    let { name, showBrandParent } = props;
    let srcName = name.toLowerCase();
    
    const showSmartphonsByBrand = () => {
        showBrandParent(srcName);
    }
    return (
            <div className="main_brand_block" onClick={showSmartphonsByBrand}>
                <img className="img_brand" src={`/${srcName}.webp`} />
                <h3 className="h3">{name}</h3>
            </div>
        );
    };