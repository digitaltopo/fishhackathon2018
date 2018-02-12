import React from "react";
import { connect } from "react-redux";

import Spinning from "grommet/components/icons/Spinning";

import Card from "grommet/components/Card";
import Heading from "grommet/components/Heading";
import Image from "grommet/components/Image";

import Box from "grommet/components/Box";

import Salmon from "../../images/salmon.png";
import Tuna from "../../images/tuna.png";

// import translate from "google-translate-api";

// import translate from ''

// import styles from "./TODO.css"

var googleTranslate = require("google-translate")(
  "AIzaSyDOftvszG2I6cooJj6Pn1Ta9QJjfcLTUvM"
);

const question = "What species do you catch?";

class Question1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tuna: false, salmon: false };
  }

  componentWillMount() {
    const code = this.props.language.code;

    const that = this;

    if (code) {
      googleTranslate.translate(question, code, (err, translation) => {
        console.log(translation.translatedText);
        that.setState({ text: translation.translatedText });
      });
    }
  }

  makeSelection(selection) {
    if (selection === "tuna") {
      this.setState({ tuna: !this.state.tuna });
    } else if (selection === "salmon") {
      this.setState({ salmon: !this.state.salmon });
    }
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
              colorIndex={this.state.salmon ? "accent-1" : "light-2"}
              onClick={() => this.makeSelection("salmon")}
            >
              <Image
                style={{ height: "100px" }}
                src={Salmon}
                full={false}
                size="small"
              />
            </Box>
            <Box
              align="center"
              pad="medium"
              margin="small"
              colorIndex={this.state.tuna ? "accent-1" : "light-2"}
              onClick={() => this.makeSelection("tuna")}
            >
              <Image
                style={{ height: "100px" }}
                src={Tuna}
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
