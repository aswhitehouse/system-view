import React, {Component} from 'react';
import {Fragment} from 'react';
import ReactFlow from 'react-flow-renderer';
import SystemNode from '../models/SystemNode';
import EdgeDetail from '../models/EdgeDetail';
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
        }).then(elements => {
            this.setState({elements})
        })
    }

    render() {
        return (
            <Fragment>
                <ReactFlow elements={
                        [
                            new SystemNode('1', 'input', new Data(this.state.elements.id1), new Position(250, 5)),
                            new SystemNode('2', 'input', new Data(this.state.elements.id2), new Position(500, 200)),
                            new EdgeDetail('e1', '1', '2', true)
                        ]
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
