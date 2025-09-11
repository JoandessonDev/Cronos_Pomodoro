import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";
import { Footer } from "../../components/Footer";
import type { ReactNode } from "react";
import { Container } from "../../components/Container";

type MainTemplateProps = {
    children: ReactNode;
}

export function MainTemplate({children} : MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo />
        <Menu />
      </Container>

      <Container>
        {children}
      </Container>

      <Container>
        <Footer/>
      </Container>
    </>
  );
}
