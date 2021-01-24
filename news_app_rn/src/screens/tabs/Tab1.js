import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class ListThumbnailExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' }} />
                            </Left>
                            <Body>
                                <Text>This is our Title</Text>
                                <Text note numberOfLines={2}>Its time to build a difference, Its time to build a difference</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}