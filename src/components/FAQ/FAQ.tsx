import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
import "./FAQ.css";
import { IoIosArrowForward } from "react-icons/io";

const Accordion = withStyles({
  root: {
    boxShadow: "none",
    textAlign: "left",
    fontSize: "16px",
    fontFamily: "Audiowide cursive",
    color: "white",
    borderRadius: "5px",
    fontWeight: "bolder",
    backgroundColor: "black",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "white",
    borderRadius: "5px",
    color: "black",
    margin: "30px 0",
    marginBottom: -1,
    minHeight: 89,
    paddingRight: "50px",
    "&$expanded": {
      minHeight: 89,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2.5),
  },
}))(MuiAccordionDetails);

const CustomizedAccordions: React.FC = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div id="FAQ" className="faq-component">
      <h1>FAQ</h1>
      <div className="accordion-wrpper">
        <Accordion
          square
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              className={
                expanded === "panel1"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <IoIosArrowForward
                size="30"
                className={expanded === "panel1" ? "arrow active" : "arrow"}
              />
              What is Monkey Heist Club
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Monkey Heist Club is story of 5555 animated monkeys that became
              world-famous thieves. MHC not only comes as NFT but also as comic
              and play to earn game.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography
              className={
                expanded === "panel2"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <IoIosArrowForward
                size="30"
                className={expanded === "panel2" ? "arrow active" : "arrow"}
              />
              Are all 5555 Monkeys really animated?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Yes! Every single MHC is animated!</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography
              className={
                expanded === "panel3"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <IoIosArrowForward
                size="30"
                className={expanded === "panel3" ? "arrow active" : "arrow"}
              />
              Where i can see my monkey?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Your MHC will appear on connected wallet you used to purchase the
              MHC. You can see your MHC on Opensea. You are free to do anything
              with them under a non-exclusive license.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography
              className={
                expanded === "panel4"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <IoIosArrowForward
                size="30"
                className={expanded === "panel4" ? "arrow active" : "arrow"}
              />
              Will there be a presale?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              There won't be any whitelist/presale. We reserved 100 MHC for
              giveaway winners and marketing purposes. FAIRLAUNCH everybody will
              have chance to buy!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
export default CustomizedAccordions;
