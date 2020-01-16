# Front-End

- 20.01.16 Thu

## yarn Create react-app

- npm 보단 yarn 을 사용하는 게 나을 것 같아 yarn을 사용했습니다.
- create react-app
- 불필요한 sample 파일들을 지웠습니다.

## 입력 기능을 만들었습니다.

- handleChange : input의 value와 props로 받은 App의 state와 연결 시켜 주었습니다.
- handleCreate : button의 onClick 과 연결된 이벤트->메서드로 input의 value를 지워주고 todos 배열에 concat 시켜줍니다.
- handleKeyPress : input에 포커스 되어 있을 때 Enter키를 누르면 버튼을 누른 것과 같게 만들었습니다.

## 출력 기능을 만들었습니다.

- props로 받은 App의 state인 todos를 map 메서드를 이용해 컴포넌트 배열로 변환시켜줍니다. <br/>
  todos =[{첫번째 할 일},{두번째 할 일},...]<br/>
  const TodoItems = todos.map((todo)=><TodoItem {...todo} key ={todo.id} />) <br/>
- 반환된 TodoItems 를 return 해줍니다.
