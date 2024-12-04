// const heading = React.createElement("h1",{id: "heading",xyz: "abc"},"Hi this is my 1st code in React");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


//Nested code throught React

/**
 * 
 * <div id= box1>
 *     <div id=Box2>
 * *       <h1></h1>
 *     </div>
 * </div>
 * 
 */

const ram  =  React.createElement("div",{id : "Parent"},
              [
                React.createElement("div",{id:"child"},
                    [React.createElement("h1",{},"This is H1 Tag"),
                    React.createElement("h2",{},"This is H2 Tag"),
                    React.createElement("h3",{},"This is H3 Tag"),]),
                    
                    React.createElement("div",{id:"child2"},
                        [React.createElement("h1",{},"This is H1 Tag"),
                        React.createElement("h2",{},"This is H2 Tag"),
                        React.createElement("h3",{},"This is H3 Tag"),])
              ]
              );

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(ram);




//Through React

    const tree1  =  React.createElement("div",{},
       React.createElement("h1",{id:"tag"},"This tag has its own id"));
       
       const tree = ReactDOM.createRoot(document.getElementById("tree"));
       tree.render(tree1);



//Through JavaScript


       const riyag = document.createElement("h1");
       riyag.innerHTML = "Hi this is riya , Ntmy!! All";

       const pyaz = document.getElementById("riya");
       pyaz.appendChild(riyag);