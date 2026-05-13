"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, Clock, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.png" 
          alt="Logística de Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-navy-900/40" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 text-blue-300 border border-blue-800 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Disponível 24/7 em São Paulo
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
              Sua encomenda no lugar certo, <span className="text-blue-500">na hora certa.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
              A Coopstar Express é especialista em logística urbana e serviços de moto frete com mais de 10 anos de experiência. Agilidade, segurança e confiança para o seu negócio.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-800 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 group border border-blue-700">
                Solicitar Coleta
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent border-2 border-slate-700 hover:border-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-white/5">
                Ver Tabela de Preços
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="flex flex-col gap-1">
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-sm text-slate-400 font-medium">Anos de Mercado</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-3xl font-bold text-white">24h</div>
                <div className="text-sm text-slate-400 font-medium">Atendimento</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-slate-400 font-medium">Segurança</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
