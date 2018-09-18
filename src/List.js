import React, { Component } from 'react';

const LiData = props => {
    const rows = props.values.map((value, index) => {
        return (
            <li class="list-group-item">{value}</li>
        );
    });

    return <ul style={{ display: 'block' }} class="list-group">{rows}</ul>;
}
class List extends Component {
    constructor() {
        super();

        this.initialState = {
            values: ['Text1', 'Text2', 'Text3'],
            name: ''
        };
        this.state = this.initialState;
    }

    handleChange = event => {
        var { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    submitForm = () => {
        const currentName = this.state.name;
        if (currentName !== '' && !this.state.values.some((value) => { return value === currentName })) {
            this.setState({
                'values': [...this.state.values, currentName]
            });
        } else {
            this.setState({
                'name': ''
            });
        }
    }

    render() {
        const { name } = this.state;
        return (
            <div>
                <h2 style={{align: 'center'}}>List Insertion</h2>
                <div style={{ margin: '5%' }}>
                    <div>
                        <label>Text</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            className="form-control"
                            onChange={this.handleChange} />
                        <input
                            type="button"
                            value="Insert"
                            className="btn btn-success"
                            style={{ marginTop: '2%' }}
                            onClick={this.submitForm} />
                    </div>
                    <div id='table_list'>
                        <LiData values={this.state.values}></LiData>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;