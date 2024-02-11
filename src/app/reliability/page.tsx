import Hero from "@/components/hero";
import reliability from "/public/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <Hero
      imgData={reliability}
      imgAlt="welding"
      title="Super high reliability hosting"
    />
  );
}
