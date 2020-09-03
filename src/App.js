const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Gustavo",
      animal: "Dog",
      breed: "Golden Retriever",
    }),
    React.createElement(Pet, {
      name: "Hans",
      animal: "Cat",
      breed: "Stray",
    }),
    React.createElement(Pet, {
      name: "Ferdinand",
      animal: "Dog",
      breed: "Labradoodle",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
