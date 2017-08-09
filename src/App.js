import React, { Component } from 'react';
import './App.css';

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

class ButtonList extends React.Component {
    handleClick = (e) => {
        //this.handleClick(e.iButton);
        //console.log("worked");
        alert("worked");
    }

    render() {

        var buttons = this.props.buttons;
        //var i = 0;
        // for (var button in this.props.buttons){
        //     //let iButton = this.props.buttons[button];
        //     //console.log(iButton);
        //     buttons.push(<div><button name={buttons[button]} onClick={this.props.handleClick}>{this.props.buttons[button].label}</button></div>);
        //     // console.log(button);
        //     // buttons[i] = { label: button.label, component: button.component, icon: button.icon, name: button};
        //     // i++;
        // }
        // buttons.map((item) => {
        //     <button onClick={this.handleClick} value={item.name}>{item.label}</button>
        // })
        return (
            <div>
            {
                buttons.map((item) => {
                    // bind the components onItemClick method
                    // and use the bind syntax that prepends 
                    // arguments to attach the item argument
                    //let boundItemClick = this.handleClick.bind(this, item);
                    //alert(item.id);
                    // Construct the onClick with our bound function
                    return <button id={item.id} onClick={() => this.props.handleClick(item)}>{item.label}</button>
                })
            }
            </div>
        );
    }
}


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeComponent: "weather"
        };
    }

    changeView = (name) => {
      this.setState({activeComponent: name});
      alert(name);
    }

    render() {
        const activeComponent = this.state.activeComponent;

        const Child = componentMenu.find(r => r.id === activeComponent).component;
        const childName = componentMenu.find(r => r.id === activeComponent).id;
        alert(componentMenu.find(r => r.id === activeComponent).id);
        return ( 
            <div>
                <Child /> 
                <ButtonList handleClick={() => this.changeView(childName)} buttons={componentMenu} />
            </div>
        );
    }
}

export default App;