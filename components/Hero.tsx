"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, Clock, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-height-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Disponível 24/7 em São Paulo
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Sua encomenda no lugar certo, <span className="text-blue-600">na hora certa.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              A Coopstar Express é especialista em logística urbana e serviços de moto frete com mais de 10 anos de experiência. Agilidade, segurança e confiança para o seu negócio.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 group">
                Solicitar Coleta
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:text-blue-600">
                Ver Tabela de Preços
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="flex flex-col gap-1">
                <div className="text-3xl font-bold text-slate-900">10+</div>
                <div className="text-sm text-slate-500 font-medium">Anos de Mercado</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-3xl font-bold text-slate-900">24h</div>
                <div className="text-sm text-slate-500 font-medium">Atendimento</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-3xl font-bold text-slate-900">100%</div>
                <div className="text-sm text-slate-500 font-medium">Segurança</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1470&auto=format&fit=crop" 
                alt="Moto Frete Coopstar" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </div>
            
            {/* Floating Info Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100"
            >
              <div className="bg-green-100 p-2 rounded-lg text-green-600">
                <ShieldCheck />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Carga Segurada</div>
                <div className="text-xs text-slate-500">Garantia total</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100"
            >
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                <Clock />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Rápida Entrega</div>
                <div className="text-xs text-slate-500">Média de 40min</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
