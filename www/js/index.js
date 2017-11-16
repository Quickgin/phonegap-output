$(document).on("pagecreate","#pageone",function(){
  $('#Button').on("click", function(){
    click();
  });            
});            

function random() {
    return !Math.round(Math.random()); 
}

function click(){
    var rand=random();
    
    if(rand)
        navigator.notification.beep(1); 
        //alert("hahaha");
        
    else
        navigator.notification.beep(2); 
        //alert("hehehe");
}

/*function submitText() {
	var text = $('#textinput').val();
	alert(text);
}

function storeValue(key, value) {
	//add some code to store the key-value pair in persistant storage 
}*/