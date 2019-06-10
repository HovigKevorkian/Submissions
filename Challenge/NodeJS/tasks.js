
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  var newtask = text.split(" ");
  var inputstring =  text.split(" ");
  var removing =  text.split(" ");
  if (text === 'quit\n' ||  text === 'exit\n') {
    quit();
  }
  

  else if(inputstring[0] === 'hello' || text === 'hello\n'){
    hello(inputstring);
  }
  
  else if ( text === "help\n") {
  help();
  }

  else if (text === "list\n") {
    list();
  }
  else if ( newtask[0] === "add" || text === "add\n") {
    add(newtask);
  }
  else if ( removing[0] === "remove" || text === "remove\n") {
  remove(removing);
  }
  else if (text === newtask[0] === "edit" || text === "edit\n"){
    edit(newtask);
  }

  
  else  {
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */

function hello(whatever){
 console.log(whatever.join(" ").replace("\n", "") + "!");

}


/**
 * Exits the application
 *
 * @returns {void}
 */

function quit(){
  console.log('Quiting now, goodbye!')
  process.exit();
}
//  Displays all available commands  .
// list: will list the items in the tasks object list.
// add : will insert a new element in the tasks object.
// remove: will remove the last element in the object, remove 1,2: will remove the first and second element accordingly.
function help() {
  console.log( "hello\n" + "exit\n" + "Quit\n" );
  
}

var tasks = [
  "print",
  "copy",
  "paste",
  "move"
]

function list() {
  var i ;
for (i=0  ; i < tasks.length; i++){
 console.log(i+1 + " " + tasks[i]);
}
}


function add(addatask) {
  if (addatask.length >= 2) {
     addatask.shift();
     tasks.push(addatask.join(" ").replace("\n", ""));

  }
else if (addatask.length == 1 ) {
    console.log("Error");
}
console.log(tasks);
}

function remove(toberemoved) {
if (toberemoved.length === 1) {
  tasks.splice(-1,1);

}
else if (toberemoved.length > 1) { 
  if (toberemoved[1] < tasks.length && toberemoved[1] > 0){
    tasks.splice(toberemoved[1]-1,1);
   }
   else {
     console.log("There is no such element");
  
   }
  }
}

function edit(newtext){
if(newtext.length === 1) {
  console.log("Error");
}
else if (newtext.length > 1){
  
}
}

// The following line starts the application
startApp("Hovig Kevorkian")
