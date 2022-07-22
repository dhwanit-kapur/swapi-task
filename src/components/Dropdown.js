import React, { useState, useEffect } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import "../css/Dropdown.css";

const Dropdown = () => {
  const [selected, setSelected] = useState(2);
  const [route, setRoute] = useState("");
  const [rowData, setRowData] = useState([]);

  const history = useHistory();

  const selectionHandler = (event) => {
    setSelected(event.target.value);
    console.log(event.target);
    if (selected === 1) {
      setRoute("people");
    } else if (selected === 2) {
      setRoute("planets");
    } else if (selected === 3) {
      setRoute("films");
    } else if (selected === 4) {
      setRoute("species");
    } else if (selected === 5) {
      setRoute("vehicles");
    } else if (selected === 6) {
      setRoute("starships");
    }
  };

  useEffect(() => {
    console.log("Route is: ", route);
    fetch(`https://swapi.dev/api/${route}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.results);
        const results = json.results;
        console.log(results);
        setRowData(results);
      });
  }, [route]);

  const handleOnClick = (data) => {
    history.push("/name");
  };

  return (
    <div className="dropdown">
      <div className="dropdown-form">
        <FormControl className="dropdown-menu">
          <Select
            value={selected}
            onChange={selectionHandler}
            style={{ marginTop: 100, marginLeft: 100 }}
          >
            <MenuItem value={1}>people</MenuItem>
            <MenuItem value={2}>planets</MenuItem>
            <MenuItem value={3}>films</MenuItem>
            <MenuItem value={4}>species</MenuItem>
            <MenuItem value={5}>vehicles</MenuItem>
            <MenuItem value={6}>starships</MenuItem>
          </Select>
          <FormHelperText>Select an option</FormHelperText>
        </FormControl>
      </div>
      <div className="dropdown-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Edited</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowData &&
              rowData.map((d, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell onClick={() => handleOnClick(d)}>
                      {d.name}
                    </TableCell>
                    <TableCell>{d.created}</TableCell>
                    <TableCell>{d.edited}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Dropdown;
