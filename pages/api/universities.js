const apiURL = "http://universities.hipolabs.com/search?country=Mexico";

export default async function getUniversities() {
  const request = await fetch(apiURL);
  const universities = await request.json();

  return {
    props: {
      universities,
    },
  };
}

export async function getUniversity(name) {
  const request = await fetch(`${apiURL}&name=${name}`);
  const university = await request.json();

  return {
    props: {
      university: university[0],
    },
  };
}
