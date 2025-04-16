import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormLabel, Button } from "@mui/material";
import { useState } from "react";
export default function FormPropsTextFields() {
  const [title, setTitle] = useState("");
  const [budget, setBudget] = useState("");
  const [date, setDate] = useState("");
  const [formClick, setFormClick] = useState(false);

  function onSubmit() {
    return setFormClick(true);
  }
  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
      onSubmit={() => onSubmit()}
    >
      <div>
        <FormLabel>
          Title :
          <TextField
            id="title"
            label="Title"
            type="Title"
            onChange={(e) => setTitle(e.target)}
            autoComplete="Title"
          />
        </FormLabel>
        <FormLabel>
          Spent :
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            onChange={(e) => setBudget(e.target)}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
        </FormLabel>
        <TextField
          id="Date"
          label="Date"
          type="date"
          defaultValue="Date"
          helperText="Some important text"
          onClick={(e) => setDate(e.target)}
        />
      </div>
      <Button onClick={() => onSubmit()}>Submit</Button>
    </Box>
  );
}
