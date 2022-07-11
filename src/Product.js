import './Product.css'

function Product({name, image, price, company, location}) {
    return(
        <div className="Product-style">
            <div className='Image-Style'>
                <img src={image} />
                <h1>{name}</h1>
            </div>
            <div className='Price-Style'>
                <h3>{company}</h3>
                <h3>{location}</h3>
                <h2>${price} AUD</h2>
            </div>
        </div>
    );
}

export default Product;