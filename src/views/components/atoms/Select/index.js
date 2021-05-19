import React from 'react'
import { ICArrow, ICArrowUp } from '../../../../assets/icons'
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

const useStyles = createUseStyles({
    selectOption: {
        backgroundImage: `url(${ICArrow})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right .7em top 50%, 0 0',
    }
})

const Select = ({ icon, label, data = [], fullwidth }) => {
    const classes = useStyles()

    return (
        <div className={fullwidth ? 'space-y-4 w-full col-span-full' : 'space-y-4 w-full'}>
            <label className='flex items-center space-x-4'>
                {icon && <img style={{ content: `url(${icon})` }} width={20} height={20} alt='label-icon' />}
                <p className=' text-lg text-gray-500 font-semibold '>{label}</p>
            </label>
            <select value="" className={clsx(classes.selectOption, 'px-6 py-4 border border-gray-500 rounded-md w-full appearance-none cursor-pointer')}
            >
                <option value="" disabled>Pilih Provinsi</option>
                {data.map((item, index) => (
                    <option key={index} value={item.name}>{item.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select
