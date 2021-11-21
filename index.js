import { createMachine, interpret } from 'xstate';
// Edit your machine(s) here
const machine = createMachine({
    id: 'machine',
    initial: 'inactive',
    context: {
        count: 0,
    },
    states: {
        inactive: {
            on: { TOGGLE: 'active' },
        },
        active: {
            on: { TOGGLE: 'inactive' },
        },
    },
});
// Edit your service(s) here
const service = interpret(machine).onTransition(state => {
    console.log(state.value);
});
service.start();
service.send('TOGGLE');
service.send('TOGGLE');
