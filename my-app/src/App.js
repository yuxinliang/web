import React from 'react';
import logo from './logo.svg';
import './App.css';
function Name(props) {
  return <h6>网站名称：{props.name}</h6>;
}
function Url(props) {
  return <h6>网站地址：{props.url}</h6>;
}
function Nickname(props) {
  return <h6>网站小名：{props.nickname}</h6>;
}
function FormattedDate(props) {
  return <h6>现在是 {props.date.toLocaleTimeString()}.</h6>;
}
class ABC extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // 在组件输出到 DOM 后会执行 componentDidMount() 钩子
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  //componentWillMount 在渲染前调用,在客户端也在服务端。

  // componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，
  // 可以通过this.getDOMNode()来进行访问。 
  // 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。

  //componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。

  //  shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
  // 可以在你确认不需要更新组件时使用

  // componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
  // componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。
  // componentWillUnmount在组件从 DOM 中移除之前立刻被调用。

  // 组件被从 DOM 中移除，React 会调用 componentWillUnmount() 这个钩子函数
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    //setState 调度UI更新
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h6>现在是 {this.state.date.toLocaleTimeString()}.</h6>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}
class HelloMessage extends React.Component {
  render() {
    return (
      <h6>Hello, {this.props.name}</h6>
    );
  }
}

HelloMessage.defaultProps = {
  name: 'Runoob'
};
function handleClick(e) {
  e.preventDefault();
  console.log('链接被点击', e);
}
function ActionLink() {
  return (
    <a href="#" onClick={handleClick}>
      点我
    </a>
  );
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
 
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
  <li>{numbers}</li>
);
 
function App() {
  return (
    <div>
      <Name name="百度" />
      <Url url="http://www.baidu.com" />
      <Nickname nickname="baidu" />
      <ABC />
      <hr></hr>
      <HelloMessage name="yukin" />
      <ActionLink />
      {/* <ul>{listItems}</ul> */}
      <hr></hr>
      <Toggle />
      <NumberList numbers={numbers} />
    </div>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>

//       </header>

//     </div>
//   );
// }

export default App;
