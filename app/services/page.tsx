'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import Section1 from '@/components/services/Section1';
import Section2 from '@/components/services/Section2';
import Section3 from '@/components/services/Section3';
import Section4 from '@/components/services/Section4';
import Section5 from '@/components/services/Section5';
import Cta from '@/components/services/CTA';

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
                <ServicesHero />
                <Section1 />
                <Section2 />
                <Section3 />
                <Cta />
            </main>
            <Footer />
        </div>
    );
}
