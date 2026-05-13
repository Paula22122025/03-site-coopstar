import React from "react";
import { Rocket } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Rocket className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Coopstar<span className="text-blue-600">Express</span>
              </span>
            </div>
            <p className="text-slate-500 mb-8 max-w-sm leading-relaxed">
              Soluções logísticas inteligentes para um mundo em movimento. Agilidade, segurança e confiança em cada entrega.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><a href="#home" className="hover:text-blue-600 transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-blue-600 transition-colors">Quem Somos</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Serviços</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">LGPD</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Coopstar Express. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>Desenvolvido com</span>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span>por sua agência</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
