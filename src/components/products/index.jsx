import React, {Component} from 'react';
import {connect} from 'react-redux';
import Styles from './products.scss';
import {LoadProducts} from '../../actions/products'
import Listing from "../listing"

class ProductsComponent extends Component {

    componentWillMount()
    {
        this
            .props
            .loadProducts();
    }

    render()
    {
        console.log(Styles);
        return <div className={Styles.products + " container"}>
            
                <Listing data={this.props.products}/>
            </div>
    
    }
}

const mapStateToProps = (state) => {
    return {products: state.products};
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadProducts: () => {
            dispatch(LoadProducts());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsComponent);