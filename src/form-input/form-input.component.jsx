import './form-input.styles.scs'

const FormInput = ({handleChange,...otherProps})=> {
    return(
        <div className='group'>
            <input 
            {...otherProps}
            onChange={handleChange}
            className='form-input'
            />
        </div>
    )
}
export default FormInput