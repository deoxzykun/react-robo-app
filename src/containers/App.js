import React from 'react';
import CardList from '../components/CardList';
import InputSearch from '../components/InputSearch';
import { robots } from '../components/robots';
import './App.css'
import Scroll from '../components/Scroll';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filterRobot = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <InputSearch searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filterRobot} />
                </Scroll>
            </div>
        );
    }    
}

export default App;
