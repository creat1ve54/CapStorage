import React, { useEffect, useState } from 'react'
import { useTypedSelector } from '../../hooks/useProductSelecor'
import './catalog.scss'


const vector = require('../../images/vector.svg')

const Catalog: React.FC = () => {

    const { error, loading, product, newProduct } = useTypedSelector(state => state.product)

    const [option1, setOption1] = useState('');
    const [option4, setOption4] = useState('');
    const [option2, setOption2] = useState('Цена по возрастанию');
    const [option3, setOption3] = useState('Цена по убыванию');


    let [page, setPage] = useState(1);
    const [limit, setLimit] = useState(8);

    let lastIndex = page * limit
    let firstIndex = lastIndex - limit
    let currentPage = product.slice(firstIndex, lastIndex)




    const [open, setOpen] = useState(false);

    useEffect(() => {
        Product()
        setOption1(option2)
        setOption4(option3)
    }, [])

    document.onclick = function (e: any) {
        if (e.target.className !== 'catalog__item catalog__item--one' && e.target.className !== 'catalog__vector catalog__vector--active') {
            document.querySelector('.catalog__list')?.classList.remove('catalog__list--active')
            document.querySelector('.catalog__vector')?.classList.remove('catalog__vector--active')
        }
    }

    const Product = () => {
        for (let i = 0; i < product.length; i++) {
            if (i < 8) {
                newProduct?.push(product[i])
            }
        }
    }

    const ProductAdd = () => {
        setPage(page + 1)
        page++;
        lastIndex = page * limit
        firstIndex = lastIndex - limit
        currentPage = product.slice(firstIndex, lastIndex)
        for (let i = 0; i < currentPage.length; i++) {
            newProduct?.push(currentPage[i])
        }
    }



    const Option = (e: any) => {
        Open()
        if (e.target.innerHTML === 'Цена по возрастанию' && option1 !== 'Цена по возрастанию') {
            setOption1(option2)
            setOption4(option3)
        }
        if (e.target.innerHTML === 'Цена по убыванию' && option1 !== 'Цена по убыванию') {
            setOption1(option3)
            setOption4(option2)
        }
    }

    const Open = () => {
        setOpen(!open)
        if (!open) {
            document.querySelector('.catalog__list')?.classList.add('catalog__list--active')
            document.querySelector('.catalog__vector')?.classList.add('catalog__vector--active')
        } else {
            document.querySelector('.catalog__list')?.classList.remove('catalog__list--active')
            document.querySelector('.catalog__vector')?.classList.remove('catalog__vector--active')
        }
    }

    return (
        <div className='catalog'>
            <div className='container'>
                <div className='catalog__menu'>
                    <div className='catalog__left'>
                        <h4 className='catalog__caption'>Недавние поступления</h4>
                        <h2 className='catalog__title'>Новые товары</h2>
                    </div>
                    <div className='catalog__right'>
                        <h4 className='catalog__caption catalog__caption--sort'>Сортировать:</h4>
                        <ul className='catalog__list'>
                            <li onClick={Option} className='catalog__item catalog__item--one'>
                                {option1}
                                <img src={vector.default} alt="vector" className='catalog__vector' />
                            </li>
                            <li onClick={Option} className='catalog__item'>{option4}</li>
                        </ul>
                    </div>
                </div>
                <div className='catalog__product product'>
                    {newProduct?.map(product => <div className='product__body' key={product.id}>
                        <img className='product__img' src={require('../../images/product/1.png')} alt={product.name} />
                        <div className='product__case'>
                            <div className='product__title'>{product.name}</div>
                            {product.salePrice && <div className='product__sale-price'>{product.salePrice}</div>}
                            <div className='product__price'>{product.price}</div>
                        </div>
                        <hr className='product__line' />
                        <div className='product__descr'>{product.description}</div>
                        <div className='product__size'>{product.size}</div>
                    </div>)}
                </div>
                {product.length > limit && (product?.length / lastIndex >= 1) && <div onClick={ProductAdd} className='catalog__btn btn'>Показать еще</div>}
            </div>
        </div>
    )
}

export default Catalog