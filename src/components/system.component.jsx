import React from 'react';
import {Fragment} from 'react';
import ReactFlow from 'react-flow-renderer';
import SystemNode from '../models/SystemNode';
import EdgeDetail from '../models/EdgeDetail';
import Data from '../models/Data';
import Position from '../models/Position';

const elements = [
    new SystemNode('1', 'input', new Data('Node One'), new Position(250, 5)),
    new SystemNode('2', 'input', new Data('Node Two'), new Position(500, 200)),
    new EdgeDetail('e1', '1', '2', true)
];

const SystemMap = () => {
    return (
        <Fragment>
            <ReactFlow elements={elements}
                style={
                    {
                        width: '100%',
                        height: '90vh'
                    }
                }/>
        </Fragment>
    )
}

export default SystemMap;
