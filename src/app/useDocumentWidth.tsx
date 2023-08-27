"use client";
import { useEffect } from "react";

export function useDocumentWidth() {
  function handleResize(e) {
    console.log("resizing!!!", e.currentTarget.innerWidth);
  }
  useEffect(() => {
    console.log("event attached");
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
}
