//создание Input контейнера
function createInputField() {
    const container = document.createElement('div');
    container.className = "input-field";
    
    const span = document.createElement("span");
    span.className = "input_span"
    span.innerText = "Put name: ";

    const input = document.createElement("input");
    input.type = "text";
    input.className = "name_user";
    input.placeholder = "Put your name";

    const buttonAddName = createButton("Add Name");
    buttonAddName.type = "submit";
       
    container.appendChild(span);
    container.appendChild(input);
    container.appendChild(buttonAddName);

    return {container, input};

};
// создание кнопки 
function createButton(title){
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = title;
    button.className = "button add";

    return button
};

//Edit user name
function createUserName(name) {
    const userName = prompt("Create new name");
    if (userName) {
        return userName;
    } else {
        alert("Invalid name");
        return name;
    }
};

// создание контейнера для списка

function createListContainer(){
    const list = document.createElement("ul");
    list.classList.add('list');

    let names = createListInputs();

    list.appendChild(names);

    return list
};

// добавление userов

function createListInputs(userName){
    const listItem = document.createElement("li");
    listItem.classList.add("user_list");

    const listRaw = document.createElement("span");
    listRaw.className = "users_name"
    listRaw.innerText = userName;

    const buttoneEdit = createButton("Edit");
    buttoneEdit.className = "button_edit";
    buttoneEdit.addEventListener("click", function(){
        listRaw.buttoneEdit = createUserName(listRaw.innerText);
        listRaw.innerText = createUserName(listRaw.innerText)       
    });    

    const buttonRemove = createButton("Remove");
    buttonRemove.className = "button_remove";
    buttonRemove.addEventListener("click", function() {
        if(confirm("are you sure?")) {
            listItem.parentNode.removeChild(listItem);
        }
    })

    listItem.appendChild(listRaw);
    listItem.appendChild(buttoneEdit);
    listItem.appendChild(buttonRemove);
    
    return listItem
}


function createForm(){
    const form = document.createElement("form");
    form.className = "input_form";

    const nameContainer = createInputField();

    const buttonAddSomeName = nameContainer.container.querySelector("button");
    const list = createListContainer();
    buttonAddSomeName.addEventListener("click", function(event){
        event.preventDefault();
        if(nameContainer.input.value) {
            const newListItem = createListInputs(nameContainer.input.value);
            list.appendChild(newListItem);
            nameContainer.input.value = "";
        } else {
            alert("Invalid name");
        }
        
    })


    form.appendChild(nameContainer.container);
    

    return {form, list}
}

const form = createForm()
document.body.appendChild(form.form);
document.body.appendChild(form.list)