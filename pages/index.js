import Users from "@/components/users/users";
import Head from "next/head";

function HomePage({ users }) {
  return (
    <>
      <Head>
        <title>Your Photos</title>
        <link rel="icon" href="yourphotos-logo-black.svg" />
      </Head>
      <h1 className="text-white uppercase text-center text-m tracking-wider mt-10">
        Our users
      </h1>
      <Users users={users} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
};

export default HomePage;
