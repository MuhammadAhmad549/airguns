

import { Link } from 'react-router-dom';

// Define product data
export const productsData = [
  {
    id: 1,
    title: 'DIANA two-fifty',
    image: '/p3.jpg',
    // price: 'PKR 3000,000',
    description: 'The DIANA two-fifty is a precision air rifle featuring a break barrel system and rifled barrel, designed for single-shot accuracy and high performance. Ideal for both beginners and experienced shooters.',
    specs: {
      model: 'DIANA two-fifty',
      system: 'Break Barrel',
      barrel: 'Rifled Barrel',
      caliber: '4.5 mm pellet | 5.5 mm pellet',
      magazine: 'Single Shot',
      weight: '3.100 g • 6.8 lbs',
      length: '1.080 mm • 42.5"',
      barrelLength: '420 mm • 16.5"',
      velocity: '285 m/s • 935 fps | 230 m/s • 755 fps',
      energy: '22 J • 16.2 ft.lbs | 24 J • 17.7 ft.lbs'
    },
    priceRow: {
      '4.5mm': 'PKR 300,000',
      '5.5mm': 'PKR 350,000'
    },
  },
  {
    id: 2,
    title: 'DIANA Two-Sixty Air Rifle cal. 4,5 mm',
    image: '/p2.jpg',
    price: 'PKR 20,000',
    description: 'The DIANA two-sixty is a precision-engineered air rifle designed for consistent accuracy and solid performance. Featuring a rifled barrel and break barrel system, it is ideal for sport shooters and small game hunters.',
    specs: {
      model: 'DIANA two-sixty',
      system: 'Break Barrel',
      barrel: 'Rifled Barrel',
      caliber: '4.5 mm pellet | 5.5 mm pellet',
      magazine: 'Single Shot',
      weight: '3.200 g • 7.1 lbs',
      length: '1.100 mm • 43.3"',
      barrelLength: '440 mm • 17.3"',
      velocity: '290 m/s • 951 fps | 235 m/s • 771 fps',
      energy: '23 J • 17 ft.lbs | 25 J • 18.4 ft.lbs'
    },
    priceRow: {
      '4.5mm': 'PKR 300,000',
      '5.5mm': 'PKR 350,000'
    },

  },
  {
    id: 3,
    title: 'DIANA XR 200 - The new DIANA Performance Line',
    image: '/p4.jpg',
    price: 'PKR 20,000',
    description: 'The DIANA XR200 PCP Air Rifle is part of the new DIANA Performance Line. Designed for high-performance and precision, it features a rotatable manometer, slug-compatible barrel options, and true ambidextrous handling. With advanced features like an adjustable Olympic-grade trigger, built-in ALTAROS regulator, and Lothar Walther match-grade barrel, this rifle is a top-tier choice for professionals.',
    specs: {
      model: 'DIANA XR200 Premium',
      system: 'Pre-Charged Air Rifle (PCP)',
      barrel: 'Rifled Barrel',
      caliber: '4.5 mm (.177) | 5.5 mm (.22) | 6.35 mm (.25) | 7.62 mm (.30)',
      magazine: '14 shots | 12 shots | 10 shots | 8 shots',
      weight: '3000 g • 6.5 lbs',
      length: '1090 mm • 42.9"',
      barrelLength: '548 mm • 21.6"',
      velocity: '-',
      energy: '29 J • 21 ft.lbs | 45 J • 33 ft.lbs | 60 J • 44 ft.lbs | 80 J • 59 ft.lbs',
      fillPressure: '200 bar • 2900 PSI',
      airTubeVolume: '280 ml • 280 cc'
    },
    priceRow: {
      '4.5mm': 'PKR 300,000',
      '5.5mm': 'PKR 350,000',
      '6.35':'pkr 345555'
    },
  },
  {
    id: 4,
    title: 'DIANA stormrider®',
    image: '/stormrider.jpg',
    price: 'PKR 25,000',
    description: 'DIANA PCP air rifle with excellent price-performance ratio. The rifle can be used in single-shot mode as well as with the 9 shot drum magazine supplied. Maximum filling pressure is at 200 bar. The model has a 11mm prism rail, a silencer, an adjustable micrometric sight, a rubberized butt plate, and a manual safety. Diabolos up to 8.6mm can be fitted in the magazine supplied.',
    specs: {
      model: 'DIANA Stormrider® | DIANA Stormrider® Black',
      system: 'Pre-Charged Air Rifle (PCP)',
      barrel: 'Rifled Barrel',
      caliber: '4,5 mm (.177) pellet | 5,5 mm (.22) pellet',
      magazineCapacity: '9 shots | 7 shots',
      weight: '2.300 g • 5.1 lbs | 2.100 g • 4.6 lbs (black)',
      length: '1100 mm • 39,8“',
      barrelLength: '480 mm • 19“',
      maxVelocity: '320 m/s • 1050 fps | 290 m/s • 950 fps',
      maxEnergy: '27 J. • 20 ft∙lbs | 35 J. • 26 ft∙lbs',
      maxFillPressure: '200 bar • 2900 PSI',
      airTubeVolume: '100 ml • 100 cc',
      note: '*Measured maximum speed with lead pellet. Varies with legal requirements.'
    },
    priceRow: {
      '4.5mm': 'PKR 300,000',
      '5.5mm': 'PKR 350,000'
    },
  },
  {
    id: 5,
    title: 'DIANA-48',
    image: '/48.jpg',
    price: 'PKR 109,999',
    description: 'This fixed barrel long-range air rifle presents itself with power and precision. It has a side lever and an additional cocking guard. Thus, a bipod can be mounted easily. This high-performance model has a micrometer sight, which offers more contrast while aiming.',
    specs: {
      model: 'DIANA 48',
      system: 'Fixed Barrel: Side Cocking System',
      barrel: 'Rifled Barrel',
      caliber: '4,5 mm pellet | 5,5 mm pellet',
      magazineCapacity: 'Single Shot',
      weight: '4.200 g • 9.3 lbs',
      length: '1.100 mm • 43“',
      barrelLength: '440 mm • 17.3“',
      maxVelocity: '305 m/s • 1000 fps | 265 m/s • 870 fps',
      maxEnergy: '26 J. • 19.2 ft∙lbs | 32 J. • 23.6 ft∙lbs',
      note: '*Measured maximum speed with lead pellet. Varies with legal requirements.'
    },
    priceRow: {
      '4.5mm': 'PKR 300,000',
      '5.5mm': 'PKR 350,000'
    },
  }
];

export default function Products() {
  return (
    <div className="p-4 mt-10 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <Link
              to={`/products/${product.id}`}  // Pass product ID as part of URL
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl
               transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 sm:h-64 object-contain rounded-t-xl transition-transform duration-300 ease-in-out hover:scale-105"
                />
                

                {/* Price Tag
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
                  {product.price}
                </div> */}

                {/* Title Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-2xl">
                  <div className="text-white text-lg font-semibold">{product.title}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
