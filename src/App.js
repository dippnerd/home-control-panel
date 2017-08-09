import React, { Component } from 'react';
import './App.css';
import ButtonList from './ButtonList';

import Weather from './Weather';
import Lights from './Lights';
import Rooms from './Rooms';
import Music from './Music';
import Video from './Video';

const componentMenu = [
    { id: "weather", label: 'Weather', component: Weather, icon: 'raindrop' },
    { id: "lights", label: 'Lights', component: Lights, icon: 'lightbulb' },
    { id: "rooms", label: 'Rooms', component: Rooms, icon: 'door' },
    { id: "music", label: 'Music', component: Music, icon: 'musicnote' },
    { id: "video", label: 'Video', component: Video, icon: 'film' }
];

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeComponent: "weather"
        };
    }

    changeView = (name) => {
      this.setState({activeComponent: name});
    }

    render() {
        const activeComponent = this.state.activeComponent;
        const Child = componentMenu.find(r => r.id === activeComponent).component;
        return ( 
            <div>
                <Child /> 
                <ButtonList handleClick={this.changeView} buttons={componentMenu} />
            </div>
        );
    }
}

export default App;