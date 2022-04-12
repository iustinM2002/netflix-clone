import { render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/index';

test('renders correctly' , () =>{
  const {container, getByText,getByTestId} = render(<Home />);
  expect(getByText('Unlimited movies, TV, shows, and more.')).toBeInTheDocument();
});
it('changes the language',() =>{
  const handleChange = jest.fn();

  const {container, getByText,getByTestId} = render(<Home />);
  const selectLang = getByTestId('change-lang-select') as HTMLSelectElement;
  fireEvent.change(selectLang,handleChange);
  

  expect(selectLang).toBeTruthy();


});   