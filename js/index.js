<script type="text/javascript">

    var name = prompt('What is your name?');
  
    var checkName = function() {
      if (name === "" ) {
        name = prompt('What is your name please?')}
  
        checkName(); // repeats until a name exists
      }
      
    }
  
    checkName(); // kicks off the name-checking the first time
  
    alert('Hello ' + name);

  </script>