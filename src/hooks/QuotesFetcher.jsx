import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const API_NINJAS_QUOTES_URL = "https://api.api-ninjas.com/v1/quotes";

const QuotesFetcher = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fungsi untuk mengambil quotes
  const fetchQuote = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(API_NINJAS_QUOTES_URL, {
        headers: {
          "X-Api-Key": import.meta.env.VITE_API_NINJAS_KEY,
        },
      });
      setQuote(response.data[0]); // Ambil satu kutipan
    } catch (err) {
      console.error(err);
      setError("Gagal mengambil kutipan. Coba lagi!");
    }
    setLoading(false);
  };

  // Ambil quotes saat pertama kali halaman dimuat
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="flex flex-col md:items-center justify-center h-screen px-4 ml-24 md:ml-0 gap-3">
      <h2 className="text-5xl md:-ml-6 text-white">Quotes of the day</h2>

      {loading ? (
        <p className="text-white">Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="max-w-md mt-4 border p-4 rounded bg-white/30 backdrop-sepia-0 text-white">
          <p className="italic">&ldquo;{quote.quote}&ldquo;</p>
          <p className="font-semibold text-right">-{quote.author}</p>
        </div>
      )}

      {/* Tombol Refresh dengan Ikon */}
      <button onClick={fetchQuote} disabled={loading}>
        {loading ? "" : <FontAwesomeIcon icon={faRotate} className="text-xl text-white hover:text-gray-700 hover:bg-white cursor-pointer p-4 mt-4 rounded-full transition duration-300" />}
      </button>

      <NavLink to="/work" className="text-blue-400 hover:underline lg:ml-72">
        View works &gt;
      </NavLink>
    </div>
  );
};

export default QuotesFetcher;
