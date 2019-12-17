import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { fetchReservations } from "../redux/actions/reservations";

const Home = () => (
  <>
    <Head>
      <title>Reservations.com - Home</title>
      <meta property="og:title" content="Reservations.com - Home" />
    </Head>

    <Layout />
  </>
);

Home.getInitialProps = async ({ store }) => {
  await store.dispatch(fetchReservations());
  return {};
};

export default Home;
