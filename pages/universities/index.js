import Image from "next/image";
import Anchor from "../../components/anchor";
import Container from "../../components/container";
import getUniversities from "../api/universities";

export default function Universities({ universities }) {
  return (
    <Container>
      <h2 className="text-lg text-center">List of Universities</h2>
      <div className="p-5 text-center">
        <Image
          alt="Books"
          src="https://sbooks.net/wp-content/uploads/2021/10/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg"
          width={1600}
          height={789}
        />
      </div>
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
