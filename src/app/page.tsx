'use client';

import { useState } from "react";
import Image from "next/image";
import OfferModal from "./components/OfferModal";

export default function Home() {
  const [isOfferOpen, setIsOfferOpen] = useState(false);
  console.log("isOfferOpen:", isOfferOpen);

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-purple-900 text-white relative">
      {/* Decorative elements */}
      <div className="absolute overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center">
          {/* Decorative crown */}
          <div className="mb-8 relative">
            <div className="text-8xl mb-4">👑</div>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl"></div>
          </div>

          <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 animate-gradient-x font-burned">
            КУРС "КАК СТАТЬ АБДРОЙ" 🧠
          </h1>
          <p className="text-3xl mb-12 text-yellow-300 font-bold drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] font-title">
            ЕДИНСТВЕННЫЙ КУРС, КОТОРЫЙ НАУЧИТ ВАС БЫТЬ НАСТОЛЬКО ГЛУПЫМ, ЧТО ВЫ СТАНЕТЕ МИЛЛИОНЕРОМ!
          </p>
          
          {/* Price Section with 3D effect */}
          <div className="bg-gradient-to-br from-black/80 to-purple-900/80 p-8 rounded-2xl mb-16 transform hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,215,0,0.3)] border border-yellow-400/30">
            <div className="text-5xl font-bold text-red-500 mb-4 drop-shadow-[0_0_10px_rgba(255,0,0,0.5)] font-glitch">
              БЫЛА ЦЕНА: 1 РУБЛЬ
            </div>
            <div className="text-7xl font-bold text-green-500 mb-4 drop-shadow-[0_0_10px_rgba(0,255,0,0.5)] font-glitch">
              СЕЙЧАС: 10,000 РУБЛЕЙ
            </div>
            <div className="text-4xl text-yellow-400 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] font-vinyl">
              +10,000% К ПРИБЫЛИ! 🚀
            </div>
          </div>

          {/* Features with hover effects */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-black/50 to-purple-900/50 p-8 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] border border-yellow-400/20">
              <div className="text-6xl mb-4">🤔</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4 font-glitch">МОДУЛЬ 1</h3>
              <p className="text-lg font-title">Как забывать всё, что вы только что прочитали</p>
            </div>
            <div className="bg-gradient-to-br from-black/50 to-purple-900/50 p-8 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] border border-yellow-400/20">
              <div className="text-6xl mb-4">❓</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4 font-glitch">МОДУЛЬ 2</h3>
              <p className="text-lg font-title">Искусство задавать глупые вопросы</p>
            </div>
            <div className="bg-gradient-to-br from-black/50 to-purple-900/50 p-8 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] border border-yellow-400/20">
              <div className="text-6xl mb-4">😎</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4 font-glitch">МОДУЛЬ 3</h3>
              <p className="text-lg font-title">Как делать вид, что вы всё понимаете</p>
            </div>
          </div>

          {/* CTA Button with enhanced effects */}
          <a 
            href="https://t.me/abdraebuchii" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 text-black text-3xl font-bold py-6 px-16 rounded-full hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:shadow-[0_0_50px_rgba(255,215,0,0.8)] animate-gradient-x font-title cursor-pointer"
          >
            КУПИТЬ СЕЙЧАС И СТАТЬ АБДРОЙ! 🚀
          </a>

          {/* Offer Button */}
          <button 
            onClick={() => setIsOfferOpen(true)}
            className="mt-8 bg-gradient-to-r from-purple-500 via-red-500 to-purple-500 text-white text-2xl font-bold py-4 px-8 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(128,0,128,0.5)] hover:shadow-[0_0_50px_rgba(128,0,128,0.8)] animate-gradient-x font-glitch cursor-pointer"
          >
            ЧИТАТЬ ОФЕРТУ 📜
          </button>

          {/* Testimonials with enhanced design */}
          <div className="mt-24">
            <h2 className="text-5xl font-bold mb-12 text-yellow-300 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] font-vinyl">ОТЗЫВЫ НАШИХ АБДР:</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-black/50 to-purple-900/50 p-8 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] border border-yellow-400/20">
                <div className="text-6xl mb-4">🤪</div>
                <p className="text-xl testimonial-text">"Пасле курса я забыл как пальзоваца дверью. Тепере я милионер! Ашыпок больше нету!"</p>
                <p className="text-yellow-400 mt-4 text-lg testimonial-author">- Иван, бывший инжынер</p>
              </div>
              <div className="bg-gradient-to-br from-black/50 to-purple-900/50 p-8 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] border border-yellow-400/20">
                <div className="text-6xl mb-4">🤯</div>
                <p className="text-xl testimonial-text">"Я настолька глупый теперь, што дажэ не памню, как пратратил свой первый милион! Ашыпки больше нет!"</p>
                <p className="text-yellow-400 mt-4 text-lg testimonial-author">- Мария, экс-програмист</p>
              </div>
            </div>
          </div>

          {/* Guarantee with enhanced design */}
          <div className="mt-24 bg-gradient-to-br from-black/50 to-purple-900/50 p-10 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] border border-yellow-400/20">
            <div className="text-6xl mb-6">✨</div>
            <h2 className="text-5xl font-bold mb-6 text-yellow-300 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] font-vinyl">НАША ГАРАНТИЯ:</h2>
            <p className="text-2xl guarantee-text">
              Если после прохождения курса вы не станете настолько глупым, как Абдра, 
              мы вернём вам двойную цену курса! (Но вы всё равно останетесь глупым)
            </p>
          </div>

          {/* Huge Bottom Button */}
          <div className="mt-24 mb-20 relative w-[200vw] -ml-[50vw] overflow-visible">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 rounded-[200px] blur-3xl opacity-50 animate-pulse"></div>
            <a 
              href="https://t.me/abdraebuchii" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative inline-block bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 text-black text-8xl font-bold py-20 px-40 rounded-[200px] hover:scale-110 transition-all duration-300 shadow-[0_0_100px_rgba(255,215,0,0.8)] hover:shadow-[0_0_200px_rgba(255,215,0,1)] animate-gradient-x font-burned transform hover:rotate-2 whitespace-nowrap cursor-pointer"
            >
              СТАТЬ АБДРОЙ! 🧠 СТАТЬ АБДРОЙ! 🧠 СТАТЬ АБДРОЙ! 🧠
            </a>
          </div>
        </div>
      </div>

      {/* Offer Modal */}
      <OfferModal isOpen={isOfferOpen} onClose={() => setIsOfferOpen(false)} />
    </main>
  );
}
