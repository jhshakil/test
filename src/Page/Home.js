import React from 'react';
import AboutSection from '../Components/AboutSection';
import AwardSection from '../Components/AwardSection';
import BlogSection from '../Components/BlogSection';
import FooterSection from '../Components/Common/FooterSection';
import CTASection from '../Components/CTASection';
import FeatureSection from '../Components/FeatureSection';
import HeroSection from '../Components/HeroSection';
import ProtfolioSection from '../Components/ProtfolioSection';
import RollAreaSection from '../Components/RollAreaSection';
import ServiceSection from '../Components/ServiceSection';

const Home = () => {
    return (
        <div>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <HeroSection />
                    <FeatureSection />
                    <RollAreaSection />
                    <ProtfolioSection />
                    <AboutSection />
                    <ServiceSection />
                    <AwardSection />
                    <CTASection />
                    <BlogSection />
                    <FooterSection />
                </div>
            </div>
        </div>
    );
};

export default Home;