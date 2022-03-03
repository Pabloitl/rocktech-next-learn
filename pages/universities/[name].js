import { useRouter } from "next/router";
import Container from "../../components/container";
import getUniversities, { getUniversity } from "../api/universities";

export default function University({ university }) {
  return (
    <Container>
      <h1> {university.name} </h1>
      <p> Country: {university.country} </p>
      <p> Code: {university.alpha_two_code} </p>
      Web pages:
      <ul>
        {university.web_pages.map((page, index) => {
          return <li key={index}>{page}</li>;
        })}
      </ul>
      Domains:
      <ul>
        {university.domains.map((domain, index) => {
          return <li key={index}>{domain}</li>;
        })}
      </ul>
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
