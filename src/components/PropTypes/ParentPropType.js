import React, { Component } from "react";
import PropTypesExample from "./PropTypesExample";

class ParentPropTypes extends Component {
  render() {
    return (
      <div>
        <PropTypesExample name="Travis" />
      </div>
    );
  }
}
export default ParentPropTypes;
