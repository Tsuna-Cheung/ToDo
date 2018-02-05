Backendless.initApp("B7472B45-590F-C195-FFB7-82A61F737500","86BE4E33-1AA6-B927-FF13-350293F5D200");

$(document).on("pageshow","#todoPage", onPageShow);

function onPageShow() {
	console.log("page shown");
} 

Backendless.Data.of("TASKS").find().then(processResults).catch(error);

function processResults(tasks) {
   //display the first task in an array of tasks. 
alert(tasks[0].Task)
}

function error(err) {
    alert(err);
}

