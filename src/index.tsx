import * as React from "react";
import { render } from "react-dom";
import "./styles.css";

// import "ui-form-field/lib/css/spectre.css";
// import "ui-form-field/lib/css/bootstrap3.css";
import "ui-form-field/lib/css/bootstrap4.css";
// import "ui-form-field/lib/css/semanticui2.css";
import "ui-form-field/lib/css/styles.css"; // default Theme

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

  componentWillMount() {
    const view = localStorage.getItem("view") || "BasicExample";
    this.setState({ view });
  }

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
          <a href="https://github.com/ngduc/ui-form-field" target="_blank">
            ui-form-field
          </a>
        </div>
        <nav style={{ marginBottom: 10 }}>
          {Object.keys(Views).map(v => {
            const style = {
              color: v === this.state.view ? "teal" : "blue",
              marginRight: 20
            };
            return (
              <a
                key={v}
                href="javascript:;"
                data-name={v}
                onClick={this.show}
                style={style}
              >
                {v}
              </a>
            );
          })}
        </nav>
        <hr />

        <View />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
