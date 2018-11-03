import * as React from "react";
import { render } from "react-dom";
import "./styles.css";

// import "ez-react-form/lib/css/spectre.css";
// import "ez-react-form/lib/css/bootstrap3.css";
import "ez-react-form/lib/css/bootstrap4.css";
// import "ez-react-form/lib/css/semanticui2.css";
import "ez-react-form/lib/css/styles.css"; // default Theme

import BasicExample from "./examples/BasicExample";
import DynamicFormExample from "./examples/DynamicFormExample";
import EventHandlerExample from "./examples/EventHandlerExample";
import FieldTypeExample from "./examples/FieldTypeExample";
import LayoutExample from "./examples/LayoutExample";

/**
 * OPEN EXAMPLE FILES ===> "src/examples/"
 */

const Views = {
  BasicExample,
  FieldTypeExample,
  DynamicFormExample,
  EventHandlerExample,
  LayoutExample
};

interface IState {}
class App extends React.Component<{}, IState> {
  state = {
    view: "BasicExample"
  };

  show = (ev: any) => {
    this.setState({ view: ev.target.dataset.name });
    console.log(ev.target.dataset.name);
  };

  public render() {
    const View = Views[this.state.view];
    return (
      <div>
        <div className="title">
          Examples of: &nbsp;
          <a href="https://github.com/ngduc/ez-react-form" target="_blank">
            ez-react-form
          </a>
        </div>
        <nav>
          <a href="#" data-name="BasicExample" onClick={this.show}>
            #Basic
          </a>
          <a href="#" data-name="FieldTypeExample" onClick={this.show}>
            #FieldTypes
          </a>
          <a href="#" data-name="DynamicFormExample" onClick={this.show}>
            #DynamicForm
          </a>
          <a href="#" data-name="EventHandlerExample" onClick={this.show}>
            #EventHandler
          </a>
          <a href="#" data-name="LayoutExample" onClick={this.show}>
            #Layout
          </a>
        </nav>
        <hr />

        <View />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
