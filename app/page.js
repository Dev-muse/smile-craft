import Image from "next/image";

import {
  Hero, About, Services,
  Team, Pricing, Blog, Contact
} from './components'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Team />
      <Pricing />
      <Blog />
      <Contact />
    </main>
  );
}
