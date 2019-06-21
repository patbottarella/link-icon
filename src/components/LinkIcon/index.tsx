import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

interface Props {
  link: string;
  icon: any;
  openInNewTab: boolean;
  linkText?: string;
}

interface State {}

export default class LinkIcon extends React.Component<Props, State> {
  render() {
    if (!this.props) {
      return;
    }

    return (
      <div>
        {this.props.linkText ? <span>{this.props.linkText}</span> : null}
        <a
          href={this.props.link}
          target={this.props.openInNewTab ? "_blank" : ""}
        >
          <FontAwesomeIcon className="Icon" icon={this.props.icon} />
        </a>
      </div>
    );
  }
}
