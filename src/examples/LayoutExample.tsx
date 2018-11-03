import * as React from "react";
import { DisplayFormState } from "../Utils";

import { FormContainer, Form, Field, Button } from "ez-react-form";

export default class extends React.Component {
  renderForm = (props: any) => {
    return (
      <Form use="bootstrap4">
        <div className="form-row">
          <Field name="username" className="col-md-6" />
          <Field name="email" className="col-md-6" />
        </div>
        <div className="form-row">
          <Field password name="password" className="col-md-6" />
          <Field password name="confirm" className="col-md-6" />
        </div>

        <Button type="submit" />
        <DisplayFormState {...props} />
      </Form>
    );
  };

  render() {
    return (
      <div>
        <strong>Form Layouts:</strong>
        <FormContainer
          initialValues={{ email: "example@email.com", roles: [], gender: "" }}
          onSubmit={() => {}}
          render={this.renderForm}
        />
      </div>
    );
  }
}
