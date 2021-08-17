var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";

function errorHandler(error) {  //error handling
    alert("Oops, something went wrong with the server, try again later!!", error);
}

function getTranslationURL(text) {              
    return serverURL + "?" + "text=" + text;
}

function clickHandler() {
    var inputText = txtInput.value; //taking input
    
    // calling server for processing
    fetch(getTranslationURL(inputText)) 
        .then(response => response.json()) 
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; //output on browser
        })
        .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler) //listening to event click