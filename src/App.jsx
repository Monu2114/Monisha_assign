import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormLabel, Button } from "@mui/material";
import { useState } from "react";
export default function FormPropsTextFields() {
  const [title, setTitle] = useState("");
  const [budget, setBudget] = useState("");
  const [date, setDate] = useState("");
  const [expenses, setExpenses] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    const newExpense = {
      title,
      budget,
      date,
    };
    setExpenses((prev) => [...prev, newExpense]);
    setTitle("");
    setBudget("");
    setDate("");
  };
  return (
    <>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
        onSubmit={(e) => onSubmit(e)}
      >
        <div>
          <FormLabel>
            Title :
            <TextField
              id="title"
              label="Title"
              type="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoComplete="Title"
            />
          </FormLabel>
          <FormLabel>
            Spent :
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
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
            value={date}
            helperText="Some important text"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <Button type="submit">Submit</Button>
      </Box>
      {/* Displying Expenses */}
      <Box
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        {expenses &&
          expenses.map((expense, index) => {
            return (
              <div key={index}>
                <strong>Title:</strong> {expense.title} <br />
                <strong>Budget:</strong> ₹{expense.budget} <br />
                <strong>Date:</strong> {expense.date}
              </div>
            );
          })}
      </Box>
    </>
  );
}
