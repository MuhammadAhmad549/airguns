import { Link } from 'react-router-dom';

// Define product data
export const productsData = [
  {
    id: 1,
    title: 'DIANA two-fifty',
    image: '/p3.jpg',
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
      // '4.5mm': 'Out of Stock',
      '5.5mm': 'PKR 80,000'
    },
  },
  {
    id: 2,
    title: 'DIANA Two-Sixty Air Rifle cal. 4,5 mm',
    image: '/p2.jpg',
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
      // '4.5mm': 'Out of Stock',
      '5.5mm': 'PKR 75,000'
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
      length: '1100 mm • 39,8"',
      barrelLength: '480 mm • 19"',
      maxVelocity: '320 m/s • 1050 fps | 290 m/s • 950 fps',
      maxEnergy: '27 J. • 20 ft∙lbs | 35 J. • 26 ft∙lbs',
      maxFillPressure: '200 bar • 2900 PSI',
      airTubeVolume: '100 ml • 100 cc',
      note: '*Measured maximum speed with lead pellet. Varies with legal requirements.'
    },
    priceRow: {
      // '4.5mm': 'Out of stock',
      '5.5mm': 'PKR 99,500'
    },
  },
  {
    id: 6,
    title: 'Diana Outlaw PCP Air Rifle .25',
    image: '/dianaoutlaw25.png',
    description: 'The Diana company has a reputation for building some of the highest quality, most solidly made, precision airguns in the last 100 years. The new management team at Diana recognizes the company’s fine tradition of quality and value and is dedicated to ensuring that new products maintain this tradition. The Outlaw is a PCP air rifle in the Sport Line from Diana. It offers impressive performance and features at an affordable price. The Outlaw sports an easy side-lever cocking and loading system, adjustable two-stage trigger, and very good accuracy via a special barrel and breech system. Its regulated action provides impressive consistency and shot count per fill. A color-coded pressure gauge shows air charge status, and a dust cover protects the probe-style fill port.',
    specs: {
      model: 'Diana Outlaw',
      system: 'PCP (Pre-Charged Pneumatic)',
      barrel: 'Special Barrel and Breech System',
      caliber: '.25',
      magazineCapacity: 'Multi-Shot',
      weight: '3.06 kg • 6.75 lbs',
      length: '1.05 m • 41.5"',
      barrelLength: '457 mm • 18"',
      maxVelocity: 'N/A',
      maxEnergy: 'up to 38 ft∙lbs',
      note: 'Regulated action for consistency. Color-coded gauge and dust cover for fill port included.'
    },
    priceRow: {
      // '4.5mm': 'Out of stock',
      '5.5mm': 'PKR 225,000'
    }
  },
  {
    id: 7,
    title: 'DIANA two-forty',
    image: '/twoforty.jpg', // Replace with the actual image path
    description: 'The DIANA two-forty is a classic break barrel air rifle known for its reliability and precision. It is suitable for recreational shooting and small game hunting.',
    specs: {
      model: 'DIANA two-forty',
      system: 'Break Barrel',
      barrel: 'Rifled Barrel',
      caliber: '4.5 mm (.177)',
      magazine: 'Single Shot',
      weight: '2,720 g • 6.0 lbs',
      length: '1,020 mm • 40.2"',
      barrelLength: '420 mm • 16.5"',
      velocity: '175 m/s • 575 fps',
      energy: '7.5 J • 5.5 ft.lbs',
      shaftMaterial: 'Beech',
      backup: 'Automatic'
    },
    priceRow: {
      '4.5mm': 'PKR 70,000',
    },
  },
  {
    id: 8,
    title: 'DIANA 21 FBB',
    image: '/diana21.jpg', // Replace with the actual image path
    description: 'The DIANA 21 FBB is a powerful break barrel air rifle designed for high performance and accuracy. It is ideal for serious shooters and hunters.',
    specs: {
      model: 'DIANA 21 FBB',
      system: 'Break Barrel',
      barrel: 'Rifled Barrel',
      caliber: '4.5 mm',
      magazine: 'Single Shot',
      weight: '2,840 g • 6.3 lbs',
      length: '1,160 mm • 45.7"',
      velocity: '170 m/s • 558 fps',
      energy: '11 J • 8.1 ft.lbs',
      railType: '11 mm (dovetail)',
      fuse: 'Yes',
      powerSupplyType: 'Spring'
    },
    priceRow: {
      '4.5mm': 'PKR 70,000',
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
              to={`/products/${product.id}`}
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden"
            >
              <div className="relative">
                <div className="flex justify-end mb-4">
  <img
    src="/logo.jpg"
    alt="Diana Logo"
    className="h-4 sm:h-8 object-contain"
  />
</div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 sm:h-64 object-contain rounded-t-xl transition-transform duration-300 ease-in-out hover:scale-105"
                />
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
