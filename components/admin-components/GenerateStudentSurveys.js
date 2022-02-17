//imports
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Link,
  Table,
  Tbody,
  Tr,
  Input,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import TextField from "@mui/material/TextField";
const jwt = require("jsonwebtoken");
//api
import { getCoursesByDepartment } from "../../api/APIHelper";
//hooks
import useToggle from "../../hooks/useToggle";
const GenerateStudentSurveys = () => {
  const [courseList, setCourses] = useState();
  //toggle sort by instructor
  const [sortByInstructor, toggleSortByInstructor] = useToggle();
  const getNewCourses = async () => {
    const coursesRes = await getCoursesByDepartment("Fall", "2022", "CSCE");
    const courses = coursesRes.data;
    setCourses({
      ...courseList,
      courses,
    });
  };
  const secretKey = process.env.SURVEY_JWT_KEY;
  const renderSurveyList = courseList
    ? courseList.courses.map((course, idx) => {
        var token = jwt.sign(
          {
            courseNumber: course.courseNumber,
            courseSemester: course.semester,
            courseYear: course.year,
            instructorID: course.coordinatorEUID,
            departmentName: course.department,
            displayName: course.displayName,
          },
          secretKey
        );
        var link = "http://localhost:3000/survey/" + token;
        return (
          <>
            <Tr key={idx} bg={idx % 2 == 0 ? "gray.300" : "gray.100"}>
              <Td>
                {course.department} {course.courseNumber},{course.displayName},
                IntsructorEUID: {course.coordinatorEUID}, Survey Link:{" "}
                <Link
                  color="teal"
                  href={link}
                  onClick={() => {
                    navigator.clipboard.writeText(this.state.textToCopy);
                  }}
                >
                  Student Survey Link(Right click and copy)
                </Link>
              </Td>
            </Tr>
          </>
        );
      })
    : null;

  useEffect(() => {
    getNewCourses();
  }, []);

  useEffect(() => {
    if (!courseList) return;
    console.log(sortByInstructor);
    const courses = sortByInstructor
      ? courseList.courses.sort((a, b) => (a.lastName > b.lastName ? 1 : -1))
      : courseList.courses.sort((a, b) =>
          a.courseNumber > b.courseNumber ? 1 : -1
        );
    setCourses({
      ...courseList,
      courses,
    });
  }, [sortByInstructor]);

  return (
    <div id="top">
      {courseList ? (
        <Box rounded="lg" alignItems="center" m="1em" p="3em">
          <Button onClick={toggleSortByInstructor} mb="1em">
            {sortByInstructor ? "Sort by Course Number" : "Sort by Instructor"}
          </Button>
          <Table variant="striped" colorScheme="green" padding="1em">
            <TableCaption
              placement="top"
              fontWeight="bold"
              fontSize="2xl"
              mt="1em"
              textColor="black"
            >
              Generate Student Surveys
            </TableCaption>
            <Tbody>{renderSurveyList}</Tbody>
          </Table>
        </Box>
      ) : null}
    </div>
  );
};

export default GenerateStudentSurveys;
