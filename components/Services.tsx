"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bike, Box, Globe, Utensils, ClipboardCheck, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Moto Frete Convencional",
    description: "Entregas rápidas de documentos, serviços bancários, cartórios e pequenos volumes em toda a cidade.",
    icon: Bike,
    color: "blue",
  },
  {
    title: "Serviço de Delivery",
    description: "Ideal para farmácias, pizzarias e restaurantes que buscam pontualidade e apresentação impecável.",
    icon: Utensils,
    color: "green",
  },
  {
    title: "Entregas Fora da Capital",
    description: "Logística especializada para viagens intermunicipais e entregas em toda a Grande São Paulo.",
    icon: Globe,
    color: "purple",
  },
  {
    title: "Contratos Corporativos",
    description: "Planos mensais personalizados para empresas que demandam alto volume de entregas e coletas.",
    icon: ClipboardCheck,
    color: "orange",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Nossos Serviços</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
            Soluções completas para suas necessidades de transporte.
          </h3>
          <p className="text-slate-600 text-lg">
            Combinamos tecnologia e experiência para oferecer o melhor serviço de logística urbana da região.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all cursor-default"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 ${
                service.color === "blue" ? "bg-blue-100 text-blue-600" :
                service.color === "green" ? "bg-green-100 text-green-600" :
                service.color === "purple" ? "bg-purple-100 text-purple-600" :
                "bg-orange-100 text-orange-600"
              }`}>
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <button className="flex items-center gap-2 text-sm font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Saiba Mais <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
