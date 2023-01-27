import React from 'react'

export default function Switch({ switchSearch }) {
    return (
        <div className='switchRow'>
            <label className="switch" onClick={switchSearch}>
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
            only products in stock
        </div>
    )
}
