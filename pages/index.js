import Anchor from "../components/anchor";
import Container from "../components/container";
import Image from "next/image";
import UniversityImage from "../public/university.jpeg";

export default function Index() {
  return (
    <Container>
      <div className="p-10 text-center">
          <Image
              alt="University"
              src={UniversityImage}
          />
        <Anchor to="/universities">List Universities of Mexico</Anchor>
      </div>
    </Container>
  );
}
