import React, {Component } from "react";
import{
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import {Card,CardItem,Thumbnail,Body,Left,Right,Button,Icon} from 'native-base'


class CardComponent extends Component{
    render(){

        const images = {
            "1":require('../assets/feed_images/1.jpg'),
            "2":require('../assets/feed_images/2.jpg'),
            "3":require('../assets/feed_images/3.jpg'),
            
        }

        return(
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require(
                            ('../assets/my-icon.jpg')
                        )}/>
                        <Body>
                            <Text>Faaiz</Text>
                            <Text note>Jan 1st 2018</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images
                    [this.props.imageSource]} style={
                        {height: 200, width:null,flex:1}}
                        />
                </CardItem>
                <CardItem style={{height:45}}>
                <Left>
                        <Button transparent>
                        <Icon name = "ios-heart-outline"
                        style = {{color:'black'}} />
                        </Button>
                    </Left>
                    <Left>
                        <Button transparent>
                        <Icon name = "ios-chatbubbles-outline"
                        style = {{color:'black'}} />
                        </Button>
                    </Left>
                    <Left>
                        <Button transparent>
                        <Icon name = "ios-send-outline"
                        style = {{color:'black'}} />
                        </Button>
                    </Left>
                </CardItem>
                <CardItem style={{height:20}}>
                    <Text>{this.props.likes}</Text> 
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style = {{ fontWeight: 
                            "900"}}>
                            Faaiz 
                            </Text>
                            Cupidatat occaecat excepteur deserunt amet duis. Minim eiusmod ut cupidatat laborum. Et velit aute eu aliquip qui nisi pariatur magna id cillum ad. Culpa adipisicing elit quis exercitation duis aliquip eiusmod officia laborum ex eu ut. Dolor pariatur veniam cupidatat irure minim quis ad sint cupidatat commodo Lorem ad. Ipsum occaecat aliquip sunt aliquip. Velit aliquip esse ullamco commodo ullamco nulla eiusmod incididunt anim in sint.
                        </Text>
                    </Body>
                </CardItem>
            </Card>

        );
        }
    }
export default CardComponent;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})