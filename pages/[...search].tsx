import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import useStore from "../src/hook/usestore";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Comp() {
  const { dispatch, testing } = useStore();
  //   dispatch({ type: "SET_ACCEPT_TESTING", payload: { testing: true } });
  //   console.log(testing);
  useEffect(() => {
    dispatch({ type: "SET_ACCEPT_TESTING", payload: { testing: true } });
  }, []);
  const handleClick = () => {
    console.log(testing);
  };
  return (
    <main className={styles.main}>
      <h1>搜尋結果</h1>
      <button onClick={handleClick}>sss</button>
    </main>
  );
}
