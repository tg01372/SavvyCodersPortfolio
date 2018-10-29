<script type="text/javascript">
// {

// var name = prompt("Hi there! What's your name?");
// var output = document.querySelector("#greeting");
// output.textContent = "Thanks for visiting, " + name + ".";
//   var name = prompt('What is your name?');
// }

{
    var checkName = function() {
      if (name === "" ) {
        name = prompt('What is your name please?')}
  
        checkName(); // repeats until a name exists
      
      
    }

  

    checkName(); // kicks off the name-checking the first time
  
    alert('Hello ' + name);

  </script>