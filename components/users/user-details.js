import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function UserDetails(props) {
  const [follow, setFollow] = useState(false);

  function followHandler() {
    setFollow(!follow);
    follow ? console.log("UnFollowed") : console.log("Followed");
  }

  return (
    <div className="grid md:grid-cols-2 mt-12 p-6">
      <div className="justify-self-center">
        <Image
          src="/images/portrait.jpg"
          alt="Picture of the author"
          width={350}
          height={350}
          priority
        />
      </div>
      <div className="justify-self-center md:justify-self-start md:text-left text-center">
        <h4 className="text-h4-gray uppercase mb-6 md:mt-0 mt-8 text-xl tracking-wider">
          About me
        </h4>
        <h2 className="text-white uppercase mb-3 text-xxl md:text-4xl tracking-wider">
          {props.user.name}
        </h2>
        <p className="text-white  text-sm max-w-lg">
          {props.user.company.name}
        </p>
        <p className="text-white  text-sm max-w-lg">
          {props.user.company.catchPhrase}
        </p>
        <p className="text-white mb-8 text-sm max-w-lg">
          {props.user.company.bs}
        </p>
        <h4 className="text-h4-gray uppercase text-xl tracking-wider">
          Website
        </h4>
        <Link href="/">
          <p className="text-white mb-7 text-sm bg-website-bg p-4 mt-2 inline-block">
            {props.user.website}
          </p>
        </Link>
        <button
          onClick={followHandler}
          className="bg-white px-14 py-3 uppercase text-base tracking-wider block md:m-0 m-auto"
        >
          {!follow ? "Follow" : "UnFollow"}
        </button>
      </div>
    </div>
  );
}

export default UserDetails;
