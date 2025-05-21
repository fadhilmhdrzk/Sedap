import InputField from "./components/InputField";
import InputGaji from "./components/InputGaji";
import { useState } from "react";
export default function HitungGajiForm() {
  const [gaji, setGaji] = useState("");

  const pajak = 0.11;
  const totalGaji = gaji - gaji * pajak;

  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
          Hitung Gaji Bersih
        </h2>

        <InputField
          label="Gaji Pokok"
          type="number"
          placeholder="Masukkan Jumlah Gaji"
          onChange={(e) => setGaji(e.target.value)}
        />

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Pajak: <b class="text-red-500">11%</b>
          </label>
        </div>

        <InputGaji gaji={gaji} totalGaji={totalGaji} />
      </div>
    </div>
  );
}
