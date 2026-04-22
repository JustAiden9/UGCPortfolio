import Hero from '@/components/hero';
import Stats from '@/components/stats';
import WorkReel from '@/components/work-reel';
import StickyTour from '@/components/sticky-tour';
import About from '@/components/about';
import Services from '@/components/services';
import Testimonials from '@/components/testimonials';

export default function Page() {
  return (
    <div className="relative">
      <Hero />
      <Stats />
      <WorkReel />
      <StickyTour />
      <About />
      <Services />
      <Testimonials />
    </div>
  );
}
