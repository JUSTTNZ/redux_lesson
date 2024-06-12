import React from 'react'
import './Form.css'
import Button from '../../Ui/Button'
const Form = () => {
  return (
    <div>
        <form className='form'>
            {/* <div>
                <img src=''></img>
            </div> */}
            <div className='input-text'>
                <input
                    type='text'
                    placeholder='name'
                />
                <input
                    type='text'
                    placeholder='surname'

                />
            </div>
            <div className='input-tel'>
                <input
                    type='text'
                    placeholder='7031352210'
                />
            </div>
            <Button name="Add"/>
        </form>
    </div>
  )
}

export default Form
