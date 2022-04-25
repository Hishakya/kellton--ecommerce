import './sign-in.styles.scss'
import React from 'react'
class SignIn extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            password:''
        }
    }
    
    handleChange = (event)=>{
        const {name,value}=event.target
        this.setState({[name]:value})
    }
    
        render(){
            return(
                <>
                    <div className='sign-in'>
                        <h2>I already have an account</h2>
                        <span>
                            Sign in with your email and password
                        </span>
                        <form >
                            <FormInput 
                                name='email'
                                placeholder='email'
                                type='email'
                                handleChange={this.handleChange}
                            />
                            <FormInput 
                                name='password'
                                placeholder='password'
                                type='password'
                                handleChange={this.handleChange}
                            />
                            <CustomButton 
                                type='submit'
                                >
                                    Sign In 
                               </CustomButton>
                                
                        </form>
                    </div>
                </>
            )
        }
    }
    export default SignIn