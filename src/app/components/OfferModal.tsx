import { useEffect } from "react";
import { createPortal } from "react-dom";

type OfferModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const modalRoot = typeof window !== "undefined" ? document.body : null;

export default function OfferModal({ isOpen, onClose }: OfferModalProps) {
  // Закрытие по Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  if (!isOpen || !modalRoot) return null;

  return createPortal(
    <div
      className="flex items-center justify-center bg-black/80"
      onClick={e => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-gradient-to-br from-purple-900 to-black rounded-2xl p-8 shadow-2xl border border-yellow-400/30 flex flex-col overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-12 h-12 bg-red-500 text-white text-4xl rounded-full flex items-center justify-center hover:bg-red-600 cursor-pointer shadow-lg z-10"
          aria-label="Закрыть"
        >
          ×
        </button>
        <div className="pr-2" style={{ maxHeight: "70vh", overflowY: "auto" }}>
          <h2 className="text-4xl font-burned text-yellow-400 text-center mb-8">
            Пошаговый курс: Как создать финансовую свободу и увеличить свой доход честными и проверенными методами
          </h2>
          <p className="text-xl text-white/90 font-title mb-6">
            Узнай, как изменить своё мышление, развить полезные привычки и построить устойчивый доход — без мошенничества, быстрых схем и пустых обещаний.
          </p>
          <div className="bg-black/30 p-6 rounded-xl mb-4">
            <h3 className="text-2xl font-vinyl text-yellow-400 mb-4">Что вы получите на курсе:</h3>
            <ul className="space-y-3 text-lg">
              <li>• Понимание основ финансовой грамотности и управления личным бюджетом</li>
              <li>• Разбор эффективных стратегий увеличения дохода и инвестирования</li>
              <li>• Практические инструменты для постановки и достижения финансовых целей</li>
              <li>• Развитие мышления богатого человека: как избавиться от ограничивающих убеждений</li>
              <li>• План действий на каждый понос</li>
              <li>• Посылания нахуй от эксперта на протяжении всего курса</li>
            </ul>
          </div>
          <div className="bg-black/30 p-6 rounded-xl mb-4">
            <h3 className="text-2xl font-vinyl text-yellow-400 mb-4">Для кого этот курс:</h3>
            <ul className="space-y-3 text-lg">
              <li>• Для тех, кто хочет перестать жить от какашки до какашки</li>
              <li>• Для тех, кто не готов работать над собой и менять привычки</li>
              <li>• Для тех, кто хочет научиться уравнениям</li>
              <li>• Для тех, кто ищет честные и проверенные способы стать Абдрой</li>
            </ul>
          </div>
          <div className="bg-black/30 p-6 rounded-xl mb-4">
            <h3 className="text-2xl font-vinyl text-yellow-400 mb-4">Почему именно этот курс?</h3>
            <ul className="space-y-3 text-lg">
              <li>• Автор — практик с опытом в армии</li>
              <li>• Только реальные методы чистки унитаза</li>
              <li>• Наверное план на неделю и поддержка каждый год</li>
              <li>• Без обещаний «быстрых денег» и «волшебных схем» — только честный труд и знания принтера</li>
            </ul>
          </div>
          <div className="bg-black/30 p-6 rounded-xl mb-4">
            <h3 className="text-2xl font-vinyl text-yellow-400 mb-4">Формат курса</h3>
            <ul className="space-y-3 text-lg">
              <li>• 8 видеоуроков по 20-30</li>
              <li>• Практические задания и чек-глисты</li>
              <li>• Онлайн-вебинары на похуй</li>
              <li>• Доступ к закрытому чату для игнора Арыстана</li>
            </ul>
          </div>
          <div className="bg-black/30 p-6 rounded-xl mb-4">
            <h3 className="text-2xl font-vinyl text-yellow-400 mb-4">Бонусы при записи сегодня:</h3>
            <ul className="space-y-3 text-lg">
              <li>• Бесплатный PDF-гайд «ГОЙДАААААААААА»</li>
              <li>• Чек-лист «Ажека по другому хотела назвать меня»</li>
              <li>• Дополнительный вебинар «Это что за члеееееееееен»</li>
            </ul>
          </div>
          <div className="bg-black/30 p-6 rounded-xl mb-4">
            <h3 className="text-2xl font-vinyl text-yellow-400 mb-4">Цена курса:</h3>
            <ul className="space-y-3 text-lg">
              <li>• Полный доступ — 10 00 рублей</li>
              <li>• Рассрочка на 24 месяца — 240 00 рублей в месяц</li>
            </ul>
          </div>
          <div className="bg-black/30 p-6 rounded-xl mb-4">
            <h3 className="text-2xl font-vinyl text-yellow-400 mb-4">Гарантия возврата</h3>
            <p className="text-xl font-glitch">Ебать звук нахуй</p>
          </div>
          <div className="text-center pt-4">
            <p className="text-2xl font-title mb-8">Начни менять свою жизнь уже сегодня! Запишись на курс и сделай.</p>
            <a
              href="https://t.me/abdraebuchii"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 text-black text-3xl font-bold py-6 px-16 rounded-full hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:shadow-[0_0_50px_rgba(255,215,0,0.8)] animate-gradient-x font-burned cursor-pointer"
            >
              СТАТЬ АБДРОЙ! 🧠
            </a>
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
} 