import React from 'react';
import { useRoutes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicePage from '../pages/ServicePage';
import PricingPage from '../pages/PricingPage';
import ContactPage from '../pages/ContactPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import UserLayout from '../layouts/UserLayout';
import LoginPage from '../pages/LoginPage';
import AuthLayout from '../layouts/AuthLayout';
import NotFound from '../pages/NotFound';

const useRouteElement = () => {
  const routes = useRoutes([
    {
      path: '',
      element: <UserLayout />,
      children: [
        {
          index: true,
          path: '',
          element: <HomePage />,
        },
        {
          path: '/about',
          element: <AboutPage />,
        },
        {
          path: '/service',
          element: <ServicePage />,
        },
        {
          path: '/pricing',
          element: <PricingPage />,
        },
        {
          path: '/contact',
          element: <ContactPage />,
        },
      ],
    },

    { path: '/movie/:id', element: <MovieDetailsPage /> },
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        { path: '/auth/login', element: <LoginPage /> },
        {
          path: '/auth/register',
          element: <LoginPage />,
        },
      ],
    },
    { path: '*', element: <NotFound /> },
  ]);

  return routes;
};

export default useRouteElement;
