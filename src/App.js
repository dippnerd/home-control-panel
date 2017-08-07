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

class ButtonList extends React.Component {
    handleClick = (e) => {
        //this.handleClick(e.iButton);
        console.log("worked");
    }

    render() {

        var buttons = [];
        //var i = 0;
        for (var button in this.props.buttons){
            //let iButton = this.props.buttons[button];
            //console.log(iButton);
            buttons.push(<div><button name={buttons[button]} onClick={this.props.handleClick}>{this.props.buttons[button].label}</button></div>);
            // console.log(button);
            // buttons[i] = { label: button.label, component: button.component, icon: button.icon, name: button};
            // i++;
        }
        // buttons.map((item) => {
        //     <button onClick={this.handleClick} value={item.name}>{item.label}</button>
        // })
        return <div>{buttons}</div>;
    }
}

// what you’ll do is basically, in the top component (the one that renders the children)
// you’ll have a function called `changeView` or something, that accepts a string
// you’ll pass this fn down wherever the buttons are
// and when you click the btn, you’ll call `changeView`, passing a string
// the `changeView` function will change the parent component’s “internal state”
// (using this.setState()`
// state is like a way for a component to make ITSELF re-render
// anyway, you have something in state called like, `activeComponent`, that is a string
// and it’s the name of one of the components in your array
// then, the final piece is
// in render, you do
// `const activeComponent = this.state.activeComponent`
// and then you use that string to find the actual Component in your map
// and render that out.

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

        const Child = componentMenu[activeComponent].component;

        return ( 
            <div>
                <Child /> 
                <ButtonList handleClick={this.changeView(activeComponent)} buttons={componentMenu} />
            </div>
        );
    }
}

export default App;