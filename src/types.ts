export interface Expenses {
    name: string
    cost: number
    id: number
}

export interface State {
    budget: number;
    expenses: Expenses[];
}

export interface Action {
    type: string;
    payload: Expenses;
}
