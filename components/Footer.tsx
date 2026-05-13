import React from "react";
import { Rocket } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-800 p-1.5 rounded-lg">
                <Rocket className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Coopstar<span className="text-blue-500">Express</span>
              </span>
            </div>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              Soluções logísticas inteligentes para um mundo em movimento. Agilidade, segurança e confiança em cada entrega.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500 transition-all">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500 transition-all">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500 transition-all">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><a href="#home" className="hover:text-blue-500 transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-blue-500 transition-colors">Quem Somos</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Serviços</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">LGPD</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Coopstar Express. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>Desenvolvido com</span>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span>por sua agência</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
