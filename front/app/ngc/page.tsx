"use client";
import axios from "axios";
import useSWR from "swr";

export default function NgcPage() {
  const { data } = useSWR(["http://localhost:8080/hello"], async ([url]) =>
    axios.get(url).then((response) => response.data)
  );

  return (
    <div>
      <h1>Hello NGC!</h1>
      <h2>Fetch result: {data}</h2>
    </div>
  );
}
