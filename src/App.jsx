// ./index.jsx
import { useState } from "react";
import FormInput from "./components/FormInput.jsx";
import CustomSelect from "./components/CustomSelect.jsx";
import Button from "./components/Button.jsx";
import FormWrapper from "./components/FormWrapper.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Modal from "./components/Modal.jsx";
import ToggleSwitch from './components/ToggleSwitch.jsx';

function App() {
  const [formTwoSearch, modify_formTwoSearch] = useState("");
  const [isModalShowing, setIsModalShowing] = useState(false);

  const data = [
    {
      id: "1",
      name: "One",
    },
    {
      id: "2",
      name: "Two",
    },
    {
      id: "3",
      name: "Three",
    },
    {
      id: "4",
      name: "Four",
    },
  ];

  function handleChange(event) {
    console.log(event.target.value);
  }

  function onToggleChange(status) {
    console.log({ toggle: status })
  }

  const formOneSubmitter = ({ event }) => {
    console.log("Form One can be submitted");
    event.preventDefault();
  };

  const formTwoSubmitter = ({ event }) => {
    console.log("Form Two can be submitted");
    event.preventDefault();
  };

  return (
    <>
      <FormWrapper onSubmit={formOneSubmitter} title="Form One">
        
        <CustomSelect
          data={data}
          title="Select number of bedrooms"
          onSelectChange={(event) => console.log(`Got ${event.target.value}`)}
        />

        <FormInput title="Email address" type={"email"} onChange={handleChange} />
        
        <FormInput title="Enter password" type={"password"} onChange={handleChange} />
       
        
        <ToggleSwitch disabled={false} defaultChecked={true} onToggleChange={onToggleChange} OnTitle="Agree" OffTitle="Disagree" />

        
        <Button type="submit" variant="primary" size={"lg"}> Submit data </Button>
      </FormWrapper>

      <FormWrapper onSubmit={formTwoSubmitter} title="Form Two">
        <SearchBar
          placeHolder="Find a house near me"
          onSearch={(searchTerm) => modify_formTwoSearch(searchTerm)}
        />
        &nbsp;
        <Button type="reset" variant="warning" size={"sm"}>
          Clear Form
        </Button>
        
        {formTwoSearch && (
          <p>
            Searching for "<b>{formTwoSearch}</b>"
          </p>
        )}
      </FormWrapper>

      <>
        <Button onClick={() => setIsModalShowing(true)}>View modal</Button>
        <Modal isShowing={isModalShowing} onClose={() => setIsModalShowing(false)}>
          <h3>About this app</h3>
          <p>
            Here's how to use functional components & hooks (e.g useState, useRef etc)
            to create reusable components.
          </p>
          <Button>
            <a href="https://blog.logrocket.com/author/daggieblanqx/">
              See more articles
            </a>
          </Button>
          &nbsp;
          <Button onClick={() => setIsModalShowing(false)}>Close Modal</Button>
        </Modal>
      </>
    </>
  );
}
export default App;
