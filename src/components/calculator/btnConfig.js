export const BTN_ACTIONS = {
    ADD: 'add',
    THEME: 'theme',
    CALC: 'calc',
    DELETE: 'delete',
}

export const btns = [
    {
        display: 'C',
        action: BTN_ACTIONS.DELETE,
        class: 'btn__op'
    },
    {
        display: '(',
        action: BTN_ACTIONS.ADD,
        class: 'btn__op'
    },
    {
        display: ')',
        action: BTN_ACTIONS.ADD,
        class: 'btn__op'
    },
    {
        display: '/',
        action: BTN_ACTIONS.ADD,
        class: 'btn__op'
    },
    {
        display: '7',
        action: BTN_ACTIONS.ADD,
        class: ''
    },
    {
        display: '8',
        action: BTN_ACTIONS.ADD,
        class: ''
    },
    {
        display: '9',
        action: BTN_ACTIONS.ADD,
        class: ''
    },
    {
        display: '*',
        action: BTN_ACTIONS.ADD,
        class: 'btn__op'
    },
    {
        display: '4',
        action: BTN_ACTIONS.ADD,
        class: ''
    },
    {
        display: '5',
        action: BTN_ACTIONS.ADD,
        class: ''
    },
    {
        display: '6',
        action: BTN_ACTIONS.ADD,
        class: ''
    },
    {
        display: '-',
        action: BTN_ACTIONS.ADD,
        class: 'btn__op'
    },
    {
        display: '1',
        action: BTN_ACTIONS.ADD,
        class: ''
    },
    {
        display: '2',
        action: BTN_ACTIONS.ADD,
        class: ''
    },
    {
        display: '3',
        action: BTN_ACTIONS.ADD,
        class: ''
    },
    {
        display: '+',
        action: BTN_ACTIONS.ADD,
        class: 'btn__op'
    },
    {
        display: 'L',
        action: BTN_ACTIONS.THEME,
        class: ''
    },
    {
        display: '0',
        action: BTN_ACTIONS.ADD,
        class: ''
    },
    {
        display: '.',
        action: BTN_ACTIONS.ADD,
        class: ''
    },
    {
        display: '=',
        action: BTN_ACTIONS.CALC,
        class: 'btn__op'
    },
];