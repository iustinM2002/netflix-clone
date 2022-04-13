import { render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import SignIn from '../pages/sign_in'


describe('Sign Up Components' ,() =>{
    const submitMock = jest.fn();
    let initContact:[]=[];
    it('renders component',()=>{
        const {container} = render(<SignIn onSubmit={submitMock} initialContacts={initContact}/>)
        expect(container).toBeTruthy()
    });
    it('sign in' , () =>{
        
            const onSubmit= jest.fn();
            const {getByRole,getByPlaceholderText,getByTestId} = render(<SignIn onSubmit={onSubmit} initialContacts={initContact}/>)
            const submitButton = getByTestId('submit-button');

            fireEvent.change(getByPlaceholderText(/email or phone number/i),{target:{value:'morosanuiustin@gmail.com'}})
            fireEvent.change(getByPlaceholderText(/password/i),{target:{value:'123'}});
            fireEvent.submit(submitButton);
            
         
    })
    
})