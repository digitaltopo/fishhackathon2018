import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import Section from "grommet/components/Section";
import Title from "grommet/components/Title";
import Menu from "grommet/components/Menu";
import MenuIcon from "grommet/components/icons/base/Menu";

import Anchor from "grommet/components/Anchor";
import Article from "grommet/components/Article";
import Box from "grommet/components/Box";
import Header from "grommet/components/Header";
import Heading from "grommet/components/Heading";
import Label from "grommet/components/Label";
import Meter from "grommet/components/Meter";
import Notification from "grommet/components/Notification";
import Value from "grommet/components/Value";
import Spinning from "grommet/components/icons/Spinning";
import LinkPrevious from "grommet/components/icons/base/LinkPrevious";
import Button from "grommet/components/Button";

import { pageLoaded } from "./utils";

import StepZilla from "react-stepzilla";

import Flags from "../questionnaire/Flags";
import Question1 from "../questionnaire/Question1";
import Question2 from "../questionnaire/Question2";
import Question3 from "../questionnaire/Question3";
import Last from "../questionnaire/Last";
import Final from "../questionnaire/Final";

import AnnounceIcon from "grommet/components/icons/base/Announce";

// Questionnaire Steps
const steps = [
  { name: "Country", component: <Flags /> },
  { name: "Question1", component: <Question1 /> },
  { name: "Question2", component: <Question2 /> },
  { name: "Question3", component: <Question3 /> },
  { name: "Final", component: <Final /> },
  { name: "Last", component: <Last /> }
];

class Questionnaire extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { match: { params }, dispatch } = this.props;
    pageLoaded("Questionnaire");
  }

  componentWillUnmount() {
    const { match: { params }, dispatch } = this.props;
  }

  render() {
    return (
      <Article primary={true} full={true}>
        <Header
          direction="row"
          size="small"
          colorIndex="light-2"
          align="center"
          responsive={false}
          pad={{ horizontal: "small" }}
        >
          <Box flex={true} justify="end" direction="row" responsive={false}>
            <Title>กระทรวงแรงงาน</Title>
            <Menu icon={<MenuIcon />} dropAlign={{ right: "right" }}>
              {/*   <Anchor href='#'
        className='active'>
        First
      </Anchor>
      <Anchor href='#'>
        Second
      </Anchor>
      <Anchor href='#'>
        Third
      </Anchor> */}
            </Menu>
          </Box>
        </Header>
        <Section pad="medium">
          <Box pad="medium" align="center" colorIndex="neutral-4-a">
            <AnnounceIcon />
          </Box>
          <StepZilla
            showSteps={false}
            steps={steps}
            nextButtonText="▸"
            backButtonText="◂"
            nextTextOnFinalActionStep="✔"
            startAtStep={0}
          />
        </Section>
      </Article>
    );
  }
}

Questionnaire.defaultProps = {
  error: undefined
};

Questionnaire.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
  match: PropTypes.object.isRequired
};

const select = state => ({ ...state });

export default connect(select)(Questionnaire);
