export default function Product_props({title,price,features,features2}){
    return(
        <div>
            <h3>{title}</h3>
            <p>{price}</p>
            <div>{features}</div>
            <p>{features2}</p>
        </div>
    );
}