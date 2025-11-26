

import React from 'react';
import { UploadCloud, X, Check, Bold, Italic, List, ImageIcon } from 'lucide-react';

const Tag = ({ name }) => (
  <span className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded-full flex items-center">
    {name}
    <X className="w-3 h-3 ml-2 cursor-pointer text-gray-500 hover:text-gray-800" />
  </span>
);

export default function ProductForm() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* LEFT COLUMN: Product Details Form (2/3 width on large screens) */}
      <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg space-y-6">
        <form className="space-y-6">
          
          {/* Product Name */}
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-700 block mb-1">Product Name</label>
            <input type="text" id="name" placeholder="Type name here" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500" />
          </div>

          {/* Description (Rich Text Editor Placeholder) */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Description</label>
            <div className="border border-gray-300 rounded-lg bg-white">
              {/* Toolbar */}
              <div className="p-2 border-b border-gray-200 flex space-x-2 text-gray-500">
                <Bold className="w-4 h-4 cursor-pointer hover:text-violet-600" />
                <Italic className="w-4 h-4 cursor-pointer hover:text-violet-600" />
                <List className="w-4 h-4 cursor-pointer hover:text-violet-600" />
                <ImageIcon className="w-4 h-4 cursor-pointer hover:text-violet-600" />
                {/* ... other editor controls ... */}
              </div>
              {/* Text Area */}
              <textarea placeholder="Type description here" rows="5" className="w-full p-3 resize-none border-none focus:ring-0 text-gray-600"></textarea>
            </div>
          </div>
          
          {/* Category & Brand */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Category</label>
              <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500">
                <option>Type Category here</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Brand</label>
              <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500">
                <option>Type brand name here</option>
              </select>
            </div>
          </div>

          {/* SKU & Stock Quantity */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">SKU</label>
              <input value="FOA-2563" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500 bg-gray-50" readOnly />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Stock quantity</label>
              <input value="1258" type="number" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500" />
            </div>
          </div>
          
          {/* Prices */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Regular Price</label>
              <input value="$500" type="text" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Sale Price</label>
              <input value="$450" type="text" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500" />
            </div>
          </div>

          {/* Tax Status & Class */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Tax status</label>
              <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500">
                <option>Taxable</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Tax class</label>
              <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500">
                <option>Standard</option>
              </select>
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Tag</label>
            <div className="flex flex-wrap gap-2 p-3 border border-gray-300 rounded-lg min-h-11">
              <Tag name="Smartwatch" />
              <Tag name="Apple" />
              <Tag name="Watch" />
              <Tag name="Smartphone" />
              <Tag name="iPhone13 max" />
              {/* Input for new tag would go here */}
            </div>
          </div>
        </form>
      </div>

      {/* RIGHT COLUMN: Image & Gallery (1/3 width on large screens) */}
      <div className="lg:col-span-1 space-y-6">
        
        {/* Main Product Image Placeholder */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold mb-3">Product Image</h2>
          <div className="flex justify-center items-center">
            {/* Replace with Next.js Image component */}
            <div className="w-full h-auto bg-gray-100 rounded-lg aspect-square flex justify-center items-center">
                
            </div>
          </div>
        </div>

        {/* Product Gallery Section */}
        <div className="gallery-upload bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Product Gallery</h2>

          {/* Upload Area */}
          <div className="border-2 border-dashed border-gray-300 p-8 text-center rounded-lg mb-4 hover:border-violet-500 transition cursor-pointer">
            <UploadCloud className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-500">Drop your image here, or <strong className="text-violet-600">browse</strong></p>
            <p className="text-xs text-gray-400">JPG, PNG and GIF files are allowed</p>
          </div>

          {/* Thumbnails List */}
          <ul className="space-y-3">
            {[
              { name: 'Product_thumbnail_1.png', progress: 49, status: 'loading' },
              { name: 'Product_thumbnail_2.png', progress: 100, status: 'complete' },
              { name: 'Product_thumbnail_3.png', progress: 100, status: 'complete' },
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-3">
                {/* Thumbnail Icon Placeholder */}
                <div className="w-10 h-10 rounded-lg bg-gray-200"></div> 
                
                <div className="flex-grow">
                  <p className="text-sm truncate">{item.name}</p>
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div 
                      className={`h-1 rounded-full ${item.status === 'complete' ? 'bg-green-500' : 'bg-violet-500'}`}
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {item.status === 'loading' && <span className="text-red-500 text-xs font-semibold">{item.progress}%</span>}
                  {item.status === 'complete' && <Check className="w-4 h-4 text-green-500" />}
                  <X className="w-4 h-4 text-gray-400 cursor-pointer hover:text-red-500" />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-3">
          <button type="button" className="bg-violet-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-violet-700 transition">
            Update
          </button>
          <button type="button" className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-red-600 transition">
            Delete
          </button>
          <button type="button" className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}