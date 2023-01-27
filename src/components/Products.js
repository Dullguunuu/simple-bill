import React from 'react'


export default function Products({ productList, setProductList }) {
    return (
        <div className='productList'>
            {
                productList.length == 0 ? (<div> Not Found </div>) : (
                    productList.map(({ id, productName, inStock, price, category }, index) => (
                        <div>
                            <h4 className='categories'>{category}</h4>
                            <div className='productRow'>
                                <p className='productName'>{productName}</p>

                                {inStock ? (
                                    <p className='isStock' style={{ color: "green" }}>in stock</p>
                                ) : (
                                    <p className='isStock' style={{ color: "red" }}>out of stock</p>
                                )}
                                <p>${price}</p>
                            </div>
                        </div>
                    )))
            }
        </div >
    )
}
