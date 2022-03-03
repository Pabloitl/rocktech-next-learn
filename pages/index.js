import Anchor from "../components/anchor";
import Container from "../components/container";

export default function Index() {
  return (
    <Container>
      <div className="p-10 text-center">
        <Anchor to="/universities">List Universities of Mexico</Anchor>
      </div>
    </Container>
  );
}
