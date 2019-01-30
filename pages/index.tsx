import React from "react";
import { NextContext } from "next";
import Hero, { HeroType } from "../components/hero";

export interface Main {
  title: string;
}

interface ContentType {
  hero: HeroType;
}

interface Props {
  content: ContentType;
}

export default class Home extends React.Component<Props, any> {
  static async getInitialProps({  }: NextContext) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          content: {
            topbar: {
              buttonText: "Open sidebar"
            },
            hero: {
              title: "Hello App!"
            }
          }
        });
      }, 200);
    });
  }

  render() {
    const { content } = this.props;
    const { hero } = content;
    return (
      <div>
        <Hero hero={hero} />
      </div>
    );
  }
}
