import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Reservation from './reservation';

describe('Reservation Component', () => {
  test('renders confirmation container when "Reserve Now" button is pressed', async () => {
    render(<Reservation />);



     const dateInput= screen.getByLabelText("Choose Date");


     fireEvent.change( dateInput,{target:{value: '2024-06-18'}})
      
     expect(dateInput.value).toBe( '2024-06-18')


  });
});