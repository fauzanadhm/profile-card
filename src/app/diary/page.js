"use client";
import "@styles/diary.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Diary() {
  const [judul, setJudul] = useState([]);
  const [isiDiary, setIsiDiary] = useState([]);

  const endpointAPI =
    "https://6555c0f084b36e3a431e3f23.mockapi.io/tes/v1/artikel";

  async function getDiary() {
    const res = await axios.get(endpointAPI);
    const data = res.data;

    //ambil judul
    const judul = data.map((item) => item.judul);
    setJudul(judul);

    //ambil isi_diary
    const isi_diary = data.map((item) => item.isi_diary);
    setIsiDiary(isi_diary);
  }

  useEffect(() => {
    getDiary();
  }, []);

  return (
    <div className="diary-list-container">
      {judul.length > 0 ? (
        <ul>
          {judul.map((item, idx) => (
            <li key={item.id}>
              <div className="diary-container">
                <h1>{judul[idx]}</h1>
                <p className="p-diary">{isiDiary[idx]}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        "API not loading"
      )}
    </div>
  );
}
