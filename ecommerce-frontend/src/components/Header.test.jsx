import { it, expect, describe, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Header from './Header';
import LogoWhite from '../assets/images/logo-white.png';
import MobileLogoWhite from '../assets/images/mobile-logo-white.png';

describe('Header component', () => {
  let cart;

  beforeEach(() => {
    cart = [{
      "id": 1,
      "productId": "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      "quantity": 2,
      "deliveryOptionId": "1",
      "createdAt": "2026-07-19T19:43:06.679Z",
      "updatedAt": "2026-07-21T15:46:08.956Z"
    },
    {
      "id": 2,
      "productId": "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      "quantity": 1,
      "deliveryOptionId": "2",
      "createdAt": "2026-07-19T19:43:06.680Z",
      "updatedAt": "2026-07-21T15:46:17.508Z"
    }];
  });

  it('displays the header correctly', () => {
    render(
      <MemoryRouter>
        <Header cart={cart} />
      </MemoryRouter>
    );

    const logo = screen.getByTestId('header-logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', LogoWhite);

    const mobileLogo = screen.getByTestId('header-mobile-logo');
    expect(mobileLogo).toHaveAttribute('src', MobileLogoWhite);

    const searchBar = screen.getByTestId('header-search-bar');
    expect(searchBar).toBeInTheDocument();

    // const searchButton = screen.getByTestId('header-search-button');
    // expect(searchButton).toBeInTheDocument();
    expect(screen.getByTestId('header-search-button')).toBeInTheDocument();

    let ordersLink = screen.getByTestId('header-orders-link');
    expect(ordersLink).toHaveTextContent('Orders');
    expect(ordersLink).toHaveAttribute('href', '/orders')

    const cartLink = screen.getByTestId('header-cart-link');
    expect(cartLink).toHaveTextContent('Cart');
    expect(cartLink).toHaveTextContent('3');
    expect(cartLink).toHaveAttribute('href', '/checkout');
  })
})