import React from "react";
//import { Button, Input, Modal } from "antd";
//import moment from "./Timer";
import { Button } from "antd";

import "./Counter.less";

// const Search = Input.Search;

// class Counter extends React.Component {
class Counter extends React.PureComponent {
  // state = {
  //   count: 0
  // };
  constructor(props) {
    super(props);
    // this.count = 0;
    this.state = {
      // open: false,
      list: [1, 2, 3, 4, 5],
      list2: [1, 2, 3, 4, 5]
    };
  }

  handleClick = e => {
    const { list } = this.state;
    let num = Math.random() * 1000;
    num = Math.ceil(num);

    console.log(num);

    list.push(num);

    this.setState((this.state.list2 = list));

    // this.setState(prevState => {
    //   return { count: prevState.count + 1 };
    // });
    //    this.setState({ count: this.state.count + 1 });
    // this.count = this.count + 1;
    //
    // if (this.count === 10) {
    //   this.forceUpdate();
    //   this.state.open = true;
    // }
  };

  // handleSearch = value => {
  //   console.log(value);
  // };

  render() {
    console.log("render....");
    return (
      <div className="Counter">
        <header className="App-header">
          {/*{this.count}*/}
          {this.state.list2.map((item, idx) => {
            return <div key={`list-item-${idx}`}>{item}</div>;
          })}

          {/*<Search*/}
          {/*className="Search"*/}
          {/*placeholder="input search text"*/}
          {/*onSearch={this.handleSearch}*/}
          {/*enterButton*/}
          {/*style={{ width: 320 }}*/}
          {/*/>*/}

          {/*<Modal title="Basic Modal" visible={this.state.open}*/}
          {/*// onOk={this.handleOk}*/}
          {/*// onCancel={this.handleCancel}*/}
          {/*>*/}
          {/*<p>Some contents...</p>*/}
          {/*<p>Some contents...</p>*/}
          {/*<p>Some contents...</p>*/}
          {/*</Modal>*/}

          <Button onClick={this.handleClick}>카운터</Button>
        </header>
      </div>
    );
  }
}

export default Counter;
