import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm(){
    return(<>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="formRow">
            <Cycles />
          </div>
          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>

          <div className="formRow"></div>
        </form>
    </>);
}