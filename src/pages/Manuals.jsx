import React from 'react';
import { FaFilePdf } from 'react-icons/fa'; // FontAwesome icon

export default function Manuals() {
  const manuals = [
    { id: 3, title: 'User Manual - DIANA XR200', pdfUrl: 'Diana XR200.pdf' },
    { id: 4, title: 'User Manual - DIANA 48', pdfUrl: 'Diana 48.pdf' },
    { id: 5, title: 'User Manual - DIANA Stormrider', pdfUrl: 'Diana Stormrider.pdf' },
  ];

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Manuals</h1>
        <p className="text-lg text-gray-600 font-semibold ">
        Access detailed DIANA product manuals — preview online or download for your convenience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {manuals.map((manual) => (
          <div
            key={manual.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="p-6 flex-grow flex flex-col">
              {/* Title with Icon */}
              <h2 className="text-xl font-semibold text-gray-700 flex items-center justify-center gap-2 mb-4">
                <FaFilePdf className="text-red-500" />
                {manual.title}
              </h2>

              {/* PDF Preview */}
              <div className="flex-grow overflow-hidden rounded-lg border mb-6">
                <iframe
                  src={`${manual.pdfUrl}#toolbar=0`}
                  width="100%"
                  height="250px"
                  title={manual.title}
                  className="w-full"
                ></iframe>
              </div>

              {/* Download Button */}
              <a
                href={manual.pdfUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-3 rounded-lg text-center transition duration-300"
              >
                Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
