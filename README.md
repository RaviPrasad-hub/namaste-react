# Namaste React

<div id= "parent">
-     <div id = "child">
-         <h1 id = "heading"> Hellow World</h1>
-         <h2 id = "heading"> Hellow World</h2>
-     </div>
-      <div id = "child">
-         <h1 id = "heading"> Hellow World</h1>
-         <h2 id = "heading"> Hellow World</h2>
-     </div>-
</div>
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "heading" },
      "Hello World frosadsadm React!"
    ),
    React.createElement(
      "h2",
      { id: "heading2" },
      "Hello again Worldasd from React!"
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "Hello World from React!"),
    React.createElement(
      "h2",
      { id: "heading2" },
      "Hello agdsfsain World from React!"
    ),
  ]),
]);
const jsxHeading = (
  <h1 className="head" tabIndex="5">
    React using JSX
  </h1>
);
eact functional component
const Title = () => (
  <h1 className="head" tabIndex="5">
    Title component
  </h1>
);
omponent composition
const number = 1000;
const HeadingComponent = () => (
  <div id="container">
    <Title />
    {Title()}
    <h1>This is react functional component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
endering a functional component
root.render(<HeadingComponent />);
root.render(heading);
