"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Input } from "@/app/forward-ref-example";
import { useDocumentWidth } from "@/app/useDocumentWidth";
import { useSmartFetch } from "@/app/useSmartFetch";
import { ComponentWithCtx } from "@/app/contextExample";

export default function Home() {
  useDocumentWidth();
  const items = [1, 2, 3, 4];

  const { isLoading, isError, data } = useSmartFetch();
  console.log("isLoading", isLoading);
  console.log("isError", isError);
  console.log("data", data);

  const list = items.map((k) => <div key={k}>hello</div>);

  return (
    <main className={styles.main}>
      <Input />
      <ComponentWithCtx />
    </main>
  );
}
