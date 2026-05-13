"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, MinusIcon } from "lucide-react";

const faqs = [
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos transferências bancárias, PIX, cartões de crédito e débito, além de faturamento mensal para empresas cadastradas.",
  },
  {
    question: "Vocês atendem fora de São Paulo?",
    answer: "Sim! Atendemos toda a Grande São Paulo e realizamos serviços para o interior e litoral mediante agendamento prévio.",
  },
  {
    question: "Como funciona o seguro das encomendas?",
    answer: "Todas as encomendas transportadas pela Coopstar Express possuem cobertura de seguro contra perdas ou danos durante o trajeto.",
  },
  {
    question: "Posso agendar uma entrega para outro dia?",
    answer: "Com certeza. Trabalhamos com agendamentos com hora marcada para garantir que sua logística funcione sem imprevistos.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Dúvidas Frequentes</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-white mb-6">FAQ</h3>
          <p className="text-slate-400">Tudo o que você precisa saber sobre nossos serviços.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-blue-900/30 rounded-2xl overflow-hidden shadow-sm bg-slate-900/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-blue-900/20 transition-colors"
              >
                <span className="text-lg font-bold text-slate-200">{faq.question}</span>
                {openIndex === index ? (
                  <MinusIcon className="text-blue-500" size={20} />
                ) : (
                  <PlusIcon className="text-slate-500" size={20} />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
