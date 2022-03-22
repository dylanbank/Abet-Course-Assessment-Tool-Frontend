import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from "@chakra-ui/react";

const AdminMenu = ({ setView }) => {
  return (
    <Accordion allowToggle>
      <Text
        textAlign="left"
        fontSize="1.1em"
        fontWeight="bold"
        mt="2em"
        mb="1em"
      >
        <u>Report management</u>
      </Text>

      <AccordionItem>
        <AccordionButton
          _expanded={{ bg: "#38A169", color: "white" }}
          textAlign="left"
          onClick={() => {
            setView("GFR");
          }}
        >
          Generate Full Report
        </AccordionButton>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton
          _expanded={{ bg: "#38A169", color: "white" }}
          textAlign="left"
          onClick={() => {
            setView("GSS");
          }}
        >
          Generate Student Surveys
        </AccordionButton>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton
          _expanded={{ bg: "#38A169", color: "white" }}
          textAlign="left"
          onClick={() => {
            setView("GSR");
          }}
        >
          Generate Section Report
        </AccordionButton>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton
          _expanded={{ bg: "#38A169", color: "white" }}
          textAlign="left"
          onClick={() => {
            setView("OM");
          }}
        >
          Student Outcome Mapping
        </AccordionButton>
      </AccordionItem>

      <Text
        textAlign="left"
        fontSize="1.1em"
        fontWeight="bold"
        mt="2em"
        mb="1em"
      >
        <u>Major/Course Outcome</u>
      </Text>

      <AccordionItem>
        <AccordionButton
          _expanded={{ bg: "#38A169", color: "white" }}
          textAlign="left"
          onClick={() => {
            setView("ACMO");
          }}
        >
          1) Assign course to major outcome
        </AccordionButton>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton
          _expanded={{ bg: "#38A169", color: "white" }}
          textAlign="left"
          onClick={() => {
            setView("ANOTM");
          }}
        >
          2) Add new outcome to major
        </AccordionButton>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton
          _expanded={{ bg: "#38A169", color: "white" }}
          textAlign="left"
          onClick={() => {
            setView("AOTC");
          }}
        >
          3) Assign outcome to course
        </AccordionButton>
      </AccordionItem>

      <Text
        textAlign="left"
        fontSize="1.1em"
        fontWeight="bold"
        mt="2em"
        mb="1em"
      >
        <u>Survey</u>
      </Text>

      <AccordionItem>
        <AccordionButton
          _expanded={{ bg: "#38A169", color: "white" }}
          textAlign="left"
          onClick={() => {
            setView("ESQ");
          }}
        >
          Edit Student Survey Questions
        </AccordionButton>
      </AccordionItem>

      <Text
        textAlign="left"
        fontSize="1.1em"
        fontWeight="bold"
        mt="2em"
        mb="1em"
      >
        <u>Departmental Changes</u>
      </Text>

      <AccordionItem>
        <AccordionButton
          _expanded={{ bg: "#38A169", color: "white" }}
          textAlign="left"
          onClick={() => {
            setView("CNS");
          }}
        >
          Create New Semester
        </AccordionButton>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton
          _expanded={{ bg: "#38A169", color: "white" }}
          textAlign="left"
          onClick={() => {
            setView("EAC");
          }}
        >
          Edit Assigned Courses
        </AccordionButton>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton
          _expanded={{ bg: "#38A169", color: "white" }}
          textAlign="left"
          onClick={() => {
            setView("EFL");
          }}
        >
          Edit Faculty List
        </AccordionButton>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton
          _expanded={{ bg: "#38A169", color: "white" }}
          textAlign="left"
          onClick={() => {
            setView("CNM");
          }}
        >
          Edit Major List
        </AccordionButton>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton
          _expanded={{ bg: "#38A169", color: "white" }}
          textAlign="left"
          onClick={() => {
            setView("CNM");
          }}
        >
          Edit Course List
        </AccordionButton>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton
          _expanded={{ bg: "#38A169", color: "white" }}
          textAlign="left"
          onClick={() => {
            setView("ECO");
          }}
        >
          Edit Course Outcomes
        </AccordionButton>
      </AccordionItem>
    </Accordion>
  );
};
export default AdminMenu;
