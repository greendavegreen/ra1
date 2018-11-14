import React, {Component, Fragment} from 'react';
import './FilteredTestTable.css';


/*
3 Questions to determine if something is State or Props:
To be state, it has to change over time and can't be computed from anything else

Is it passed in from a parent via props? If so, it probably isn’t state.
Does it remain unchanged over time? If so, it probably isn’t state.
Can you compute it based on any other state or props in your component? If so, it isn’t state.

 */

/* next step have items display their content based on props */

/* Step1! : assert that you are going to receive whatever it is you are going to receive */

class InputBar extends Component {
    render() {
        return (
            <fieldset>

            </fieldset>
        )
    }
}

class FilteredTestTable extends Component {
    render() {
        return (
            <Fragment>
                <InputBar/>
                <div>Foo</div>
            </Fragment>
                );
    }
}

const TESTS = [
    {branch: 'fb-1', os: 'linux',   total: 26, passed: 26, failed: 0, open: true},
    {branch: 'fb-2', os: 'linux',   total: 26, passed: 26, failed: 0, open: true},
    {branch: 'fb-3', os: 'linux',   total: 26, passed: 26, failed: 0, open: true},
    {branch: 'fb-1', os: 'windows', total: 26, passed: 26, failed: 0, open: true},
    {branch: 'fb-2', os: 'windows', total: 26, passed: 26, failed: 0, open: true},
    {branch: 'fb-3', os: 'windows', total: 26, passed: 26, failed: 0, open: true}
];

export default FilteredTestTable;