import React, { useState } from "react";
import Accordian from "./components/Accordion";
import Search from "./components/Search";
import DropDown from "./components/DropDown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React ?",
    content: "React is a frontend javascript framework",
  },
  {
    title: "Why use React ?",
    content: "React is a favourite library among engineers",
  },
  {
    title: "How do you use React ?",
    content: "You use react by creating components",
  },
];

const options = [
  {
    label: "The color red",
    value: "red",
  },
  {
    label: "The color green",
    value: "green",
  },
  {
    label: "A shade of blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  //const [showDropdown, seShowDropdown] = useState(true);
  return (
    <div>
      {/* <button onClick={() => seShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {
        showDropdown ? 
        <DropDown
          label='Select a Color'
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
        : null
      } */}
      <Header />
      <Route path="/">
        <Accordian items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <DropDown
          label="Select a Color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
