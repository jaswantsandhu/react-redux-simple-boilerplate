import React, { Component } from 'react';
import _ from 'lodash';
import Styles from './listing.scss';

const listing = ({data}) => {

    if(data.length > 0)
        {
            return <div className="row">{
                _.map(data, function(item, index){
                    return <div key={item.id} className={Styles.wrapper + " col-xs-12 col-sm-6 col-md-3"}>
                            <div className={Styles.listing}>
                            <div className={Styles.nopad + " col-md-12"}>
                                <img src="http://dummyimage.com/250x250" className="img-responsive" />
                            </div>
                            <div className={Styles.nopad + " col-md-12"}>
                                <h5>{item.name}</h5>
                                <p>{item.desc}</p>
                                <div className={Styles.footer}>
                                    <i className="fa fa-phone-square"></i> +3000000
                                </div>
                            </div>
                            </div>
                        </div>;
                })
            }</div>
        }
    return <div></div>;
}

export default listing;

