import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Coopstar Express | Serviços de Moto Frete em São Paulo",
  description: "Entregas rápidas, seguras e confiáveis em SP e Grande SP. Atendimento 24h para empresas e delivery. Mais de 10 anos de experiência.",
  keywords: "moto frete, entregas rápidas, delivery são paulo, moema moto frete, coopstar express",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
