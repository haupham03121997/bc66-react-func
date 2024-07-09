import React , { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';
// import HomePage from '../pages/HomePage';
// import AboutPage from '../pages/AboutPage';

// import ServicePage from '../pages/ServicePage';
// import PricingPage from '../pages/PricingPage';
// import ContactPage from '../pages/ContactPage';
// import MovieDetailsPage from '../pages/MovieDetailsPage';
// import LoginPage from '../pages/LoginPage';
// import NotFound from '../pages/NotFound';
// import DemoUseRef from "../hooks/DemoUseRef/DemoUseRef";
// import DemoMeMo from "../hooks/DemoMemo/DemoMeMo";

import UserLayout from '../layouts/UserLayout';
import AuthLayout from '../layouts/AuthLayout';

const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ServicePage = lazy(() => import('../pages/ServicePage'));
const PricingPage = lazy(()=> import("../pages/PricingPage"));
const ContactPage = lazy(()=> import("../pages/ContactPage"));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const DemoUseRef = lazy(() => import('../hooks/DemoUseRef/DemoUseRef'));
const DemoMeMo = lazy(() => import('../hooks/DemoMemo/DemoMeMo'));
const NotFound = lazy(() => import('../pages/NotFound'));

const useRouteElement = () => {
  const routes = useRoutes([
    {
      path: '',
      element: <UserLayout />,
      children: [
        {
          index: true,
          path: '',
          element: (
            <Suspense fallback={<p>Loading....</p>}>
              <HomePage />
            </Suspense>
          ),
        },
        {
          path: '/about',
          element: (
            <Suspense fallback={<p>Loading....</p>}>
              <AboutPage />
            </Suspense>
          ),
        },
        {
          path: '/service',
          element: (
            <Suspense fallback={<p>Loading....</p>}>
              <ServicePage />
            </Suspense>
          ),
        },
        {
          path: '/pricing',
          element: (
            <Suspense fallback={<p>Loading....</p>}>
              <PricingPage />
            </Suspense>
          ),
        },
        {
          path: '/contact',
          element: (
            <Suspense fallback={<p>Loading....</p>}>
              <ContactPage />
            </Suspense>
          ),
        },
      ],
    },

    {
      path: '/movie/:id',
      element: (
        <Suspense fallback={<p>Loading....</p>}>
          <MovieDetailsPage />
        </Suspense>
      ),
    },
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        {
          path: '/auth/login',
          element: (
            <Suspense fallback={<p>Loading....</p>}>
              <LoginPage />
            </Suspense>
          ),
        },
        {
          path: '/auth/register',
          element: <LoginPage />,
        },
      ],
    },
    {
      path: '/demo-hooks',
      children: [
        {
          index: true,
          path: '/demo-hooks/use-ref',
          element: <DemoUseRef />,
        },
        {
          path: '/demo-hooks/memo',
          element: <DemoMeMo />,
        },
      ],
    },
    { path: '*', element: <NotFound /> },
  ]);

  return routes;
};

export default useRouteElement;
