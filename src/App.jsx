import "./App.css";
import styled from "styled-components";
import { useState } from "react";

function App() {
  /*Styling for all components present*/
  const H1 = styled.h1`
    font-size: 36px;
    color: #fafafa;
  `;

  const ThemeButton = styled.button`
    background-color: transparent;
    border: none;
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
    width: 300px;
    height: 38px;
    border: none;
    outline: none;
    font-size: 18px;
    background: hsl(235, 19%, 35%);
  `;

  const MainContainer = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
    background-color: hsl(235, 21%, 11%);
  `;
  const TodoHolder = styled.div`
    position: absolute;
    top: -20%;
    left: 30%;
    width: 400px;
  `;

  const Main = styled.div`
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
    border-bottom: 1px solid var(--darkgrayishblue);
  `;

  const TodoInfo = styled.div`
    color: var(--darkgrayishblue);
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
  const CheckBoxInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  `;

  const CheckMark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    border: 1px solid var(--darkgrayishblue);
  `;

  const Container = styled.div`
    .checkmark:after {
      width: 100px;
      height: 100px;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><circle cx="50" cy="50" r="40" fill="red" /></svg>');
      background-size: contain;
      background-repeat: no-repeat;
    }
  `;

  /*Styling*/

  /*Logic for the todo*/

  const [field, setField] = useState("");

  let todo__arr = [
    "Complete 60% of the Todo project",
    "Exercise in the Morning",
    "Reduce the mobile screen time",
    "Read or Listen to something interesting",
    "Walk after eating diner",
  ];
  //Render the array with checkbox styled with toda data each

  const todo__render = todo__arr.map((todo) => (
    <div className="flex__center">
      <CheckBoxContainer>
        <CheckBoxInput type="checkbox" />
        <CheckMark></CheckMark>
      </CheckBoxContainer>
      <TodoList key={todo}>{todo}</TodoList>
    </div>
  ));

  function InsertTodoList(event) {
    setField(event.target.value);
  }

  function EnterOnKey(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      window.alert(field);
    }
  }

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
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <path
                    fill="#FFF"
                    fillRule="evenodd"
                    d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
                  />
                </svg>
              </ThemeButton>
            </div>
          </div>
          <InputContainer className="flex__center">
            <InputDecoration></InputDecoration>
            <InputText
              type="text"
              name="todo field"
              placeholder="Create a todo..."
              value={field}
              onChange={InsertTodoList}
              onKeyDown={EnterOnKey}
            />
          </InputContainer>

          <Main>
            <TodoData>
              <ul>{todo__render}</ul>
            </TodoData>

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
