import React, { useState } from 'react'

export default function Search({ searchProduct, inputText, setInputText, text, setText, onChangeSearch }) {

    return (
        <div className='search'>
            <input type="text" placeholder='Search...'
                className='form-control searchInput'
                value={text}
                onChange={(e) => onChangeSearch(e.target.value)}
            />
            <button className='searchBtn' onClick={searchProduct}><i class="bi bi-search"></i></button>
        </div >
    )
}

