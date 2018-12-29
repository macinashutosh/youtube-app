/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./PhotoGallery.css";
import posed from "react-pose";
import styled from "styled-components";
import PropTypes from 'prop-types';


const Container = styled.div`
 
`;

const Square = posed.img({
    enter: { y: 0, opacity: 1 },
  exit: { y: -50, opacity: 0.5 }
});

const StyledSquare = styled(Square)`

`;
class PhotoGallery extends React.Component{
    constructor(props){
        super();
        this.state = {
            photo_loaded:false,
            photo_link:"",
            hovering: false,
            positionX : props.positionX,
            positionY : props.positionY,
            height: props.height,
            width: props.width,
            position:props.position
        }
        fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                photo_link:data.message
            });
        });;
    }
    render(){
        return <Container style = { {marginLeft:this.state.positionX,marginTop:this.state.positionY,position:this.state.position} } >
        <StyledSquare
          style = {{height:this.state.height, width:this.state.width}}
          pose={this.state.hovering ? "exit" : "enter"}
          onMouseEnter={() => this.setState({ hovering: true })}
          onMouseLeave={() => this.setState({ hovering: false })}
          src={this.state.photo_link}
        />
      </Container>
    }

}
export default PhotoGallery;
PhotoGallery.propTypes ={
    positionX : PropTypes.number,
    positionY : PropTypes.number,
    height: PropTypes.number,
    width: PropTypes.number,
    position: PropTypes.string
};