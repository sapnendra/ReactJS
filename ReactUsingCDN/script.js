let parent = document.querySelector("#root");
let h1 = React.createElement("h1", null, "Hello From React");
let root = ReactDOM.createRoot(parent);
root.render(h1);
