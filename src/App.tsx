import "./styles/global.css";
import "./styles/theme.css";
import { Container } from "./assets/components/Container";
import { Logo } from "./assets/components/Logo";
import { Menu } from "./assets/components/Menu";
import { CountDown } from "./assets/components/CountDown";
import { DefaultInput } from "./assets/components/DefaultInput";
import { Cycles } from "./assets/components/Cycles";
import { DefaultButton } from "./assets/components/DefaultButton";
import { PlayCircleIcon } from "lucide-react";

export function App() {
  return (
    <Container>
      <Logo />
      <Menu />
      <CountDown />
      <form className="form">
        <div className="formRow">
          <DefaultInput
            id="myInput"
            disabled
            labelText="Task"
            placeholder="Digite o nome da tarefa"
            type="text"
          />
        </div>
        <div className="formRow">
          <p>asdfa dfasfasfasf asdf asdf asdf sdfa sdf </p>
        </div>
        <div className="formRow">
          <Cycles />
        </div>
        <div className="formRow">
          <DefaultButton icon={<PlayCircleIcon/>} />
        </div>

        <div className="formRow">
          <button>enviar</button>
        </div>
      </form>
    </Container>
  );
}
