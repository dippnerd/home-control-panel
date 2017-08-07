import React, { Component } from 'react';
import './App.css';

import Weather from './Weather';
import Lights from './Lights';
import Rooms from './Rooms';
import Music from './Music';
import Video from './Video';

// const componentMap = {
//     weather: Weather,
//     lights: Lights
// };

const componentMenu = {
    weather: { label: 'Weather', component: Weather, icon: 'raindrop' },
    lights: { label: 'Lights', component: Lights, icon: 'lightbulb' },
    rooms: { label: 'Rooms', component: Rooms, icon: 'door' },
    music: { label: 'Music', component: Music, icon: 'musicnote' },
    video: { label: 'Video', component: Video, icon: 'film' }
};

// const menuItems = componentMenu.map((number) =>
//   <li>{number.label}</li>
// );

// class Button extends React.Component {
//   render() {
//     //  for (var x in componentMenu){
//     //     if (!componentMenu.hasOwnProperty(x)) {
//     //        continue;
//     //     }
//     //     alert(x);
//     //     alert(componentMenu[x].label);
//     //  }
//         //alert(this.props.name);
//     return (<div><button onClick = {() => this.setState({ component: this.props.name })}>
//             {this.props.label}
//             </button></div>);
//   }
// }

class ButtonList extends React.Component {
    // constructor(props) {
    //     super(props);
    //     //this.handleChange = this.handleChange.bind(this);
    // }

    // handleChange(e) {
    //     this.props.onTemperatureChange(e.target.value);
    // }

    render() {
        // function Button(props){
        //     return (<div><button onClick={this.props.onClick}>{props.label}</button></div>);
        // }

        var buttons = [];
        for (var button in this.props.buttons){
            // if (!this.props.buttons.hasOwnProperty(button)) {
            //     continue;
            // }
            buttons.push(<div><button onClick={this.props.onSomeEvent}>{this.props.buttons[button].label}</button></div>);
            //buttons.push(<Button label={this.props.buttons[button].label} name={button} />);
        }
        return <div>{buttons}</div>;
    }
}

// class MenuButton extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick(e) {
//         this.props.onMenuButtonClick(e.target.componentName);
//     }

//     render() {
//         return <button onClick = { this.props.handleClick } > { this.props.name } </button>;
//     }
// }

// const menuItems = componentMenu.map((item) => 
//     <button onClick = {() => this.setState({ component: item.component }) }>
//         {item.label}
//     </button> 
// );

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            component: "weather"
        };

        this.changeChild = this.changeChild.bind(this);
    }

    changeChild(componentName) {
        this.setState({ component: componentName });
    }

    render() {
        const { component } = this.state;

        const Child = componentMenu[component].component;



        return ( 
            <div>
            <Child /> 

            <ButtonList onSomeEvent={this.handleClick.bind(null, componentMenu[component])} buttons={componentMenu} />
            {/* <MenuButton onMenuButtonClick = { this.changeChild } name = "Weather" componentName = "weather" />

            <MenuButton onMenuButtonClick={this.changeChild} name = "Lights" componentName = "lights" /> */}
            </div>
        );
    }



    handleClick = (event, name) => {
      this.setState({component: name});
    }
}

export default App;