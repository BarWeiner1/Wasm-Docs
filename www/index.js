import * as wasm from "flux";

    let Submit = document.getElementById("Submit")
    Submit.onclick = () => {
        let identifier = document.getElementById("text").value
        let documentation = wasm.get_json_documentation(identifier);
        document.getElementById("documentation").innerHTML= "Documentation: " + documentation;
    }



