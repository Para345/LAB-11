import './Products.css'
import React from 'react';
import Data from './json/product.json';

class Products extends React.Component {

    constructor(props) {
        super(props);
        this.enroll = React.createRef();
        this.enrollCourse = this.enrollCourse.bind(this);
    }

    enrollCourse = () => {
        this.enroll.current.focus();
        alert("maladess");
    }

    render() {
        return (
            <div className="Products">
                {
                    Data.map((detail, index) => {
                        return (
                            <div class="product" ref={this.enroll} onClick={this.enrollCourse}>
                                <img src={detail.img} alt="" />
                                <p>{detail.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default Products;