import React from 'react';
import { HomePage } from '../components/HomePage/HomePage';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export const Home = () => {
    return (
        <>
            <Header />
            <HomePage />
            <Footer />
        </>
    )
}
