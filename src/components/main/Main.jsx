// import style from './Main.module.css';
// import image from '../../asetss/IMG_gum_vertical-1-1-1.jpg';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import { useState, useEffect } from 'react';
// const categories = [
//  'all','1', '2', '3'
// ];


// const cards = Array.from({ length: 14 }, (_, i) => ({
//   "1":[
//       {
//         img: image,
//         title: `Mahsulot ${i + 1}`,
//         desc: 'Bu mahsulot haqida ma’lumot. Bu mahsulot haqida batafsil ma’lumot, agar siz batafsil ko‘rmoqchi bo‘lsangiz, ko‘proq tugmasini bosing.',
//         price: '$10', 
//   },
//    {
//         img: image,
//         title: `Mahsulot ${i + 1}`,
//         desc: 'Bu mahsulot haqida ma’lumot. Bu mahsulot haqida batafsil ma’lumot, agar siz batafsil ko‘rmoqchi bo‘lsangiz, ko‘proq tugmasini bosing.',
//         price: '$10', 
//   },
//    {
//         img: image,
//         title: `Mahsulot ${i + 1}`,
//         desc: 'Bu mahsulot haqida ma’lumot. Bu mahsulot haqida batafsil ma’lumot, agar siz batafsil ko‘rmoqchi bo‘lsangiz, ko‘proq tugmasini bosing.',
//         price: '$10', 
//   },
//    {
//         img: image,
//         title: `Mahsulot ${i + 1}`,
//         desc: 'Bu mahsulot haqida ma’lumot. Bu mahsulot haqida batafsil ma’lumot, agar siz batafsil ko‘rmoqchi bo‘lsangiz, ko‘proq tugmasini bosing.',
//         price: '$10', 
//   },
//    {
//         img: image,
//         title: `Mahsulot ${i + 1}`,
//         desc: 'Bu mahsulot haqida ma’lumot. Bu mahsulot haqida batafsil ma’lumot, agar siz batafsil ko‘rmoqchi bo‘lsangiz, ko‘proq tugmasini bosing.',
//         price: '$10', 
//   }
//   ],
//   "2":[
//      {
//         img: image,
//         title: `Mahsulot ${i + 1}`,
//         desc: 'Bu mahsulot haqida ma’lumot. Bu mahsulot haqida batafsil ma’lumot, agar siz batafsil ko‘rmoqchi bo‘lsangiz, ko‘proq tugmasini bosing.',
//         price: '$10', 
//   },
//    {
//         img: image,
//         title: `Mahsulot ${i + 1}`,
//         desc: 'Bu mahsulot haqida ma’lumot. Bu mahsulot haqida batafsil ma’lumot, agar siz batafsil ko‘rmoqchi bo‘lsangiz, ko‘proq tugmasini bosing.',
//         price: '$10', 
//   },
//    {
//         img: image,
//         title: `Mahsulot ${i + 1}`,
//         desc: 'Bu mahsulot haqida ma’lumot. Bu mahsulot haqida batafsil ma’lumot, agar siz batafsil ko‘rmoqchi bo‘lsangiz, ko‘proq tugmasini bosing.',
//         price: '$10', 
//   },
//    {
//         img: image,
//         title: `Mahsulot ${i + 1}`,
//         desc: 'Bu mahsulot haqida ma’lumot. Bu mahsulot haqida batafsil ma’lumot, agar siz batafsil ko‘rmoqchi bo‘lsangiz, ko‘proq tugmasini bosing.',
//         price: '$10', 
//   },
//    {
//         img: image,
//         title: `Mahsulot ${i + 1}`,
//         desc: 'Bu mahsulot haqida ma’lumot. Bu mahsulot haqida batafsil ma’lumot, agar siz batafsil ko‘rmoqchi bo‘lsangiz, ko‘proq tugmasini bosing.',
//         price: '$10', 
//   },
//    {
//         img: image,
//         title: `Mahsulot ${i + 1}`,
//         desc: 'Bu mahsulot haqida ma’lumot. Bu mahsulot haqida batafsil ma’lumot, agar siz batafsil ko‘rmoqchi bo‘lsangiz, ko‘proq tugmasini bosing.',
//         price: '$10', 
//   },
//   ],
//   "3":[
//      {
//         img: image,
//         title: `Mahsulot ${i + 1}`,
//         desc: 'Bu mahsulot haqida ma’lumot. Bu mahsulot haqida batafsil ma’lumot, agar siz batafsil ko‘rmoqchi bo‘lsangiz, ko‘proq tugmasini bosing.',
//         price: '$10', 
//   },
//    {
//         img: image,
//         title: `Mahsulot ${i + 1}`,
//         desc: 'Bu mahsulot haqida ma’lumot. Bu mahsulot haqida batafsil ma’lumot, agar siz batafsil ko‘rmoqchi bo‘lsangiz, ko‘proq tugmasini bosing.',
//         price: '$10', 
//   },
//    {
//         img: image,
//         title: `Mahsulot ${i + 1}`,
//         desc: 'Bu mahsulot haqida ma’lumot. Bu mahsulot haqida batafsil ma’lumot, agar siz batafsil ko‘rmoqchi bo‘lsangiz, ko‘proq tugmasini bosing.',
//         price: '$10', 
//   },
//    {
//         img: image,
//         title: `Mahsulot ${i + 1}`,
//         desc: 'Bu mahsulot haqida ma’lumot. Bu mahsulot haqida batafsil ma’lumot, agar siz batafsil ko‘rmoqchi bo‘lsangiz, ko‘proq tugmasini bosing.',
//         price: '$10', 
//   },
//    {
//         img: image,
//         title: `Mahsulot ${i + 1}`,
//         desc: 'Bu mahsulot haqida ma’lumot. Bu mahsulot haqida batafsil ma’lumot, agar siz batafsil ko‘rmoqchi bo‘lsangiz, ko‘proq tugmasini bosing.',
//         price: '$10', 
//   },
//    {
//         img: image,
//         title: `Mahsulot ${i + 1}`,
//         desc: 'Bu mahsulot haqida ma’lumot. Bu mahsulot haqida batafsil ma’lumot, agar siz batafsil ko‘rmoqchi bo‘lsangiz, ko‘proq tugmasini bosing.',
//         price: '$10', 
//   },
//   ]
// }
// ));

// // 🔹 Har bir karta uchun alohida component
// const Card = ({ card }) => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <div className={style.card}>
//       <img src={card.img} alt={card.title} />
//       <h3>{card.title}</h3>

//       <div className={expanded ? style.expandedText : style.collapsedText}>
//         <p>{card.desc}</p>
//       </div>

//       {card.desc.length > 120 && (
//         <span
//           className={style.learnMore}
//           onClick={() => setExpanded(!expanded)}
//         >
//         {expanded ? 'yopish <' : 'batafsil >'}

//         </span>
//       )}

//       <span>{card.price}</span>
//       <button >Savatga</button>
//     </div>
//   );
// };

// const [data, setData] = useState([])
// const [category, setCategory] = useState('all')
// const API = cards



// useEffect(() => {
//   fetch(API)
//     .then((res) => res.json())
//     .then((d) => setData(d))
//     .catch((err) => console.log(err.message));
// }, [category]);


// const Main = () => {
//   const [activeCategory, setActiveCategory] = useState('All');

//   return (
//     <main className={style.main}>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         loop={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className={style.mySwiper}
//       >
//         {Array.from({ length: 9 }, (_, i) => (
//           <SwiperSlide key={i}>
//             <img src={image} alt={`Slide ${i + 1}`} />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div className={style.categories}>
//         {categories.map((cat, i) => (
//           <button
//             key={i}
//             className={`${style['cat-btn']} ${
//               activeCategory === cat ? style.active : ''
//             }`}
//             onClick={() => setActiveCategory(cat)}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       <div className={style.cards}>
//         {cards.map((card, i) => (
//           <Card key={i} card={card} />
//         ))}
//       </div>
//     </main>
//   );
// };

// export default Main;

import style from './Main.module.css';
import image from '../../asetss/IMG_gum_vertical-1-1-1.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useState, useEffect } from 'react';

const categories = ['all', '1', '2', '3'];

// Barcha kartalar ro'yxati
const allCards = {
  "1": Array.from({ length: 5 }, (_, i) => ({
    img: image,
    title: `Mahsulot ${i + 1}`,
    desc: 'Bu mahsulot haqida ma’lumot. Bu mahsulot haqida batafsil ma’lumot, agar siz batafsil ko‘rmoqchi bo‘lsangiz, ko‘proq tugmasini bosing.',
    price: '$10',
  })),
  "2": Array.from({ length: 6 }, (_, i) => ({
    img: image,
    title: `Mahsulot ${i + 1}`,
    desc: 'Bu mahsulot haqida ma’lumot. Bu mahsulot haqida batafsil ma’lumot, agar siz batafsil ko‘rmoqchi bo‘lsangiz, ko‘proq tugmasini bosing.',
    price: '$10',
  })),
  "3": Array.from({ length: 6 }, (_, i) => ({
    img: image,
    title: `Mahsulot ${i + 1}`,
    desc: 'Bu mahsulot haqida ma’lumot. Bu mahsulot haqida batafsil ma’lumot, agar siz batafsil ko‘rmoqchi bo‘lsangiz, ko‘proq tugmasini bosing.',
    price: '$10',
  })),
};

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
      <button>Savatga</button>
    </div>
  );
};

const Main = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (activeCategory === 'all') {
      // barcha kategoriyalardagi kartalarni birlashtiramiz
      const merged = Object.values(allCards).flat();
      setData(merged);
    } else {
      setData(allCards[activeCategory] || []);
    }
  }, [activeCategory]);

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
        {data.map((card, i) => (
          <Card key={i} card={card} />
        ))}
      </div>
    </main>
  );
};

export default Main;
