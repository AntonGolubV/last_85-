import Brand from "./Brand";

const BrandList = ({ data, showBrandParent}) => {
    return(
        <>
        {data.map((item, index) => (
            <Brand key={`${index}`} name={item} showBrandParent={showBrandParent}></Brand>
        ))}
        
   </>
    );
    
};
export default BrandList;