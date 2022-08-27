import { Button, Box, Container } from "@mui/material";
import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import SimpleInput from "./StartUpInput";
import DisplayModal from "./DisplayModal";
import { startUpFields } from "./data";

const defaultvalues = {
  startUpName: "",
  industryName: "",
  location: "",
  founderName: "",
  email: "",
  contact: "",
  startUpPhase: "",
  discription: "",
  hire: "",
  help: "",
  links: "",
  hear: "",
};
const Form = () => {
  const [formValues, setFormValues] = React.useState(defaultvalues);
  const [open, setOpen] = React.useState(false);
  const [formErrors, setFormErrors] = React.useState({});
  const [isSubmit, setIsSubmit] = React.useState(false);

  const setForm = (input) => {
    if (input) {
      setFormValues((state) => ({ ...state, [input.name]: input.value }));
    }
  };
  const onClickHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formValues);
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  React.useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit === true) {
      setOpen(true);
    }
  }, [formErrors]);
  const required = "Required*";

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.founderName) {
      errors.founderName = required;
    }
    if (!values.email) {
      errors.email = required;
    } else if (!regex.test(values.email)) {
      errors.email = "Not a valid Email format";
    }
    if (!values.startUpPhase) {
      errors.startUpPhase = required;
    }
    if (!values.help) {
      errors.help = required;
    }
    return errors;
  };
  return (
    <>
      <Navbar />
      <Box
        sx={{
          backgroundColor: "#e5e1ed",
          fontSize: "62.5%",
          boxSizing: "border-box",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            backgroundColor: "#e5e1ed",
            fontSize: "62.5%",
            boxSizing: "border-box",
          }}
        >
          <form onSubmit={submitHandler}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                margin: " 0 1.5rem",
                textAlign: "left",
              }}
            >
              <Header />
              {Object.keys(startUpFields).map((field, index) => (
                <SimpleInput
                  key={[index, index]}
                  value={field}
                  title={startUpFields[field].title}
                  formValue={formValues[`${field}`]}
                  subtitle={startUpFields[field].subtitle}
                  options={startUpFields[field].options}
                  otherOption={startUpFields[field].otherOption}
                  onClickHandler={onClickHandler}
                  setForm={setForm}
                  formValues={formValues}
                  formErrors={formErrors}
                />
              ))}
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: "#340C64",
                  width: "8rem",
                  margin: "1rem 0",
                  fontSize: "1rem",
                  padding: ".5rem",
                  "&:hover": {
                    backgroundColor: "rgba(52,12,100, 0.9)",
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Container>
        <DisplayModal open={open} />
      </Box>
    </>
  );
};

export default Form;
