import { useState } from "react";
import { 
  MapPin, MessageCircle, Phone, ShoppingBag, 
  Instagram, Facebook, Youtube, Mail, Ghost, Clock, Music2 
} from "lucide-react";
import LinkCard from "./LinkCard";
import WorkingHoursModal from "./WorkingHoursModal";

const CardsGrid = () => {
  const [showHours, setShowHours] = useState(false);

  const cards = [
    {
      icon: <MapPin className="w-8 h-8" strokeWidth={1.6} />,
      iconBgColor: "bg-card-icon-map",
      title: "الموقع على الخريطة",
      description: "موقعنا: الشهداء الجنوبية، الطائف.",
      buttonText: "اضغط للانتقال",
      href: "https://maps.app.goo.gl/LDVTHkHri1QiMZj77",
    },
    {
      icon: <Clock className="w-8 h-8" strokeWidth={1.6} />,
      iconBgColor: "bg-card-icon-hours",
      title: "مواعيد العمل",
      description: "اضغط لمشاهدة مواعيد العمل لكل يوم.",
      buttonText: "شاهد المواعيد",
      onClick: () => setShowHours(true),
    },
    {
      icon: <Phone className="w-8 h-8" strokeWidth={1.6} />,
      iconBgColor: "bg-card-icon-phone",
      title: "اتصال مباشر",
      description: "اتصل بنا لأي استفسار عن الأجهزة، العروض، أو توفر المنتجات.",
      buttonText: "اتصل الآن",
      href: "tel:+966559859852",
    },
    {
      icon: <MessageCircle className="w-8 h-8" strokeWidth={1.6} />,
      iconBgColor: "bg-card-icon-whatsapp",
      title: "تواصل واتساب",
      description: "للاستفسار أو الطلب، راسلنا مباشرة عبر واتساب.",
      buttonText: "تواصل الآن",
      href: "https://wa.me/966559859852?text=مرحبا،%20أرغب%20في%20الاستفسار%20عن%20منتجاتكم%20والأسعار.",
    },
    {
      icon: <Ghost className="w-8 h-8" strokeWidth={1.6} />,
      iconBgColor: "bg-card-icon-snapchat",
      title: "سناب شات",
      description: "تابع سناباتنا اليومية والعروض الخاصة.",
      buttonText: "افتح سناب",
      href: "https://www.snapchat.com/add/eiffelstores.sa?share_id=DyziFdzUrKc&locale=ar-MA",
    },
    {
      icon: <Instagram className="w-8 h-8" strokeWidth={1.6} />,
      iconBgColor: "bg-card-icon-instagram",
      title: "إنستجرام",
      description: "أحدث العروض والمنتجات وتغطيات المتجر.",
      buttonText: "افتح إنستجرام",
      href: "https://www.instagram.com/eiffelstores.sa?igsh=bGRjMTF4MWtmeGk4",
    },
    {
      icon: <Facebook className="w-8 h-8" strokeWidth={1.6} />,
      iconBgColor: "bg-card-icon-facebook",
      title: "فيسبوك",
      description: "تابع أخبارنا وتفاعل معنا على فيسبوك.",
      buttonText: "افتح فيسبوك",
      href: "https://www.facebook.com/YOUR_FACEBOOK_PAGE",
    },
    {
      icon: <Youtube className="w-8 h-8" strokeWidth={1.6} />,
      iconBgColor: "bg-card-icon-youtube",
      title: "يوتيوب",
      description: "شاهد فيديوهات المنتجات والمراجعات والعروض.",
      buttonText: "افتح يوتيوب",
      href: "https://youtube.com/channel/UCM2oEZV3SrQHrB8_JwLwF5w?si=-_QB1ZwZpKiDX-cI",
    },
    {
      icon: <Mail className="w-8 h-8" strokeWidth={1.6} />,
      iconBgColor: "bg-card-icon-email",
      title: "البريد الإلكتروني",
      description: "راسلنا لأي استفسار أو عروض خاصة.",
      buttonText: "إرسال بريد",
      href: "mailto:eiffelstores.sa@gmail.com",
    },
    {
  icon: (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
    className="w-8 h-8"
  >
    <path d="M12.75 2h2.25c.138 1.295.84 2.483 1.93 3.327A5.54 5.54 0 0021 6.5v2.25a7.8 7.8 0 01-4.5-1.5v6.75a6 6 0 11-6-6c.276 0 .545.02.81.06v2.3a3.75 3.75 0 103.69 3.69V2z"/>
  </svg>
),
  iconBgColor: "bg-black",
  title: "تيك توك",
  description: "شاهد فيديوهات سريعة عن المنتجات والعروض والتجارب.",
  buttonText: "افتح تيك توك",
  href: "https://www.tiktok.com/@eiffelstores.sa?_r=1&_t=ZS-94TLpU7T1CD",
},
 {
  icon: <ShoppingBag className="w-8 h-8" strokeWidth={1.6} />,
  iconBgColor: "bg-card-icon-plants",
  title: "الدخول للمتجر الإلكتروني",
  description: "تصفح المنتجات والعروض واطلب بسهولة عبر موقعنا.",
  buttonText: "افتح المتجر",
  href: "https://eiffelstores.com/",
  target: "_blank",
  rel: "noopener noreferrer",
}
  ];

  return (
    <>
      <section className="pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <LinkCard
                key={card.title}
                {...card}
                delay={100 + index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <WorkingHoursModal isOpen={showHours} onClose={() => setShowHours(false)} />
    </>
  );
};

export default CardsGrid;
