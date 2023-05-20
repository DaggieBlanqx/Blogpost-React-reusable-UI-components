// ./index.jsx
import React, {useState} from "react";
import FormInput from "./components/FormInput.jsx";
import CustomSelect from "./components/CustomSelect.jsx";
import ToggleSwitch from "./components/ToggleSwitch.jsx";
import Button from "./components/Button.jsx";
import Modal from "./components/Modal.jsx";
import Form from "./components/Form.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Dialog from "./components/Dialog.jsx";

function App() {
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
    function onSelectChange(event) {
        console.log(event.target.value);
    }
    function onToggleChange(event) {
        console.log(event.target.checked);
    }
    return (
        <div className="App">
            <form>
                <Modal show={true} message={"Hello"}>
                    <p>THIS IS A MODAL</p>
                </Modal>
                <FormInput type={"text"} onChange={handleChange} />
                <FormInput type={"email"} onChange={handleChange} />
                <div>
                    <CustomSelect data={data} onSelectChange={onSelectChange} />
                </div>
                <div>
                    <ToggleSwitch
                        id="id"
                        defaultChecked={false}
                        disabled={false}
                        Text={["Yes", "No"]}
                        onToggleChange={onToggleChange}
                    />
                </div>
                <Button variant="danger" size={"sm"}>
                    Small Button
                </Button>
                <Button variant="primary" size={"lg"}>
                    Smaller Button
                </Button>
                <Button variant="warning" size={"xs"}>
                    Big Button
                </Button>
            </form>
        </div>
    );
}

export default App;
