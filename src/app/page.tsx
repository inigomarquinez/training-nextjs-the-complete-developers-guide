import Image from "next/image";

import homeImage from "/public/home.jpg";

export default function Home() {
  return (
    <div>
      Home page
      <div className="absolute -z-10 inset-0">
        <Image
          fill
          alt="car factory"
          src={homeImage}
          style={{ objectFit: "cover" }}
          />
        </div>
    </div>
  );
}
