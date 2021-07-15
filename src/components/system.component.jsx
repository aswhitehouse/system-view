import React, {Component} from 'react';
import {Fragment} from 'react';
import ReactFlow from 'react-flow-renderer';
import SystemNode from '../models/SystemNode';
import Data from '../models/Data';
import Position from '../models/Position';
import {properties} from '../resources/properties';
import EdgeDetail from '../models/EdgeDetail';


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
            let systemCharEdges = [];
            systemChartElements.push(new SystemNode(1, 'input', new Data(responseElements.elements[1]), new Position(x, y)));
            for (let i = 2; i < responseElements.elements.length; i++) {
                systemChartElements.push(new SystemNode(i, 'input', new Data(responseElements.elements[i]), new Position(x += 60, x += 4)));
            }
            for(let i = 0; i < systemChartElements.length-1; i++) {
                systemCharEdges.push(new EdgeDetail('e'+i, systemChartElements[i].id, systemChartElements[i+1], true));
            }
            let values = systemChartElements.concat(systemCharEdges);
            console.log(values)
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
