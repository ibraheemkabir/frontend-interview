import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { getSingleApplicationFixture } from "../__fixtures__/applications.fixture";

import App from '../App';

describe('single application page tests', () => {

    beforeEach(() => {
        vi.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
            json: () => Promise.resolve( getSingleApplicationFixture ),
            ok: false 
        } as Response));
    })

    test('should render application list for each entry returned', async () => {
        render(<App />);
    
        await waitFor(() => {expect(global.fetch).toBeCalledTimes(1)});

        await waitFor(() => {expect(screen.getByTestId('application')).toBeInTheDocument()})
        await waitFor(() => {expect(screen.getAllByTestId('application')).toHaveLength(1)})
    });
    
    
    test('should call load more endpoint whehn load more button is clicked', async () => {
        render(<App />);
    
        const loadMoreBtn = screen.getByText("Load More")
        expect(loadMoreBtn).toBeInTheDocument();
    
        fireEvent.click(loadMoreBtn)

        await waitFor(() => {expect(global.fetch).toHaveBeenCalled()});
        await waitFor(() => {expect(global.fetch).toBeCalledTimes(2)});
      });
      
})
