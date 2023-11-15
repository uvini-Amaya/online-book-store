import { Form, FormLabel } from 'react-bootstrap';
import './Components.css';


const Login = () => {


    return (
        <>
            <Form>
                <div className='flex'>
                    <FormLabel>userName</FormLabel>
                    <input type='text'/>
                </div>

                <div className='flex'>
                    <FormLabel>Password</FormLabel>
                    <input type='password'/>
                </div>
            </Form>
        </>

                
    )
}