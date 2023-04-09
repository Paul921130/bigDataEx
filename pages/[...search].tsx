import Image from "next/image";
import Head from "next/head";
import styles from "./page.module.css";
import useStore from "../src/hook/usestore";
import { useEffect } from "react";

//components
import Header from "../src/components/header";
import SearchBox from "../src/components/searchBox";

export default function Comp(props: any) {
    const { dispatch, testing } = useStore();
    //   dispatch({ type: "SET_ACCEPT_TESTING", payload: { testing: true } });
    //   console.log(testing);
    useEffect(() => {
        dispatch({ type: "SET_ACCEPT_TESTING", payload: { testing: true } });
        console.log(props);
    }, []);
    const handleClick = () => {
        console.log(testing);
    };
    return (
        <>
            <Header />
            <main className={styles.main}>
                <h1>搜尋結果</h1>
                <SearchBox />
            </main>
        </>
    );
}

export async function getServerSideProps(context: any) {
    // Fetch data from external API
    const res = await fetch(
        `https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-000082-053`
    );
    const data = await res.json();
    return {
        props: {
            data: { ...data },
        }, // will be passed to the page component as props
    };
}
