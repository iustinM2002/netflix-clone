import { render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';


global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve({ test: 100 }),
    })
) as jest.Mock
describe('fetch api',()=>{
})