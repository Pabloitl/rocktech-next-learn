import Anchor from "../../components/anchor";
import Card from "../../components/card";
import Container from "../../components/container";
import Image from "next/image";
import getUniversities, { getUniversity } from "../api/universities";

export default function University({ university }) {
  if (!university)
    return (
      <Container>
        <h1>Cannot fetch this universitys information</h1>
      </Container>
    );

  return (
    <Container>
      <h1 className="p-1 text-xl"> {university.name} </h1>
      <div className="p-10">
        <Image
          alt="University"
          src="/university.jpeg"
          width={2048}
          height={916}
        />
      </div>
      <Card>
        <p> Country: {university.country} </p>
        <p> Code: {university.alpha_two_code} </p>
      </Card>
      <Card>
        <h3 className="text-lg">Web pages</h3>
        <ul>
          {university.web_pages.map((page, index) => {
            return (
              <li key={index} className="italic">
                <Anchor to={page}>{page}</Anchor>
              </li>
            );
          })}
        </ul>
      </Card>
      <Card>
        <h3 className="text-lg">Domains</h3>
        <ul>
          {university.domains.map((domain, index) => {
            return (
              <li key={index} className="italic">
                {domain}
              </li>
            );
          })}
        </ul>
      </Card>
    </Container>
  );
}

export async function getStaticProps({ params }) {
  return await getUniversity(params.name);
}

export async function getStaticPaths() {
  const { universities } = (await getUniversities()).props;

  const paths = universities.map((university) => {
    return { params: { name: university.name } };
  });

  return {
    paths,
    fallback: false,
  };
}
