"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SeminarForm = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const seminarData = [
    { id: 1, title: "Kehidupan Algoritma", speaker: "Jerome Polin", location: "Jakarta 123, 14:00 WIB" },
    { id: 2, title: "Machine Learning Basics", speaker: "Jane Doe", location: "Bandung, 10:00 WIB" },
    { id: 3, title: "The Future of AI", speaker: "John Smith", location: "Surabaya, 15:00 WIB" },
    { id: 4, title: "Quantum Computing", speaker: "Emily Brown", location: "Jakarta 456, 13:00 WIB" },
    { id: 5, title: "Data Science for Beginners", speaker: "Alice Johnson", location: "Yogyakarta, 09:00 WIB" },
    { id: 6, title: "Blockchain Technology", speaker: "Michael Lee", location: "Bali, 11:00 WIB" },
    { id: 7, title: "Cybersecurity Essentials", speaker: "Sarah Connor", location: "Medan, 16:00 WIB" },
    { id: 8, title: "Cloud Computing Innovations", speaker: "David Kim", location: "Makassar, 12:00 WIB" },
    { id: 9, title: "Seminar Mendatang 1", speaker: "Speaker A", location: "Location A" },
    { id: 10, title: "Seminar Mendatang 2", speaker: "Speaker B", location: "Location B" },
    { id: 11, title: "Seminar Mendatang 3", speaker: "Speaker C", location: "Location C" },
    { id: 12, title: "Seminar Mendatang 4", speaker: "Speaker D", location: "Location D" },
    { id: 13, title: "Seminar Mendatang 5", speaker: "Speaker E", location: "Location E" },
    { id: 14, title: "Seminar Mendatang 6", speaker: "Speaker F", location: "Location F" },
    { id: 15, title: "Seminar Mendatang 7", speaker: "Speaker G", location: "Location G" },
    { id: 16, title: "Seminar Mendatang 8", speaker: "Speaker H", location: "Location H" },
    { id: 17, title: "Trending Seminar 1", speaker: "Speaker E", location: "Location E" },
  { id: 18, title: "Trending Seminar 2", speaker: "Speaker F", location: "Location F" },
  { id: 19, title: "Trending Seminar 3", speaker: "Speaker G", location: "Location G" },
  { id: 20, title: "Trending Seminar 4", speaker: "Speaker H", location: "Location H" },
  { id: 21, title: "Paling Disukai 1", speaker: "Speaker I", location: "Location I" },
  { id: 22, title: "Paling Disukai 2", speaker: "Speaker J", location: "Location J" },
  { id: 23, title: "Paling Disukai 3", speaker: "Speaker K", location: "Location K" },
  { id: 24, title: "Paling Disukai 4", speaker: "Speaker L", location: "Location L" },
  ];

  const [seminar, setSeminar] = useState<{
    title: string;
    speaker: string;
    location: string;
  } | null>(null);

  const [formData, setFormData] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (id) {
      const selectedSeminar = seminarData.find((item) => item.id === Number(id));
      setSeminar(selectedSeminar || null);
    }
  }, [id]);

  // Fungsi untuk menangani perubahan input form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fungsi untuk submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost:5000/api/register-seminar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, seminarId: id }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Pendaftaran gagal!");
      }

      setSuccess("Pendaftaran berhasil! Cek email Anda untuk informasi lebih lanjut.");
      setFormData({ name: "", email: "" }); // Reset form
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white text-cont-primary py-6 shadow-lg">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold">Pendaftaran Seminar</h1>
          <p className="text-base mt-2">Daftar sekarang untuk mengikuti seminar menarik!</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto p-8 px-24 bg-white shadow-2xl rounded-xl transform transition-all">
          <h2 className="text-3xl font-bold mb-6 text-center text-cont-primary">
            Form Pendaftaran Seminar
          </h2>

          {seminar ? (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="text-xl font-semibold text-gray-800">{seminar.title}</p>
              <p className="text-sm text-gray-600 mt-1">Pembicara: {seminar.speaker}</p>
              <p className="text-sm text-gray-600">Lokasi: {seminar.location}</p>
            </div>
          ) : (
            <p className="text-red-500 text-center">Seminar tidak ditemukan!</p>
          )}

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {success && <p className="text-green-600 text-center mb-4">{success}</p>}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Masukkan Nama"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Masukkan Email"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              disabled={loading}
            >
              {loading ? "Memproses..." : "Daftar Sekarang"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SeminarForm;
