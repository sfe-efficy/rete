import { Component } from '../../src/component';
import { Input } from '../../src/input';
import { Node } from '../../src/node';
import { Output } from '../../src/output';
import { Socket } from '../../src/socket';

const socketNum = new Socket('Number');

export class Comp1 extends Component {

    constructor() {
        super('Number');
    }

    async builder(node: Node) {
        node.addOutput(new Output('num', 'Name', socketNum))
    }

    worker() { }
}

export class Comp2 extends Component {

    constructor() {
        super('Add');
    }

    async builder(node: Node) {
        node.addInput(new Input('num1', 'Name', socketNum));
        node.addInput(new Input('num2', 'Name', socketNum));
        node.addOutput(new Output('num', 'Name', socketNum))
    }

    worker() { }
}