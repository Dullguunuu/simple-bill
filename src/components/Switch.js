import React from 'react'

export default function Switch({ switchSearch, onOff, setOnOff }) {
    return (
        <div className='switchRow'>
            <label className="switch" onClick={switchSearch}>
                <input type="checkbox" value={onOff} onChange={() => setOnOff(!onOff)} />
                <span className="slider round"></span>
            </label>
            only products in stock
        </div>
    )
}
