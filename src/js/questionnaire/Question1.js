import React from "react";
import { connect } from "react-redux";

import Spinning from "grommet/components/icons/Spinning";

import Card from "grommet/components/Card";
import Heading from "grommet/components/Heading";
import Image from "grommet/components/Image";

import Box from "grommet/components/Box";

import FemaleIcon from "../../images/female.svg";
import MaleIcon from "../../images/male.svg";

// import translate from "google-translate-api";

// import translate from ''

// import styles from "./TODO.css"

var googleTranslate = require("google-translate")(
  "AIzaSyDOftvszG2I6cooJj6Pn1Ta9QJjfcLTUvM"
);

const question = "What is your gender?";

class Question1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selection: null };
  }

  componentWillMount() {
    const code = this.props.language.code;

    console.log("code", code);
    console.log("PROPS", this.props);

    const that = this;

    if (code) {
      googleTranslate.translate(question, code, (err, translation) => {
        console.log(translation.translatedText);
        that.setState({ text: translation.translatedText });
      });
    }
  }

  makeSelection(selection) {
    this.setState({ selected: selection });
  }

  render() {
    console.log("render");

    console.log("this.state.text", this.state.text);
    console.log("");
    return (
      <Box
        justify="start"
        align="center"
        wrap={true}
        pad="medium"
        margin="small"
        colorIndex="light-2"
      >
        {this.state.text ? (
          <Box
            direction="row"
            justify="start"
            align="center"
            wrap={true}
            pad="none"
            margin="small"
          >
            <Heading margin="none">
              {this.state.text && this.state.text}
            </Heading>
            <Box
              align="center"
              pad="medium"
              margin="small"
              colorIndex={this.state.selected === "f" ? "accent-1" : "light-2"}
              onClick={() => this.makeSelection("f")}
            >
              <Image
                style={{ height: "100px" }}
                src={FemaleIcon}
                full={false}
                size="small"
              />
            </Box>
            <Box
              align="center"
              pad="medium"
              margin="small"
              colorIndex={this.state.selected === "m" ? "accent-1" : "light-2"}
              onClick={() => this.makeSelection("m")}
            >
              <Image
                style={{ height: "100px" }}
                src={MaleIcon}
                full={false}
                size="small"
              />
            </Box>
          </Box>
        ) : (
          <Spinning />
        )}
      </Box>
    );
  }
}
const select = state => ({ ...state });

export default connect(select)(Question1);
