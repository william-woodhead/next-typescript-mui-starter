import React from "react";
import { NextContext } from "next";

interface Props {
  statusCode: number;
}

export default class Error extends React.Component<Props> {
  static getInitialProps({ res, err }: NextContext) {
    const statusCode = res
      ? res.statusCode
      : err
        ? (err as any).statusCode
        : null;
    return { statusCode };
  }

  render() {
    return (
      <p>
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : "An error occurred on client"}
      </p>
    );
  }
}
