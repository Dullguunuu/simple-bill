import React from 'react'


export default function Products({ productList, setProductList, newArr }) {
    return (
        productList.length == 0 ? (<div>Product Not found</div>) : (
            newArr.map((e) => (
                <div>
                    <h4 className='categories'>{e}</h4>
                    <div>
                        {productList.map((a) => {
                            if (e == a.category) {
                                return (
                                    <div className='productRow'>
                                        <p className='productName'>{a.productName}</p>
                                        <p className='isStock' style={{ color: a.inStock ? "green" : "red" }}>{a.inStock ? "in stock" : "out of stock"}</p>
                                        <p>${a.price}</p>
                                    </div>
                                )
                            }
                        })}

                    </div>
                </div>
            )))
    )
}
