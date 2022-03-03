import Link from "next/link";
import Container from "../components/container";

export default function Index() {
    return <Container>
        <Link href="/universities">
            <a>List Universities of Mexico</a>
        </Link>
    </Container>
}
