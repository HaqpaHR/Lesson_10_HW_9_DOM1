function createInputField() {
    const inputField = document.createElement("form");
    inputField.className = "input_field";

    const input = document.createElement("input");
    input.className = "name_field";
    input.placeholder = "Put name";

    const addButton = document.createElement("button");
    addButton.className = "button_add";
    addButton.innerText = "Add user";
    addButton.type = "submit";

    inputField.appendChild(input);
    inputField.appendChild(addButton);

    return {inputField, input, addButton};
};

function createUserName(name) {
    const userName = prompt("On which name do you want to change it?");
    if(userName) {
        return userName 
    }else{ alert("wrong name")
        return name}
};

function createListContainer() {
    const list = document.createElement("div");
    list.className = "list_container";

    return list;
};

function createButton(title){
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = title;
    button.className = "button add";

    return button;
};

function createListInputs(userName) {
    const listItem = document.createElement("div");
    listItem.className = "users";

    const listRow = document.createElement("span");
    listRow.className = "user_name";
    listRow.innerText = userName;

    const buttonEdit = createButton("Edit");
    buttonEdit.className = "button_edit";
    buttonEdit.addEventListener("click", function(){
        listRaw.buttonEdit = createUserName(listRaw.innerText);
        
    });    

    const buttonRemove = createButton("Remove");
    buttonRemove.className = "button_remove";
    buttonRemove.addEventListener("click", function() {
        if(confirm("are you sure?")) {
            listItem.parentNode.removeChild(listItem);
        }
    });

    return {listItem, buttonEdit, buttonRemove}

};

function createUserList() {
    const inputFieldContainer = createInputField();
    const input = inputFieldContainer.input;
    const addButton = inputFieldContainer.addButton;

    const listContainer = createListContainer();
 
    //Button Add Event
    addButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (input.value) {
            const newListItem = createListInputs(input.value);
            listContainer.appendChild(newListItem);
            input.value = "";
        } else {
            alert("Invalid name");
        }
    })

    return { inputFieldContainer, listContainer };
}

const list = createUserList();
document.body.appendChild(list.inputFieldContainer.inputField);
document.body.appendChild(list.listContainer);