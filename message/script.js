const messageinput = document.getElementById("message-input");

messageinput.addEventListener("keydown",function(event){
    if(event.key == "Enter")
    getmessage();
})
function getmessage(){
    document.getElementById("message-output").innerHTML = messageinput.value ;
    messageinput.value = ""
}