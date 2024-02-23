"use client";
import axios from "axios";
import useSWR from "swr";

export default function NgcPage() {
  const { data } = useSWR(
    ["https://ngc-handson-2402-rzcggdaq2q-de.a.run.app/hello"],
    async ([url]) => axios.get(url).then((response) => response.data)
  );

  return (
    <div>
      <h1>Hello NGC!</h1>
      <h2>Fetch result: {data}</h2>
    </div>
  );
}
