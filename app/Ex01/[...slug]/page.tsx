"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Product {
  idSearch: string;
}
interface Props {
  params: any;
}
export default function Post(props: Props) {
  const { params } = props;
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/posts?search=${encodeURIComponent(inputValue)}`);
  };

  return (
    <div>
      <input
        className=""
        placeholder="Rikkei Education"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSearch}>Tìm kiếm</button>
    </div>
  );
}
