import Product_props from "./Product_props.jsx";
function ProductTab_props(){
    let options=[<li>'Hi-tech'</li>,<li>'durable'</li>,<li>'fast'</li>];
    let options2={a:'sign-in',b:'signout'};
    return (<>
        <Product_props title="Ghee" price={234} features={options}/>
        <Product_props title="Toys" price={520} features2={options2.b} />
        <Product_props title="chocolate" price={20}/>
        </>
    );
}
export default ProductTab_props;