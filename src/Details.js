import React from "react";
import pet from "@frontendmasters/pet";

class Details extends React.Component {
  state = { loading: true };

  componentDidMount() {
    pet
      .animal(this.props.id)
      .then(({ animal }) => {
        this.setState({
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.adress.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    if (this.state.loading) <h1>loading...</h1>;
    const { animal, breed, location, description, name } = this.name;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>
            `${animal} - ${breed} - ${location}`
          </h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
