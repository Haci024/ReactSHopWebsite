import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { useCart } from 'react-use-cart';

import { Link } from  "@reach/router";
import '../components/ProductCard.css';
import Shopping from '../icons/shopping-cart.png';

const ProductCard = (props) => {
    let { image, price, title, id} = props.data;
    const [theme] = useThemeHook();
    const { addItem } = useCart();

    const addToCart = () =>{
        addItem(props.data);
        document.getElementById(id).disabled=true;
        document.getElementById(id).style.backgroundColor="gray"
        document.getElementById(id).innerText=`Əlavə edildi!`
    }
    return (
        <Card 
            style={{ width: '18rem', height: 'auto' }}
            className={`${theme? 'bg-light-black text-light':'bg-lihgt text-black'} text-center p-0 overflow-hidden shadow mx-auto mb-4`}
        >
            <Link to={`/product-details/${id}`}>
                <div className='Image-Header-1'>
                    <div className='Image-Header-2'>
                        <Card.Img variant="top" src={image} className="Image"
                />
                    </div>
                </div>
            </Link>
            <Card.Body>
                <Card.Title className='Card-title'>
                    {title}
                </Card.Title>
                <Card.Title>
                     <span className="h3">{price}$</span>
                </Card.Title>
                <Button id={id}
                    onClick={()=> addToCart()}
                    className={`${theme? 'btn btn-danger text-black':'bg-success-primary' } d-flex align-item-center m-auto border-0`} 
                >
                    <img src={Shopping}  className="Card-item" />
                    Əlavə et
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;