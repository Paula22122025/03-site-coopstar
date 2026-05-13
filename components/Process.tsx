"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, ClipboardList, Package, CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Solicitação",
    desc: "Peça sua coleta via telefone, WhatsApp ou pelo nosso formulário online.",
    icon: ClipboardList,
  },
  {
    title: "Coleta",
    desc: "Nosso motorista mais próximo chega ao local em tempo recorde.",
    icon: Search,
  },
  {
    title: "Transporte",
    desc: "Sua encomenda segue o caminho mais rápido com monitoramento.",
    icon: Package,
  },
  {
    title: "Entrega",
    desc: "Protocolo digital de recebimento e confirmação em tempo real.",
    icon: CheckCircle,
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Processo de Trabalho</h2>
          <h3 className="text-4xl font-black text-slate-900 mb-6">Como funciona nosso serviço?</h3>
          <p className="text-slate-600">Simples, rápido e transparente. Do pedido à entrega final.</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center z-10"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-blue-200">
                  <step.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
