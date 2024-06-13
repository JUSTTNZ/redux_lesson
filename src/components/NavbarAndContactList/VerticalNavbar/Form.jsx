import  { useEffect, useState } from 'react'
import './Form.css'
import Button from '../../Ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { contactListActions } from '../../../store/contact-slice'
const Form = () => {

    const dispatch  = useDispatch();

    const existingContactKey = useSelector(state => state.contact.key)
    const [userData, setUserData] = useState(
        {
            name: "",
            surname: "",
            telephone: ""
        }
    )

    useEffect(() => {
        const fetchexistingContactKey = async() => {
            const res = await fetch(`https://contact-list-app-7ff85-default-rtdb.firebaseio.com/contact-list/${existingContactKey}.json`);
        const existingContact = await res.json();
        }
    }, [])
    
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(contactListActions.addContact(userData));

        setUserData({
            name: "",
            surname: "",
            telephone: ""
        })
    }

    const inputHandler = (e) => {
        const {name, value} = e.target;
        setUserData((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    // console.log(typeof undefined === typeof null);
  return (
    <div>
        <form className='form' onSubmit={submitHandler}>
            {/* <div>
                <img src=''></img>
            </div> */}
            <div className='input-text'>
                <input
                    type='text'
                    placeholder='name'
                    name='name'
                    value={userData.name}
                    onChange={inputHandler}
                />
                <input
                    type='text'
                    placeholder='surname'
                    name='surname'
                    value={userData.surname}
                    onChange={inputHandler}
                />
            </div>
            <div className='input-tel'>
                <input
                    type='text'
                    placeholder='7031352210'
                    name='telephone'
                    value={userData.telephone}
                    onChange={inputHandler}
                />
            </div>
            <Button name="Add"/>
        </form>
    </div>
  )
}

export default Form
