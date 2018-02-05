Backendless.initApp("B7472B45-590F-C195-FFB7-82A61F737500","86BE4E33-1AA6-B927-FF13-350293F5D200");

var objId = "";
$(document).on("pageshow","#todopage", onPageShow);


function onPageShow() {
	console.log("page shown");
    
    $('#select-native-1').on('change', function() {
        objId=this.value;
        console.log( objId );
    });
} 

Backendless.Data.of("TASKS").find().then(processResults).catch(error);

function processResults(tasks) {
   //display the first task in an array of tasks. 
    alert(tasks[1].Task)
   
    $('#taskList').empty();
    $('#select-native-1').empty();
    
    for (var i = 0; i < tasks.length; i++) { 
        $('#taskList').append("<li>"+tasks[i].Task + "     "+ tasks[i].completionFlag +"</li>");
        $('#select-native-1').append("<option value=" + tasks[i].objectId + ">"+tasks[i].Task+"</option>");
    }
    $('#taskList').listview('refresh');
    
   
}

function error(err) {
    alert(err);
}

$(document).on("click", "#addTaskButton", onAddTask);

function onAddTask() {
		console.log("add task button clicked");
        var tasktext = $('#addTaskText').val();
        var newTask = {};
        newTask.Task = tasktext;
        Backendless.Data.of("Tasks").save(newTask).then(saved).catch(error); 
}

function saved(savedTask) {
console.log( "new Task instance has been saved" + savedTask);
}


$(document).on("click", "#deleteTaskButton", onDeleteTask);

function onDeleteTask() {
    console.log("delete task button clicked" + objId);
    Backendless.Data.of( "TASKS" ).remove( { objectId:objId } )
        .then(deleted)
        .catch(error);
    
}
function deleted(deletedTask)
{ console.log("The Task instance has been deleted" + deletedTask);}


