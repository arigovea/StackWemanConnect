async function getData(id) {
  if(id > 0 && id <= 100){
    var response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    var data = await response.json();
    reset();
    return data;
  }else{
    addError();
    deleteLoading();
  }
}
var getName = async (id) =>{
  var response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  var data = await response.json();
  return data.name;
}

async function getId() {
  if(document.getElementsByTagName("label").length === 2){
    deleteError();
  }
  showLoading();
  var infosingle = await getData(document.getElementById("id").value);
  var name = await getName(infosingle.userId);
  deleteLoading();
  var list = document.createElement("ul");
  var li1 = document.createElement("li");
  var txt1 = document.createTextNode(JSON.stringify("Id: " + infosingle.id));
  li1.appendChild(txt1);
  list.appendChild(li1);
  var li2 = document.createElement("li");
  var txt2 = document.createTextNode(JSON.stringify("Name: " + name));
  li2.appendChild(txt2);
  list.appendChild(li2);
  var li3 = document.createElement("li");
  var txt3 = document.createTextNode(JSON.stringify("Title: " + infosingle.title));
  li3.appendChild(txt3);
  list.appendChild(li3);
  var li4 = document.createElement("li");
  var txt4 = document.createTextNode(JSON.stringify("Body: " + infosingle.body));
  li4.appendChild(txt4);
  list.appendChild(li4);
  document.getElementById("container").appendChild(list);
}

function  DataToHtml(data){

}
function showLoading() {
  var loading = document.createElement("label");
  var textLoading = document.createTextNode("Loading...");
  loading.id = "load";
  loading.appendChild(textLoading);
  document.getElementById("format").appendChild(loading);
}
function deleteLoading() {
  var element = document.getElementById("load");
  document.getElementById("format").removeChild(element);
}
function reset() {
  document.getElementById("id").value = "";
}
function addError(){
  var error = document.createElement("label");
    var txt = document.createTextNode("Agrega un valor válido");
    error.appendChild(txt);
    document.getElementById("format").appendChild(error);
}
function deleteError(){
  var error = document.getElementsByTagName("label")[1];
  var format =  document.getElementById("format");
  format.removeChild(error);
}