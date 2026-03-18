"use client";

import { useEffect } from "react";

export function ThemeInit() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return null;
}
