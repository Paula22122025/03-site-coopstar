"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, MapPin, Send, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-blue-950/40 text-white overflow-hidden relative border-t border-blue-900/20">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Contato & Localização</h2>
            <h3 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">
              Pronto para agilizar sua <span className="text-blue-500">logística?</span>
            </h3>
            <p className="text-slate-400 text-lg mb-12 max-w-lg">
              Estamos localizados estrategicamente em Moema para atender toda São Paulo com a maior rapidez. Entre em contato por qualquer canal.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-slate-800 p-4 rounded-2xl text-blue-400">
                  <PhoneCall size={24} />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-1">Fones</div>
                  <div className="text-xl font-bold">(11) 5052-3563</div>
                  <div className="text-xl font-bold">(11) 5051-4442</div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-slate-800 p-4 rounded-2xl text-blue-400">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-1">E-mail</div>
                  <div className="text-xl font-bold">coopstar_express@hotmail.com</div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-slate-800 p-4 rounded-2xl text-blue-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-1">Endereço</div>
                  <div className="text-xl font-bold">Av. Jurucê, 898 - Moema</div>
                  <div className="text-slate-400">São Paulo - SP, 04083-002</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-12 rounded-[2rem] shadow-2xl text-slate-900"
          >
            <h4 className="text-2xl font-bold mb-8">Envie uma mensagem</h4>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Nome</label>
                  <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Seu nome completo" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Telefone</label>
                  <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="(11) 99999-9999" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">E-mail</label>
                <input type="email" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="seu@email.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Assunto</label>
                <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                  <option>Solicitar Orçamento</option>
                  <option>Dúvidas Gerais</option>
                  <option>Trabalhe Conosco</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Mensagem</label>
                <textarea rows={4} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none" placeholder="Como podemos ajudar?"></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-3 active:scale-[0.98]">
                Enviar Mensagem
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
