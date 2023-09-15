import React, { useState } from 'react'
import './search.scss'

const search = require('../../images/search.svg');
const close = require('../../images/close.svg');

const Search: React.FC = () => {
    const [text, setText] = useState('')
 
    

    const onFocusInput = () => {
        document.querySelector('.search__animation')?.classList.add('search__animation--invisible')
        document.querySelector('.search__close')?.classList.remove('search__close--invisible')
    }

    const onBlurInput = (e: any) => {
        if (e.target.value === '') {
            document.querySelector('.search__animation')?.classList.remove('search__animation--invisible')
            document.querySelector('.search__close')?.classList.add('search__close--invisible')
        }
    }

    const onClear = (e: any) => {
        setText('');
        document.querySelector('.search__animation')?.classList.remove('search__animation--invisible')
        document.querySelector('.search__close')?.classList.add('search__close--invisible')
    }


    return (
        <div className='search'>
            <div className='container'>
                <div className='search__container'>
                    <img src={search.default} alt="Search" className='search__img' />
                    <div className='search__input search__input--invisible'>
                        <input onBlur={onBlurInput} onFocus={onFocusInput} type="text" value={text} onChange={e => setText(e.target.value)} />
                        <img onClick={onClear} src={close.default} alt="Close" className='search__close search__close--invisible' />
                    </div>
                    <div className='search__animation'>
                        <div className='search__wrapper'>
                            <label className='search__label'>Поиск товара, бренда или продавца...</label>
                            <label className='search__label'>Поиск товара, бренда или продавца...</label>
                            <label className='search__label'>Поиск товара, бренда или продавца...</label>
                            <label className='search__label'>Поиск товара, бренда или продавца...</label>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Search