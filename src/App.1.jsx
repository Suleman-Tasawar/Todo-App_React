import styled from "styled-components";
import { useState } from "react";

export function App() {
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
    height: 100vh;
    background-color: hsl(235, 21%, 11%);
  `;
  const TodoHolder = styled.div`
    position: absolute;
    top: -20%;
    left: 25%;
    width: 400px;
  `;

  const Main = styled.div`
    width: 500px;
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

  const CheckBoxSelected = {
    backgroundImg: url("../images/icon-check.svg"),
  };

  const InputCheckButtonLine = styled.div`
    border-bottom: 1px solid var(--darkgrayishblue);
  `;

  /*Styling*/
  /*Logic for the todo*/
  const [field, setField] = useState("");

  const [todo__arr, setTodoArr] = useState([]);

  const [check, setCheck] = useState({});

  let idCount = 0;
  //Render the array with checkbox styled with toda data each
  const renderTasks = () => {
    return todo__arr.map((todo) => (
      <InputCheckButtonLine className="flex__between" key={todo.id}>
        <div className="flex__center">
          <CustomCheckBox
            style={check}
            onClick={selectCheckBox}
          ></CustomCheckBox>
          <div>
            <TodoList>{todo.task}</TodoList>
          </div>
        </div>

        <div>
          <button>Delete</button>
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
    }
  }

  function selectCheckBox() {
    setCheck(CheckBoxSelected);
  }
  //Remainaing Work
  //also add an id and a booloean to keep track of completed or not
  //fix the checkbox with styling
  //display lists in proper order checkbox+todo item+delete button
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
                <img src="../images/icon-sun.svg" alt="Change Mode" />
              </ThemeButton>
            </div>
          </div>
          <InputContainer className="flex__center">
            <InputDecoration onClick={InsertTodoList}></InputDecoration>

            <InputText
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
