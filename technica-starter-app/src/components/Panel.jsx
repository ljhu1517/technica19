import React from "react";

import "./Panel.css";

/**
 * This is another component.
 * You can use this as a template to create a panel.
 * */
class Panel extends React.Component {
  render() {
    return (
      <div className="panel">
        {/** You can access whatever HTML is between the 
            brackets of a Panel with {this.props.children} */}
        {this.props.children}
      </div>
    );
  }
}

export default Panel;
