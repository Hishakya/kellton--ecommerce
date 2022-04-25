 //import { Children } from 'react'
import './custom-button.styles.scss'

const CustomButton = ({Children, ...otherProps}) => {
    return (
        <button
        {...otherProps}
        className='Custom-button'
        >
            {Children}
            
        </button>
    )
}
export default CustomButton