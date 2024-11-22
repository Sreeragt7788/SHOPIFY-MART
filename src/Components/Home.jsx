
import Button from 'react-bootstrap/Button';


const Home = ({sendDataToParent}) => {
    

    return (
        <div className="d-flex flex-column justify-content-center align-items-center mx-2 homeBody">
            <h2 className="homeTitle ">DISCOVER YOUR PERFECT PRODUCT</h2>
            <p className="homeMessage">Welcome to Shopify Mart – Your one-stop destination for premium products at unbeatable prices!

At Shopify Mart, we are passionate about bringing you a diverse range of high-quality items across multiple categories, all designed to meet your needs and exceed your expectations. Whether you're looking for the latest tech gadgets, stylish fashion, home essentials, or unique gift ideas, we have something for everyone.

We believe shopping should be an enjoyable experience, which is why we have created a user-friendly online store that makes browsing and buying easy. With a commitment to excellent customer service, secure payments, and fast delivery, we ensure your shopping experience is smooth and hassle-free..</p>
           
        </div>

    )
}

export default Home