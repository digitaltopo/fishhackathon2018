import React, { Component } from "react";
import { connect } from "react-redux";

import Columns from "grommet/components/Columns";
import Box from "grommet/components/Box";

import { setLanguage } from "../actions/language";

import Flag from "react-world-flags";

class Flags extends Component {
  constructor(props) {
    super(props);
  }

  chooseLanguage(lang) {
    console.log("chooseLanguage", lang);
    this.props.dispatch(setLanguage(lang));
  }

  render() {
    console.log("this.props", this.props);
    console.log("this.state", this.state);
    return (
      <div>
        <Columns size="small" masonry={false}>
          <Box
            align="center"
            pad="medium"
            margin="small"
            colorIndex={
              this.props.language.code === "th" ? "accent-1" : "light-2"
            }
            onClick={() => this.chooseLanguage("th")}
          >
            <Flag code="th" height={40} />
          </Box>
          <Box
            align="center"
            pad="medium"
            margin="small"
            colorIndex={
              this.props.language.code === "lo" ? "accent-1" : "light-2"
            }
            onClick={() => this.chooseLanguage("lo")}
          >
            <Flag code="la" height={40} />
          </Box>
          <Box
            align="center"
            pad="medium"
            margin="small"
            colorIndex={
              this.props.language.code === "km" ? "accent-1" : "light-2"
            }
            onClick={() => this.chooseLanguage("km")}
          >
            <Flag code="kh" height={40} />
          </Box>
          <Box
            align="center"
            pad="medium"
            margin="small"
            colorIndex={
              this.props.language.code === "my" ? "accent-1" : "light-2"
            }
            onClick={() => this.chooseLanguage("my")}
          >
            <Flag code="mm" height={40} />
          </Box>
        </Columns>
        <Box flex="grow" />
      </div>
    );
  }
}

const select = state => ({ ...state });

export default connect(select)(Flags);

/*

  <Flag code="th" />




*/
