import React from "react";
import { NextContext } from "next";
import { Content } from "../models";
import Hero from "../components/hero";
import FloatingBox from "../components/floatingBox";

interface Props {
  content: Content;
}

export default class Home extends React.Component<Props, any> {
  static async getInitialProps({  }: NextContext) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          content: {
            footer: {
              item: "Change Language"
            },
            main: {
              title: "Hello Page"
            }
          }
        });
      }, 200);
    });
  }

  render() {
    const { content } = this.props;
    return (
      <div>
        <Hero />
        <FloatingBox />
        {content.main.title}
      </div>
    );
  }
}
