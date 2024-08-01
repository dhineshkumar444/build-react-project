const heading = React.createElement("div", {id:"parent"}, React.createElement("div", {},React.createElement("h1", {}, "Hii" )));
    const root = ReactDOM.createRoot(document.getElementById("root"));
    console.log(root);
    root.render(heading);