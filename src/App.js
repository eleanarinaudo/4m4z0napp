import React, { Component } from 'react';


import classes from './App.module.css';
import ProductPreview from "./ProductPreview/ProductPreview";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductData from "./Utiils/ProductData";
import Topbar from "./Topbar/Topbar";

class App extends Component {
  state={
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentSelectFeauture:false,
  }

  onColorOptionClick= (pos) => {
    this.setState({currentPreviewImagePos: pos});
  }

  onFeatureItemClick= (pos) => {
    this.setState({currentSelectFeauture:  pos});
  }

  render(){
    return (
      <div className="App">
        <Topbar/>
        <div className={classes.MainContainer}>
            <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage=
              {this.state.productData.colorOptions
              [this.state.currentPreviewImagePos].imageUrl}       
            currentSelectFeauture=
            {this.state.currentSelectFeauture} /> 
            </div>
  
            <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData} onColorOptionClick=
            {this.onColorOptionClick} currentPreviewImagePos=
            {this.state.currentPreviewImagePos} onFeatureItemClick=
            {this.onFeatureItemClick} currentSelectFeauture=
            {this.state.currentSelectFeauture}/>
            </div>  
        
        </div>
      </div>
    );
  }
}

export default App;
