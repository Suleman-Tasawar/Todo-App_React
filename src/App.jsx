import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import { useRef } from "react";

import { render } from "react-dom";
import iconSun from "./assets/icon-sun.svg";
import iconMoon from "./assets/icon-moon.svg";
import iconCheck from "./assets/icon-check.svg";
import iconCross from "./assets/icon-cross.svg";

function App() {
  /*Styling for all components present*/
  const H1 = styled.h1`
    font-size: 36px;
    color: #fafafa;
  `;

  const ThemeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
  `;
  const InputContainer = styled.div`
    margin-top: 1.5rem;
    background-color: hsl(235, 19%, 35%);
  `;
  const InputDecoration = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid hsl(234, 11%, 52%);
  `;
  const InputText = styled.input`
    margin-left: 0.4rem;
    width: 20%;
    height: 38px;
    border: none;
    outline: none;
    font-size: 18px;
    background: hsl(235, 19%, 35%);
  `;

  const MainContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: hsl(235, 21%, 11%);
  `;
  const TodoHolder = styled.div`
    position: absolute;
    top: -20%;
    left: 20%;
    width: 70%;
  `;

  const Main = styled.div`
    width: 100%;
    background-color: var(--verydarkdesaturatedblue);
    color: var(--lightgrayishblue);
    font-weight: 400;
  `;
  const TodoData = styled.div`
    margin-top: 1.5rem;
    line-height: 3;
  `;

  const TodoList = styled.li`
    list-style-type: none;
  `;

  const TodoInfo = styled.div`
    color: var(--darkgrayishblue);
    font-size: 13px;
  `;

  const CheckBoxContainer = styled.label`
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  `;
  //css object styled
  const CustomCheckBox = styled.span`
    width: 25px;
    height: 25px;
    border: 1px solid var(--darkgrayishblue);
    border-radius: 50%;
  `;
  /*
  const CheckBoxSelected = {
    backgroundImg: url("./assets/icon-check.svg"),
  };*/

  const InputCheckButtonLine = styled.div`
    border-bottom: 1px solid var(--darkgrayishblue);
  `;

  /*Styling*/

  /*Logic for the todo*/

  const [field, setField] = useState("");
  const [todo__arr, setTodoArr] = useState([]);
  const [toggler, setToggler] = useState(iconSun);
  const [activeCheck, setActiveCheck] = useState(false);
  const inputRef = useRef(null);

  let idCount = 0;

  //Render the array with checkbox styled with toda data each

  const renderTasks = () => {
    return todo__arr.map((todo) => (
      <InputCheckButtonLine className="flex__between" key={todo.id}>
        <div className="flex__center">
          <CustomCheckBox
            className={activeCheck ? "check__box__selected" : ""}
            onClick={selectCheckBox}
          ></CustomCheckBox>
          <div className="margin__left__1">
            <TodoList>{todo.task}</TodoList>
          </div>
        </div>

        <div>
          <ThemeButton className="margin__right__1">
            <img src={iconCross} />
          </ThemeButton>
        </div>
      </InputCheckButtonLine>
    ));
  };

  function InsertTodoList(event) {
    event.preventDefault();
    setField(event.target.value);
  }

  function EnterOnKey(event) {
    if (event.key === "Enter") {
      setTodoArr([...todo__arr, { task: field, complete: false, id: idCount }]);
      idCount++;
      setField("");
      inputRef.current.focus();
    }
  }

  function toggleTheme(icon) {
    console.log("theme");
    if (toggler === iconSun) {
      setToggler(iconMoon);
    } else {
      setToggler(iconSun);
    }
  }

  function selectCheckBox() {
    setActiveCheck(!activeCheck);
  }
  //Remainaing Work
  //add functionality for completion and deletion
  //Make it responsive

  return (
    <>
      <div className="todo__header"></div>
      <MainContainer>
        <TodoHolder>
          <div className="flex__between">
            <div>
              <H1>TODO</H1>
            </div>

            <div>
              <ThemeButton>
                <img onClick={toggleTheme} src={toggler} alt="Change Mode" />
              </ThemeButton>
            </div>
          </div>
          <InputContainer className="flex__center margin__left__1">
            <InputDecoration onClick={InsertTodoList}></InputDecoration>

            <InputText
              ref={inputRef}
              key="random text"
              type="text"
              name="todo field"
              placeholder="Create a todo..."
              value={field}
              onChange={InsertTodoList}
              onKeyDown={EnterOnKey}
            />
          </InputContainer>

          <Main>
            <TodoData>{renderTasks()}</TodoData>

            <TodoInfo className="flex__evenly margin__top__1-5">
              <div>{todo__arr.length}</div>
              <div>
                <ul className="flex__evenly">
                  <li className="margin__left__1 ">All</li>
                  <li className="margin__left__1 ">Active</li>
                  <li className="margin__left__1 ">Completed</li>
                </ul>
              </div>
              <div>Clear Completed</div>
            </TodoInfo>
          </Main>
        </TodoHolder>
      </MainContainer>
    </>
  );
}

export default App;
