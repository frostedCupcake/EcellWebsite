import {
  Box,
  Paper,
  TextField,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";

const StartUpInput = ({
  title,
  value,
  type = "text",
  onClickHandler,
  subtitle = "",
  options,
  otherOption,
  setForm,
  formErrors,
}) => {
  const [other, setOther] = React.useState(true);
  const [otherText, setOtherText] = React.useState("");
  const [optionRadio, setOptionRadio] = React.useState();
  const [textField, setTextField] = React.useState({ value: "", name: null });

  const onChangeHandler = (e) => {
    if (e.target.name === "other") {
      setOther(false);
      setOptionRadio(e.target.value);
    } else {
      setOther(true);
      setOptionRadio(e.target.value);
    }
  };

  useEffect(() => {
    function task() {
      setForm(textField);
    }
    let refresh = setTimeout(task, 1000);

    return () => {
      clearTimeout(refresh, task);
    };
  }, [textField]);

  return (
    <>
      <Paper
        sx={{
          width: "100%",
          margin: "1rem auto 0 ",
          borderRadius: "10px",
          color: "#340C64",
          border: "2px solid #340C64",
        }}
        elevation={1}
      >
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            flexDirection: "column",
            padding: "2.5rem 2rem",
          }}
        >
          <Typography
            sx={{
              textTransform: "capitalize",
              fontSize: { xs: "1rem", sm: "1.3rem" },
            }}
          >
            {title}
          </Typography>
          {subtitle !== "" && (
            <Typography
              sx={{
                fontSize: { xs: ".8rem", sm: "1rem" },
                marginTop: "-1rem",
                color: "gray",
              }}
            >
              {subtitle}
            </Typography>
          )}

          {options ? (
            <FormControl>
              <RadioGroup
                aria-labelledby="radio-buttons-group-label"
                onChange={onChangeHandler}
              >
                {options.map((el) => (
                  // The radio options if the input type is Radio type
                  <FormControlLabel
                    key={el}
                    value={el}
                    onChange={onClickHandler}
                    name={value}
                    control={<Radio />}
                    label={
                      <Typography
                        sx={{
                          textTransform: "capitalize",
                          fontSize: { xs: ".9rem", sm: "1.2rem" },
                        }}
                      >
                        {el}
                      </Typography>
                    }
                  />
                ))}
                {otherOption ? (
                  // this is the radio button used to enable the others option in radio options list
                  <FormControlLabel
                    value=""
                    control={<Radio />}
                    name={"other"}
                    label={
                      <Typography
                        sx={{
                          textTransform: "capitalize",
                          fontSize: { xs: ".9rem", sm: "1.2rem" },
                        }}
                      >
                        Other
                      </Typography>
                    }
                  />
                ) : (
                  ""
                )}
              </RadioGroup>
              {otherOption ? (
                // other options field if selected opens this text field
                <div>
                  <TextField
                    sx={{
                      width: { xs: "100%" },
                    }}
                    id="outlined-textarea"
                    disabled={other}
                    label="Your Answer"
                    name={value}
                    value={otherText?.value || ""}
                    onChange={(e) => {
                      setOtherText({
                        value: e.target.value,
                        name: e.target.name,
                      });
                      onClickHandler(e);
                    }}
                  />
                  <p
                    style={{
                      color: "red",
                      fontSize: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    {formErrors[value]}
                  </p>
                </div>
              ) : (
                ""
              )}
            </FormControl>
          ) : (
            // for text input
            <div>
              <TextField
                sx={{
                  width: { xs: "100%" },
                }}
                id="outlined-textarea"
                type={type}
                label="Your Answer"
                name={value}
                value={textField.value}
                onChange={(e) => {
                  setTextField({ value: e.target.value, name: e.target.name });
                }}
                error={Boolean(formErrors[value])}
              />
              <p
                style={{
                  color: "red",
                  fontSize: "1rem",
                  marginTop: "1rem",
                }}
              >
                {formErrors[value]}
              </p>
            </div>
          )}
        </Box>
      </Paper>
    </>
  );
};

export default StartUpInput;
