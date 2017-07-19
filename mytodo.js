    //This function check the local storage and display 
	//the contents from it to the browser.
	//if there's no content, it returns null.
	function get_todos() 
    {
        var mytodos = new Array;
        var todos_str = localStorage.getItem('mytodo');
        if(todos_str !== null){
            mytodos = JSON.parse(todos_str); 
            }
        return mytodos;
    }
     
    function assign() //The function for assigning activities to the app.
	{
    var activity = document.getElementById('activity').value;
    var mytodos = get_todos();
    mytodos.push(activity);
    localStorage.setItem('mytodo', JSON.stringify(mytodos));
    display();
    return false;
    }
     
    function delete_item() //This function deletes todo activities from the list of activities
	{
    var id = this.getAttribute('id');
    var mytodos = get_todos();
    mytodos.splice(id, 1);
    localStorage.setItem('mytodo', JSON.stringify(mytodos));
    display();
    return false;
    }
     
    function display() //Function for updating and displaying the todo items
	{
    var mytodos = get_todos();
    var html = '<ul>';
    for(var i=0; i < mytodos.length; i++) {
    html += '<li class"todolist">' + mytodos[i] + '<button class="delete_item" id="' + i  + '">x</button></li>'; };
    html += '</ul>';
    document.getElementById('mytodos').innerHTML = html;
    var buttons = document.getElementsByClassName('delete_item');
	
    for (var i=0; i < buttons.length; i++) {
         buttons[i].addEventListener('click', delete_item);
        };
    }  
    document.getElementById('assign').addEventListener('click', assign);
    display();