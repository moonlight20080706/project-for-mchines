// import style from './Main.module.css';
// import image from '../../asetss/IMG_gum_vertical-1-1-1.jpg';
// import p1 from '../../asetss/p1.jpg'
// import p2 from '../../asetss/p2.jpg'
// import p3 from '../../asetss/p3.jpg'
// import p4 from '../../asetss/p4.jpg'
// import p5 from '../../asetss/p5.jpg'

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import { useState, useEffect } from 'react';

// const categories = ['all', '1', '2', '3'];

// // Barcha kartalar ro'yxati
// const allCards = {
//   "1": Array.from({ length: 5 }, (_, i) => ({
//     img: image,
//     title: `Mahsulot ${i + 1}`,
//     desc: 'Bu mahsulot haqida ma’lumot. Bu mahsulot haqida batafsil ma’lumot, agar siz batafsil ko‘rmoqchi bo‘lsangiz, ko‘proq tugmasini bosing.',
//     price: '$10',
//   })),
//   "2": Array.from({ length: 6 }, (_, i) => ({
//     img: image,
//     title: `Mahsulot ${i + 1}`,
//     desc: 'Bu mahsulot haqida ma’lumot. Bu mahsulot haqida batafsil ma’lumot, agar siz batafsil ko‘rmoqchi bo‘lsangiz, ko‘proq tugmasini bosing.',
//     price: '$23',
//   })),
//   "3": Array.from({ length: 6 }, (_, i) => ({
//     img: image,
//     title: `Mahsulot ${i + 1}`,
//     desc: 'Bu mahsulot haqida ma’lumot. Bu mahsulot haqida batafsil ma’lumot, agar siz batafsil ko‘rmoqchi bo‘lsangiz, ko‘proq tugmasini bosing.',
//     price: '$1023',
//   })),
// };


// const swip_img = [
//   {
//     "img":p1,
//     "desc":"3 kundan keyin keladi"
//   },
//   {
//     "img":p2,
//     "desc":"bizni yangi kelgan tiglarimmiz "
//   },
//   {
//     "img":p3,
//     "desc":"sanoqli sonlari qoldi"
//   },
//   {
//     "img":p4,
//     "desc":"safita gap bo'lishi mumkin emas"
//   },
//   {
//     "img":p5,
//     "desc":"tez orada sotuvga qoyiladi"
//   },
// ]

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
//           {expanded ? 'yopish <' : 'batafsil >'}
//         </span>
//       )}

//       <span>{card.price}</span>
//       <button>Savatga</button>
//     </div>
//   );
// };

// const Main = () => {
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     if (activeCategory === 'all') {
//       // barcha kategoriyalardagi kartalarni birlashtiramiz
//       const merged = Object.values(allCards).flat();
//       setData(merged);
//     } else {
//       setData(allCards[activeCategory] || []);
//     }
//   }, [activeCategory]);

//   return (
//     <main className={style.main}>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 3500,
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
//         {
//   swip_img.map((item, i) => {
//     return (
//       <SwiperSlide key={i}>
//         <div className={style["info-card"]}>
//           <img src={item.img} alt={item.desc} />
//           <h3>{item.desc}</h3>
//         </div>
//       </SwiperSlide>
//     );
//   })
// }

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
//         {data.map((card, i) => (
//           <Card key={i} card={card} />
//         ))}
//       </div>
//     </main>
//   );
// };

// export default Main;




import style from './Main.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useState, useEffect } from 'react';
import p1 from '../../asetss/p1.jpg'
import p2 from '../../asetss/p2.jpg'
import p3 from '../../asetss/p3.jpg'
import p4 from '../../asetss/p4.jpg'
import p5 from '../../asetss/p5.jpg'





const swip_img = [
  { "img":p1, "desc":"3 kundan keyin keladi" },
  { "img":p2, "desc":"bizni yangi kelgan tiglarimmiz "},
  { "img":p3, "desc":"sanoqli sonlari qoldi"},
  { "img":p4, "desc":"safita gap bo'lishi mumkin emas"},
  { "img":p5, "desc":"tez orada sotuvga qoyiladi"},
]



const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products); // bu yerda "products" - bu array
      })
      .catch(err => console.error("Xatolik:", err));
  }, []);


  
// 🔹 Har bir karta uchun component
const Card = ({ card }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={style.card}>
      <img src={card.thumbnail} alt={card.title} />
      <h3>{card.title}</h3>

      <div className={expanded ? style.expandedText : style.collapsedText}>
        <p>{card.description}</p>
      </div>

      {card.description.length > 120 && (
        <span className={style.learnMore} onClick={() => setExpanded(!expanded)}>
          {expanded ? 'yopish <' : 'batafsil >'}
        </span>
      )}

      <span>${card.price}</span>
      <button>Savatga</button>
    </div>
  );
};


  return (
    <main className={style.main}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={style.mySwiper}
      >
        {swip_img.map((item, i) => (
          <SwiperSlide key={i}>
            <div className={style["info-card"]}>
              <img src={item.img} alt={item.desc} />
              <h3>{item.desc}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={style.cards}>
        {products.map((product) => (
          <Card key={product.id} card={product} />
        ))}
      </div>
    </main>
  );
};

export default Main;
