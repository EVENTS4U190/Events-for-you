'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const [lang, setLang] = useState("ar");
  const isArabic = lang === "ar";

  const toggleLang = () => setLang(isArabic ? "en" : "ar");

  const services = [
    { id: 1, ar: "تنسيق الزهور", en: "Floral Arrangements" },
    { id: 2, ar: "تزيين الطاولات", en: "Table Decorations" },
    { id: 3, ar: "تنسيق الحفلات الصغيرة", en: "Small Event Setup" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 p-4 md:p-8 relative">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          {isArabic ? "معرض أعمال Event for You" : "Event for You Portfolio"}
        </h1>
        <Button onClick={toggleLang}>
          {isArabic ? "English" : "العربية"}
        </Button>
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">
          {isArabic ? "من نحن" : "About Us"}
        </h2>
        <p className="max-w-2xl">
          {isArabic
            ? "نحن متخصصون في تنسيق الزهور وتزيين الحفلات الصغيرة والمتوسطة. نقدم تصاميم أنيقة ومميزة تناسب ذوقك ومناسبتك."
            : "We specialize in floral arrangements and decoration for small and medium-sized events. We provide elegant and unique designs tailored to your taste and occasion."}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          {isArabic ? "خدماتنا" : "Our Services"}
        </h2>
        <ul className="list-disc pl-6">
          {services.map((service) => (
            <li key={service.id} className="mb-1 text-blue-600 underline cursor-pointer">
              <a href={`#service-${service.id}`}>
                {isArabic ? service.ar : service.en}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {services.map((service) => (
        <section key={service.id} id={`service-${service.id}`} className="mb-10">
          <h2 className="text-xl font-semibold mb-2">
            {isArabic ? service.ar : service.en}
          </h2>
          <p>
            {isArabic
              ? "وصف مبدئي للخدمة مع إمكانية التخصيص لاحقًا."
              : "Initial description of the service, can be customized later."}
          </p>
        </section>
      ))}

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          {isArabic ? "معرض الصور" : "Gallery"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((img) => (
            <div key={img} className="bg-gray-100 h-48 rounded-xl shadow-md flex items-center justify-center text-gray-400">
              {isArabic ? `صورة ${img}` : `Image ${img}`}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">
          {isArabic ? "آراء العملاء" : "Customer Testimonials"}
        </h2>
        <div className="space-y-4">
          <blockquote className="p-4 bg-gray-50 border-l-4 border-pink-300">
            {isArabic
              ? "خدمة رائعة وتصاميم جميلة!"
              : "Great service and beautiful designs!"}
          </blockquote>
          <blockquote className="p-4 bg-gray-50 border-l-4 border-pink-300">
            {isArabic
              ? "فريق متعاون وذوق رفيع. أنصح بالتعامل معهم."
              : "Cooperative team with great taste. Highly recommended."}
          </blockquote>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">
          {isArabic ? "تواصل معنا" : "Contact Us"}
        </h2>
        <p>
          {isArabic
            ? "للحجوزات والاستفسارات، يرجى التواصل عبر إنستغرام أو واتساب:"
            : "For bookings and inquiries, please contact us via Instagram or WhatsApp:"}
        </p>
        <div className="flex flex-col gap-2 mt-2">
          <a
            href="https://www.instagram.com/kefah_khdair"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            @kefah_khdair
          </a>
          <a
            href="https://wa.me/971505560597"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 underline"
          >
            WhatsApp: +971 50 556 0597
          </a>
        </div>
      </section>

      <a
        href="https://wa.me/971505560597"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        {isArabic ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
      </a>
    </div>
  );
}