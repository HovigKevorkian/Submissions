const fs = require('fs');
// save the path form the command line
var AppPath;
if(process.argv[2]){
  AppPath = process.argv[2];
}else{
  AppPath = 'database.json';
}

//  save data on exit or quit.
const SaveData = (data, AppPath) => {
  try {
    fs.writeFileSync(AppPath, JSON.stringify(data))
  } catch (error) {
    console.error(error)
  }
}

//  load data from  database.json
const loadData = (AppPath) => {
  try {
    return fs.readFileSync(AppPath, 'utf8')
  } catch (error) {
    console.error(error)
    return false
  }
}


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
  //  if the file i want to load data from doens't exist , i create one and store the default values of listArrayOfObjects in it
  if(!fs.existsSync(AppPath)){
    SaveData(taskListArray, AppPath);
    }

  // load data from the file when statrting the app
  taskListArray = JSON.parse(loadData(AppPath));
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
var taskListArray = [ {Task: 'Go', checked: false},
                      {Task: 'Go Again', checked: false},
                      {Task: 'Go Again and again', checked: false},
                      {Task: 'Enough', checked: false} ]

function onDataReceived(text) {
  var textArray = text.trim().split(' ');
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  } else if (textArray[0] === 'hello' || textArray[0] === 'Hello') {
    hello(textArray);
  } else if (textArray[0] === 'help' || textArray[0] === 'Help') {
    help();
  } else if (textArray[0] === 'list' || textArray[0] === 'List') {
    list();
  } else if (textArray[0] === 'add' || textArray[0] === 'Add') {
    add(textArray);
  } else if (textArray[0] === 'edit' || textArray[0] === 'Edit') {
    edit(textArray);
  } else if (textArray[0] === 'check' || textArray[0] === 'Check') {
    check(textArray);
  } else if (textArray[0] === 'uncheck' || textArray[0] === 'Uncheck') {
    uncheck(textArray);
  } else if (textArray[0] === 'remove' || textArray[0] === 'Remove') {
    remove(textArray);
  } else {
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
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(textArray) {
  if(textArray[1] === undefined) {
    console.log(textArray[0] + '!')
  } else {
    console.log(textArray[0] + ' ' + textArray.slice(1).join(' ') + '!');
  }
}

/**
 * Show Task List
 *
 * @returns {void}
 */
function list() {
  for(var i = 0; i < taskListArray.length; i++) {
    var count = i + 1;
    if(taskListArray[i].checked == 'true') {
      console.log(count + ' [✓] ' + taskListArray[i].Task);
    } else {
      console.log(count + ' [ ] ' + taskListArray[i].Task);
    }

    // console.log(count + '. ' + taskListArray[i].Task);
  }
}

/**
 * Add Task to the List
 *
 * @returns {void}
 */
function add(textArray) {
  if(textArray[1] === undefined) {
    console.log('Please include a Task after \'Add\' or \'add\' - Example: Add \'Task Name\'');
  } else {
    taskListArray.push({Task: textArray.slice(1).join(' ').trim(), checked: false})
  }
}

/**
 * Remove Task from the List
 *
 * @returns {void}
 */
function remove(textArray) {
  taskNbr = textArray[1];
  if(taskNbr === undefined) {
    taskListArray.pop();
  } else if(taskNbr <= taskListArray.length) {
    taskListArray.splice((taskNbr-1), 1);
  } else {
    console.log('No such task number');
  }
}

/**
 * Edit Task inside the List
 *
 * @returns {void}
 */
function edit(textArray) {
  taskNbr = textArray[1];
  if(taskNbr === undefined) {
    console.log('Please include a Task number after \'Edit\' or \'edit\' - Example: Edit 2');
  } else if(isNaN(taskNbr)) {
    taskListArray.pop();
    taskListArray.push({Task: textArray.slice(1).join(' ').trim(), checked: false})
  }
    else if(taskNbr <= taskListArray.length) {
    taskListArray.splice((taskNbr-1), 1, {Task: textArray.slice(2).join(' ').trim(), checked: false});
  } else {
    console.log('No such task number');
  }
}

/**
 * Check Task inside the List
 *
 * @returns {void}
 */
function check(textArray) {
  taskNbr = textArray[1];
  if(taskNbr === undefined) {
    console.log('Please add a Task number after \'Check\' or \'check\' - Example: Check 2');
  } else if(isNaN(taskNbr)) {
    console.log('Please add a Task number after \'Check\' or \'check\' - Example: Check 2');
  }
    else if(taskNbr <= taskListArray.length) {
    taskListArray[taskNbr-1].checked = 'true';
  } else {
    console.log('No such task number');
  }
}

function uncheck(textArray) {
  taskNbr = textArray[1];
  if(taskNbr === undefined) {
    console.log('Please add a Task number after \'Check\' or \'check\' - Example: Check 2');
  } else if(isNaN(taskNbr)) {
    console.log('Please add a Task number after \'Check\' or \'check\' - Example: Check 2');
  }
    else if(taskNbr <= taskListArray.length) {
    taskListArray[taskNbr-1].checked = 'false';
  } else {
    console.log('No such task number');
  }
}

/**
 * This is a Help Menu for the application
 *
 */
function help() {
  console.log('Please choose from the below options:\n1 Help\n2 Hello\n3 List\n4 Add\n5 Check\n6 Uncheck\n7 Remove\n8 Exit or Quit\n');
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  SaveData(taskListArray, AppPath);
  console.log('Quitting now, goodbye!');
  process.exit();
}

// The following line starts the application
startApp('Charbel Youssef');
