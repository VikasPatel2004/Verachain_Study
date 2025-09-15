"use client";

import { useState } from "react";

export default function SupplierForm() {
  const [formData, setFormData] = useState({
    supplierName: "",
    companyName: "",
    location: "",
    contact: "",
    email: "",
    transportMode: "road",
    goodsType: "",
    riskNotes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="min-h-screen bg-black dark:bg-black flex items-center justify-center px-10 py-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 p-12 rounded-xl shadow-lg w-full max-w-2xl"
      >
        <h2 className="text-3xl font-bold mb-10 text-gray-800 dark:text-white">
          Supplier Registration
        </h2>

        {[
          { label: "Supplier Name", name: "supplierName" },
          { label: "Company Name", name: "companyName" },
          { label: "Location", name: "location" },
          { label: "Contact Number", name: "contact", type: "tel" },
          { label: "Email Address", name: "email", type: "email" },
          { label: "Type of Goods", name: "goodsType" },
        ].map(({ label, name, type = "text" }) => (
          <div key={name} className="mb-6">
            <label
              htmlFor={name}
              className="block font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {label}
            </label>
            <input
              type={type}
              id={name}
              name={name}
              value={formData[name as keyof typeof formData]}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg px-4 py-3"
              required
            />
          </div>
        ))}

        <div className="mb-6">
          <label
            htmlFor="transportMode"
            className="block font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Mode of Transportation
          </label>
          <select
            id="transportMode"
            name="transportMode"
            value={formData.transportMode}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg px-4 py-3"
          >
            <option value="road">Road</option>
            <option value="rail">Rail</option>
            <option value="air">Air</option>
            <option value="sea">Sea</option>
          </select>
        </div>

        <div className="mb-10">
          <label
            htmlFor="riskNotes"
            className="block font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Known Risks or Concerns
          </label>
          <textarea
            id="riskNotes"
            name="riskNotes"
            rows={4}
            value={formData.riskNotes}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg px-4 py-3"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Submit Supplier Info
        </button>
      </form>
    </div>
  );
}
``