import Link from "next/link";
import Container from "../../components/container";
import getUniversities from "../api/universities";

export default function Universities({ universities }) {
  return (
    <Container>
      Universities of México
      <ul>
        {universities.map((university, index) => {
          return (
            <li key={index}>
              <Link href={`/universities/${university.name}`}>
                {university.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

export async function getStaticProps() {
  return await getUniversities();
}
