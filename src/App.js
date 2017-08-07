import React, { Component } from 'react';
import './App.css';

import Weather from './Weather';
import Lights from './Lights';
import Rooms from './Rooms';
import Music from './Music';
import Video from './Video';

const componentMenu = {
    weather: { label: 'Weather', component: Weather, icon: 'raindrop' },
    lights: { label: 'Lights', component: Lights, icon: 'lightbulb' },
    rooms: { label: 'Rooms', component: Rooms, icon: 'door' },
    music: { label: 'Music', component: Music, icon: 'musicnote' },
    video: { label: 'Video', component: Video, icon: 'film' }
};

class MenuButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onMenuButtonClick(e.target.componentName);
    }

    render() {
        return <button onClick={this.props.handleClick}>{this.props.name}</button>;
    }
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            component: "weather"
        };

        this.changeChild = this.changeChild.bind(this);
    }

    changeChild(componentName) {
        this.setState({component: componentName});
    }

    render() {
        const { component } = this.state;
    
        const Child = componentMenu[component].component;



        return ( 
            <div>
                <Child />
                <MenuButton onMenuButtonClick={this.changeChild} name="Weather" componentName="weather" />
                <MenuButton onMenuButtonClick={this.changeChild} name="Lights" componentName="lights" />
            </div>
        );
    }

}

export default App;