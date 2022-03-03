import Anchor from "../../components/anchor";
import Container from "../../components/container";
import getUniversities from "../api/universities";

export default function Universities({ universities }) {
  return (
    <Container>
      <h2 className="text-lg text-center">List of Universities</h2>
      <ul className="p-4 text-center">
        {universities.map((university, index) => {
          return (
            <li key={index}>
              <Anchor to={`/universities/${university.name}`}>
                {university.name}
              </Anchor>
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
