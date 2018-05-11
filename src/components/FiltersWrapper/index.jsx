import React, { Component } from 'react';
import { Checkbox, Slider, TextInput } from '../';

export class FiltersWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    removeItem = (e) => {
        var arr = [...this.state];
        var index = arr.indexOf(e.target.value)
        arr.splice(index, 1);
        this.setState({ arr });
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: this.calculateValue(target, name, value)
        });
    }

    calculateValue = (...args) => {
        let result = null;
        let [target, name, value] = [...args];

        const lastListed = ['24 hours', '3 days', '7 days', '30 days', 'forever'];
        const radius = ['1 km', '2 km', '3 km', '4 km', '5 km', '7 km', '10 km', '15 km', '20 km', '30 km', '60 km', '100 km', '200 km', '300 km', '400 km', '500 km', '1000 km', 'everywhere'];

        switch(target.type) {
            case "range":
                result = name === "last_listed" ? lastListed[value] : radius[value]
            break;
            case "checkbox":
                result = target.checked
            break;
            default:
                result = target.value
        }

        return result;
    }

    componentWillUnmount() {
        this.props.unmount(this.state);
    }

    render() {
        const style = {
            minHeight: '400px',
            marginTop: '-20px',
            backgroundColor: '#fff'
        };
        return (
            <div style={style}>
                {/* Header title */}
                <div className="row">
                    <div className="col l12">
                        <h5>Filters</h5>
                    </div>
                </div>
                {/* Checkbox columns */}
                <div className="row">
                    <div className="col l4">
                        <Checkbox label="Everything" name="everything" change={this.handleInputChange} />
                        <Checkbox label="Home and Garden" name="home_and_garden" change={this.handleInputChange} />
                        <Checkbox label="Sport, Leisure and Games" name="sport_games" change={this.handleInputChange} />
                        <Checkbox label="Property" name="property" change={this.handleInputChange} />
                    </div>
                    <div className="col l4">
                        <Checkbox label="New in Your Area" name="new_in_area" change={this.handleInputChange} />
                        <Checkbox label="Electronics" name="electronics" change={this.handleInputChange} />
                        <Checkbox label="Movies, Books and Music" name="moies_book_music" change={this.handleInputChange} />
                        <Checkbox label="Services" name="services" change={this.handleInputChange} />
                    </div>
                    <div className="col l4">
                        <Checkbox label="Fashion and Accessories" name="fashion" change={this.handleInputChange} />
                        <Checkbox label="Baby and Child" name="baby_child" change={this.handleInputChange} />
                        <Checkbox label="Cars and Motors" name="cars_motors" change={this.handleInputChange} />
                        <Checkbox label="Other" name="other" change={this.handleInputChange} />
                    </div>
                </div>
                {/* Slider columns */}
                <div className="row">
                    <div className="col l6">
                        <Slider min="0" max="4" step="1" name="last_listed" change={this.handleInputChange} />
                    </div>
                    <div className="col l6">
                        <Slider min="0" max="17" step="1" name="radius" change={this.handleInputChange} />
                    </div>
                    <div className="col l6">
                        <div className="col l6">
                            <TextInput name="min_price" labelText="Min price" change={this.handleInputChange} />
                        </div>
                        <div className="col l6">
                            <TextInput name="max_price" labelText="Max price" change={this.handleInputChange} />
                        </div>
                    </div>
                </div>
            </div>
        );

    }
};