import React, {Component} from 'react';
import {Fragment} from 'react';
import ReactFlow from 'react-flow-renderer';
import SystemNode from '../models/SystemNode';
// import EdgeDetail from '../models/EdgeDetail';
import Data from '../models/Data';
import Position from '../models/Position';
import {properties} from '../resources/properties';


class SystemMap extends Component {
    constructor() {
        super();
        this.state = {
            elements: []
        };
    }
    componentDidMount() {
        fetch(properties.logApi).then(res => {
            return res.json()
        }).then(responseElements => {
            let x = 250;
            let y = 5;
            let systemChartElements = [];
            systemChartElements.push(new SystemNode('1', 'input', new Data(responseElements.elements[1]), new Position(x, y)));
            for (let i = 2; i < responseElements.elements.length; i++) {
                systemChartElements.push(new SystemNode('1', 'input', new Data(responseElements.elements[i]), new Position(x + 250, x + 5)));
            }
            this.setState({systemChartElements})
        })
    }

    render() {
        return (
            <Fragment>
                <ReactFlow elements={
                        this.state.systemChartElements
                    }
                    style={
                        {
                            width: '100%',
                            height: '90vh'
                        }
                    }/>
            </Fragment>
        );
    }
}

export default SystemMap;
