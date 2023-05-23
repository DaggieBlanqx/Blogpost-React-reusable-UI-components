// ./App.jsx
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

  const handleChange = (value) => console.log(value);
  const onToggleChange = (status) => console.log({ toggle: status });

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
          data={["One", "Two", "Three", "Four"]}
          title="Select number of bedrooms"
          onSelectChange={(event) => console.log(`Got ${event.target.value}`)}
        />

        <FormInput title="First Name" type={"text"} onChange={handleChange} autocomplete={"given-name"} />

        <FormInput title="Last Name" type={"text"} onChange={handleChange} autocomplete={"family-name"} />

        <FormInput title="Email address" type={"email"} onChange={handleChange} autocomplete={false} />

        <FormInput title="Enter password" type={"password"} onChange={handleChange} />


        <ToggleSwitch disabled={false} defaultChecked={true} onToggleChange={onToggleChange} OnTitle="Agree" OffTitle="Disagree" />

        <Button type="submit" variant="primary" size={"lg"}> Submit data </Button>

        &nbsp;

      </FormWrapper>

      <FormWrapper onSubmit={formTwoSubmitter} title="Form Two">
        <SearchBar
          placeHolder="Find a house near me"
          onSearch={(searchTerm) => modify_formTwoSearch(searchTerm)}
        />

        &nbsp;

        <Button type="submit" variant="success" size={"sm"}> Search </Button>

        &nbsp;

        <Button type="reset" variant="warning" size={"sm"} onClick={() => modify_formTwoSearch("")}> Clear Form </Button>

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
          <p> Try creating reusable components now!.</p>
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
