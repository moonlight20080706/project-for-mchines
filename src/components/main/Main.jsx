import { useState } from 'react';
import style from './Main.module.css';
import image from '../../asetss/IMG_gum_vertical-1-1-1.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const categories = [
  'All', 'Elektronika', 'Kiyim', 'Kitoblar', 'O‘yinchoqlar',
  'Kitofblar', 'Kitoblwqewear', 'Kqefitoblar', 'Kiteroblar', 'Kitobefhlar',
  'Kitobergwslar', 'Kitnjyoblar', 'Kitoyblar', 'Kitoblar', 'Kiryghftoblar',
  'Kitoblettar', 'K34itoblar', 'Kitobfglar', 'Kitghoblar', 'weeg'
];

const cards = Array.from({ length: 14 }, (_, i) => ({
  img: image,
  title: `Mahsulot ${i + 1}`,
  desc: 'Bu mahsulot haqida ma’lumot. Bu mahsulot haqida batafsil ma’lumot, agar siz batafsil ko‘rmoqchi bo‘lsangiz, ko‘proq tugmasini bosing.',
  price: '$10',
}));

// 🔹 Har bir karta uchun alohida component
const Card = ({ card }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={style.card}>
      <img src={card.img} alt={card.title} />
      <h3>{card.title}</h3>

      <div className={expanded ? style.expandedText : style.collapsedText}>
        <p>{card.desc}</p>
      </div>

      {card.desc.length > 120 && (
        <span
          className={style.learnMore}
          onClick={() => setExpanded(!expanded)}
        >
        {expanded ? 'yopish <' : 'batafsil >'}

        </span>
      )}

      <span>{card.price}</span>
      <button >Savatga</button>
    </div>
  );
};

const Main = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <main className={style.main}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={style.mySwiper}
      >
        {Array.from({ length: 9 }, (_, i) => (
          <SwiperSlide key={i}>
            <img src={image} alt={`Slide ${i + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={style.categories}>
        {categories.map((cat, i) => (
          <button
            key={i}
            className={`${style['cat-btn']} ${
              activeCategory === cat ? style.active : ''
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={style.cards}>
        {cards.map((card, i) => (
          <Card key={i} card={card} />
        ))}
      </div>
    </main>
  );
};

export default Main;
