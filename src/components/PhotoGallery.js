import React from "react";
import "./PhotoGallery.css";
class PhotoGallery extends React.Component{
    constructor(){
        super();
        this.state = {
            photo_loaded:false,
            photo_link:"",
            class:"image-tab"
        }
        fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                photo_link:data.message,
                class:"image-tab"
            });
        });;
    }
    
    componentDidUpdate(){
        
        setTimeout(
            () => {
                fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(data => {
                    console.log(data);
                    this.setState({
                        photo_link:data.message,
                        class : "image-tab"
                    });
                });
            }
        ,5000);
        
    }

    render(){
        return <div>
            <img className = {this.state.class} src={this.state.photo_link}/>
        </div>
    }

}
export default PhotoGallery;