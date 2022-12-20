let tasks=[];
let userInput;

$(".addNew").click(function() {
   userInput=$(".newToDo").val();
   tasks.push(userInput);
   $(".ToDoList").append("<li>"+userInput+"</li>");
   $(".numTasks").text(tasks.length);
   $(".newToDo").val('');
   
});


$(".cleartask").click(function(){
  tasks.pop();
  $(".ToDoList").text(tasks);
  $(".numTasks").text(tasks.length);
    
});