import Header from '@/app/components/header';
import Hero from '@/app/components/hero';
import Metrics from '@/app/components/metrics';
import Recent_trades from '@/app/components/recent_trades';
import About_company from '@/app/components/about_company';
import Pricing_plans from '@/app/components/pricing_plans';
import Faq_section from '@/app/components/faq_section';
import Footer from '@/app/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className='w-full'>
        <Hero />
        <Metrics title={'цифры'} date={'Сентябрь 2022'} />
        <Recent_trades />
        <About_company />
        <Pricing_plans />
        <Faq_section />
      </main>
      <Footer />
    </>
  );
}
