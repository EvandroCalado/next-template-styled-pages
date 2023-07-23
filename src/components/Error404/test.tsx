import { renderTheme } from '@/styles/render-theme';
import Error404 from '.';
import { screen } from '@testing-library/react';

describe('Error404', () => {
  it('should render successfully', () => {
    renderTheme(<Error404 />);

    expect(screen.getByText('ERROR 404')).toBeInTheDocument();
    expect(screen.getByText('Página não encontrada !')).toBeInTheDocument();
  });

  it('should render snapshot', () => {
    const { container } = renderTheme(<Error404 />);

    expect(container).toMatchSnapshot();
  });
});
