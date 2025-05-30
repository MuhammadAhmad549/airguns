
// import { useParams, useNavigate } from 'react-router-dom';
// import { FaWeightHanging, FaRuler, FaBullseye, FaTachometerAlt } from 'react-icons/fa';
// import { productsData } from './Products'; // Adjust the path as necessary

// export default function ProductDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const product = productsData.find(p => p.id === parseInt(id));

//   if (!product) return <div className="text-center p-8">Product not found</div>;

//   return (
//     <div className="relative max-w-5xl mx-auto p-4 text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-lg transition-colors duration-500">
//       {/* Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-4 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300"
//       >
//         &larr; Back to Products
//       </button>

//       {/* Product Image */}
//       <div className="relative bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-full h-56 sm:h-64 object-contain rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
//         />
//       </div>

//       {/* Price Tag
//       <p className="inline-block mt-4 bg-blue-600 text-white text-xl font-semibold px-8 
//       py-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
//   {product.price}
// </p> */}


//       {/* Title & Description */}
//       <h1 className="text-3xl font-bold mt-6 text-gray-900 dark:text-white">{product.title}</h1>
//       <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">{product.description}</p>

//       {/* Technical Specifications */}
//       {product.specs && (
//         <div className="mt-6 bg-white dark:bg-gray-800 shadow-md p-6 rounded-xl overflow-x-auto transition-colors duration-500">
//           <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Technical Specifications</h2>
//           <table className="w-full table-auto border-collapse text-left text-base">
//             <tbody>
//               {Object.entries(product.specs).map(([key, value]) => (
//                 <tr key={key} className="border-b border-gray-200 dark:border-gray-700">
//                   <th className="py-2 pr-4 text-gray-600 dark:text-gray-300 capitalize whitespace-nowrap">
//                     {key === 'velocity' && (
//                       <span className="flex items-center gap-2">
//                         <FaTachometerAlt /> Max. Velocity
//                       </span>
//                     )}
//                     {key === 'energy' && (
//                       <span className="flex items-center gap-2">
//                         <FaBullseye /> Max. Energy
//                       </span>
//                     )}
//                     {key === 'weight' && (
//                       <span className="flex items-center gap-2">
//                         <FaWeightHanging /> Weight
//                       </span>
//                     )}
//                     {key === 'length' && (
//                       <span className="flex items-center gap-2">
//                         <FaRuler /> Length
//                       </span>
//                     )}
//                     {!['velocity', 'energy', 'weight', 'length'].includes(key) &&
//                       key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
//                     }
//                   </th>
//                   <td className="py-2 text-gray-800 dark:text-gray-100">{value}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <p className="text-sm mt-4 italic text-gray-600 dark:text-gray-400">
//             *Measured maximum speed with lead pellet. May vary due to local legal restrictions.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }




import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  FaWeightHanging,
  FaRuler,
  FaBullseye,
  FaTachometerAlt,
} from 'react-icons/fa';
import { productsData } from './Products'; // Adjust if needed

const specIcons = {
  velocity: <FaTachometerAlt />,
  energy: <FaBullseye />,
  weight: <FaWeightHanging />,
  length: <FaRuler />,
};

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center py-16 text-lg font-semibold text-red-600">
        ❌ Product not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-xl transition-colors duration-500">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition"
      >
        &larr; Back to Products
      </button>

      {/* Product Image */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md mb-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-60 sm:h-72 object-contain rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="flex justify-end mb-4">
  <img
    src="/logo.jpg"
    alt="Diana Logo"
    className="h-12 sm:h-16 object-contain"
  />
</div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
        {product.title}
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        {product.description}
      </p>

      {/* Pricing */}
      {product.priceRow && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-black border-b-2 border-gray-300 pb-2 mb-6">
            Pricing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {['4.5mm', '5.5mm'].map((size) => (
              <div
                key={size}
                className={`rounded-lg p-6 shadow-md text-center border transition ${
                  size === '5.5mm'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-black'
                }`}
              >
                <h4 className="text-lg font-bold mb-2">{size}</h4>
                <p className="text-base font-semibold">
                  {product.priceRow[size] || 'N/A'}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technical Specifications */}
      {product.specs && (
        <div className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-xl transition duration-300 overflow-x-auto">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            Technical Specifications
          </h2>
          <table className="w-full table-auto border-collapse text-left text-base">
            <tbody>
              {Object.entries(product.specs).map(([key, value]) => (
                <tr
                  key={key}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <th className="py-2 pr-4 text-gray-600 dark:text-gray-300 capitalize whitespace-nowrap w-1/3">
                    <span className="flex items-center gap-2">
                      {specIcons[key] || null}
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) =>
                        str.toUpperCase()
                      )}
                    </span>
                  </th>
                  <td className="py-2 text-gray-800 dark:text-gray-100">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm mt-4 italic text-gray-600 dark:text-gray-400">
            * Measured max speed with lead pellet. May vary due to local legal
            restrictions.
          </p>
        </div>
      )}
    </div>
  );
}
