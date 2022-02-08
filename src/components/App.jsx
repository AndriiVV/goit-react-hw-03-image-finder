import { Component } from "react";

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
// import Modal from "./Modal/Modal";
import { Loader } from "./Loader/Loader";


class App extends Component {

  state = {
    gallery: [],
    
  };

  onSubmit = (q, page) => {
    Loader(q, page)
      .then((res) => this.setState({gallery: res}))
      .catch((err) => console.log(err.message))
  }

  render() { 

    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit}/>
        <ImageGallery gallery={this.state.gallery}/>
        <Button />
        {/* <Modal /> */}
      </div>
    );
  }

};

export default App;
