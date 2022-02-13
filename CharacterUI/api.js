
 document.getElementById('getFrequency').addEventListener('click',validateForm);
    let inputText = document.getElementById('userInput');
    let url = "http://localhost:8082/getCharacterCount/";
    function validateForm(){
        if(inputText.value == "" )
        {
            alert('Oops! you will have to enter some text first :)');
        }
        else{
            getFrequency();
        }
    }
    function getFrequency(){
    let inputText = document.getElementById('userInput').value;
    url+=inputText;
    console.log(url);
    //API call
        fetch(url)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data);
            var div = document.getElementById("output");


            div.innerHTML="";
            div.style.color="blue";
            div.style.fontSize="1em";
            div.style.fontStyle="15px/1.5 Arial,Helvetica,sans-serif";


            var tmpText;
            var visArr = [];
            for(var i=0;i<257;i++)
            {
                visArr.push(false);
            }
            console.log(typeof data);
            for(let i = 0; i<inputText.length; i++)
            {
                let index = inputText.charCodeAt(i);
                if(data[index] != 0){
                    if(visArr[index] == true)
                        continue;
                    else{
                        tmpText = inputText[i] + " : " + data[index];
                        visArr[index] = true;
                        div.appendChild(document.createTextNode(tmpText));
                        div.appendChild(document.createElement("br"));
                    }
                }
            }
        });
    }