import React from "react";
import Table from './Table'
import Form from './Form'

class App extends React.Component {
    state = {
        people: [],
    };

    removePerson = (index) => {
        const {people} = this.state;

        this.setState({
            people: people.filter((v, i) => i !== index)
        })
    };

    handleSubmit = (person) => {
        this.setState({
            people: [...this.state.people, person]
        });
    };

    render() {
        const db = this.state.people;

        return (
            <div className="container">
                <Table data={db} remover={this.removePerson}/>
                <Form submitHandler={this.handleSubmit}/>
            </div>
        );
    }
}

export default App