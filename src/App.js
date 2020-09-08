import React from "react";
import Table from './Table'

class App extends React.Component {
    state = {
        people: [
            {
                name: 'Joe',
                job: 'Assassin'
            },
            {
                name: 'Ken',
                job: 'Samurai'
            }
        ],
    };

    removePerson = (index) => {
        const {people} = this.state;

        this.setState({
            people: people.filter((v, i) => i !== index)
        })
    };

    render() {
        const db = this.state.people;

        return (
            <div className="container">
                <Table data={db} remover={this.removePerson}/>
            </div>
        );
    }
}

export default App