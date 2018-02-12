import React from "react";
import { connect } from "react-redux";

import Spinning from "grommet/components/icons/Spinning";

import Card from "grommet/components/Card";
import Heading from "grommet/components/Heading";

import Box from "grommet/components/Box";

//import translate from "google-translate-api";

//import translate from ''

// import styles from "./TODO.css"

var googleTranslate = require("google-translate")(
  "AIzaSyDOftvszG2I6cooJj6Pn1Ta9QJjfcLTUvM"
);

const question = "Submit the Question?";

class Question1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: null };
  }

  componentWillMount() {
    const code = this.props.language.code;

    console.log("code", code);
    console.log("PROPS", this.props);

    const that = this;

    if (code) {
      googleTranslate.translate(question, code, function(err, translation) {
        console.log(translation.translatedText);
        that.setState({ text: translation.translatedText });
      });
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
