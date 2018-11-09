
        import Navigation from "../components/Navigation";
        import Header from "../components/Header";
        import Content from "../components/Content";
        import Footer from "../components/Footer";

       
        var state = {
          Home : {
              title: "Welcome to Thomas Green Coders Portfolio"
          },
          Blog : {
              title: "Welcome to my blog!"
              },
          Projects : {
              title: "Welcome to my projects page!"
          },
          Contact : {
              title: "Welcome to my Contact Page!"
              }
      }

      function handleNavigation(event) {
        // pull the component name from the text in the anchor tag
        var component = event.target.textContent;
        event.preventDefault();
        // select a piece of the state tree by component
        render(state[component]);
      }

      var root = document.querySelector("#root"); // this doesn't need to be queried every time we re-render
function render(state) {
    root.innerHTML = `
        ${Navigation(state)}
        ${Header(state)}
        ${Content(state)}
        ${Footer(state)}
      `;
    var links = document.querySelectorAll(".navigation a");
    links[0].addEventListener("click",handleNavigation);
     links[1].addEventListener("click", handleNavigation);
     links[2].addEventListener("click", handleNavigation);
     links[3].addEventListener("click",handleNavigation);
  }
  
render(state.Home)


              
        
        
  