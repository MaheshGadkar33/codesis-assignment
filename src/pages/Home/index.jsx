import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import Footer from '../../components/common/Footer';

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Lilypads Real Estate Investment Platform | Commercial Property Analytics & Portfolio Management</title>
                <meta name="description" content="Transform your real estate investing with Lilypads' advanced analytics platform. Access commercial property data, portfolio management tools, and collaboration features for data-driven investment decisions." />
                <meta property="og:title" content="Lilypads Real Estate Investment Platform | Commercial Property Analytics & Portfolio Management" />
                <meta property="og:description" content="Transform your real estate investing with Lilypads' advanced analytics platform. Access commercial property data, portfolio management tools, and collaboration features for data-driven investment decisions." />
            </Helmet>

            <main>
                <Header />
                <HeroSection />
                <AboutSection />
                <Footer />
            </main>
        </>
    );
};

export default HomePage;