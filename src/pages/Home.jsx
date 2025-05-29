import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from 'framer-motion';

export default function Home() {
  const images = [
    { src: '/p3.jpg', title: 'Explore New Arrivals', btnText: 'Shop Now' },
    { src: '/p2.jpg', title: 'Limited Time Offer', btnText: 'Grab Deal' },
    { src: '/p4.jpg', title: 'Trendy Styles Await', btnText: 'Discover' },
    { src: '/48.jpg', title: 'Make Your Grip Stronger', btnText: 'Lets Deal' },

  ];

  const responsive = {
    desktop: { breakpoint: { max: 2000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-100 py-10 px-4 min-h-screen flex items-center justify-center"
    >
      <div className="w-full rounded-md max-w-5xl">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={4000}
            arrows={false}
            showDots={true}
            draggable
            swipeable
            keyBoardControl
            dotListClass="flex justify-center mt-4 space-x-2"
            itemClass="transition-transform duration-500 ease-in-out"
            containerClass="carousel-container"
            sliderClass="rounded-3xl overflow-hidden shadow-xl"
          >
            {images.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative w-full h-[60vh] md:h-[50vh] sm:h-[20vh] rounded-2xl overflow-hidden"
              >
                <img
                  src={item.src}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-full object-contain object-center"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-4">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-white text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg"
                  >
                    {item.title}
                  </motion.h2>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    <Link
                      to="/products"
                      className="bg-white text-black font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-200 transition duration-300 inline-block"
                    >
                      {item.btnText}
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </Carousel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-12 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Diana Airguns</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Diana has been a trusted name in the world of airguns for over a century. Known for their precision, power,
            and unmatched German engineering, Diana products offer a perfect blend of tradition and innovation. Whether
            you're a seasoned shooter, a hobbyist, or a beginner, our collection delivers high-quality craftsmanship and
            reliable performance in every shot. Explore our latest range of air rifles, pistols, and accessories designed
            to elevate your shooting experience.
          </p>
        </motion.div>
        
      </div>
                {/* <Link
            to="/products"
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition duration-300 inline-block"
            aria-label="Explore our products"
          >
            Explore Our Products
          </Link> */}

    </motion.div>
  );
}
