/**
 * <div id= "parent">
 *      <div id = "child">
 *          <h1 id = "heading"> Hellow World</h1>
 *          <h2 id = "heading"> Hellow World</h2>
 *      </div>
 *       <div id = "child">
 *          <h1 id = "heading"> Hellow World</h1>
 *          <h2 id = "heading"> Hellow World</h2>
 *      </div>
 * </div>
 */

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hello World from React!"),
    React.createElement(
      "h2",
      { id: "heading2" },
      "Hello again World from React!"
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "Hello World from React!"),
    React.createElement(
      "h2",
      { id: "heading2" },
      "Hello again World from React!"
    ),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
