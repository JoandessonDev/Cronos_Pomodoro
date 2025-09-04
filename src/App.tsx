import "./styles/global.css";
import "./styles/theme.css";
import { Heading } from "./assets/components/Heading";
import { TimerIcon } from "lucide-react";
import { Container } from "./assets/components/Container";
import { Logo } from "./assets/components/Logo";
import { Menu } from "./assets/components/Menu";
import { CountDown } from "./assets/components/CountDown";
export function App() {
  return (
    <Container>
        <Logo/>
        <Menu/>
        <CountDown/>
    </Container>
  )
}
