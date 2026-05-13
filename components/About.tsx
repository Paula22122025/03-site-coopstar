"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const highlights = [
    "Atendimento 24 horas por dia",
    "Equipe especializada e uniformizada",
    "Mais de 10 anos de experiência",
    "Atendimento em SP e Grande SP",
    "Agendamento com hora marcada",
    "Seguro de carga e responsabilidade",
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border border-blue-900/30">
              <img 
                src="https://images.unsplash.com/photo-1591033594798-33227a05780d?q=80&w=1470&auto=format&fit=crop" 
                alt="Equipe Coopstar" 
                className="w-full h-auto opacity-90"
              />
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-900/30 rounded-3xl -z-10 rotate-6" />
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-800/10 rounded-full -z-10 animate-pulse" />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Quem Somos</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
              Uma década movendo <span className="text-blue-500">São Paulo</span> com eficiência.
            </h3>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                A <strong>Coopstar Express</strong> nasceu com a missão de agilizar a logística urbana em uma das cidades mais dinâmicas do mundo. Com mais de nove anos de atuação, nos tornamos referência em destaque no segmento de entregas rápidas.
              </p>
              <p>
                Nossa equipe é rigorosamente selecionada e treinada para garantir que sua empresa tenha o êxito esperado em cada despacho ou coleta. Operamos <strong>24 horas de segunda a domingo</strong>, garantindo que você nunca fique na mão.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-blue-500 shrink-0" size={20} />
                  <span className="text-slate-200 font-semibold">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
