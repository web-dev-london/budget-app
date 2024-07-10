import { useReducer, createContext, useContext, useState } from "react";
import { State, Action, Expenses } from "../types";
// import { v4 as uuidv4 } from 'uuid'

export interface Provider {
    children: React.ReactNode;
}


export interface Context {
    budget: number;
    expenses: Expenses[];
    dispatch: React.Dispatch<Action>;
    name: string;
    cost: string;
    handleName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleCost: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddExpense: () => void;
    handleDeleteExpense: (id: number) => void;
    handleSetExpense: (expenses: Expenses) => void;
    handleReset: () => void;
}

export const BudgetContext = createContext<Context | null>(null);

export const useBudgetContext = () => {
    const value = useContext(BudgetContext);
    if (!value) {
        throw new Error("useAppContext must be used within a AppProvider");
    }
    return value;
}


const initialState: State = {
    budget: 7000,
    expenses: [
        { id: 1, name: "Shopping", cost: 400 },
        { id: 2, name: "Holiday", cost: 500 },
        { id: 3, name: "Rent", cost: 800 },
        { id: 4, name: "Transportation", cost: 100 },
    ],
};


const reducer = (state: State, action: Action) => {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, payload],
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== payload.id),
            };
        case 'SET_BUDGET':
            return {
                ...state,
                budget: payload.cost,
            };
        default:
            return state
    }
};


export const BudgetProvider = ({ children }: Provider) => {

    const [state, dispatch] = useReducer<React.Reducer<State, Action>>(reducer, initialState);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const handleAddExpense = () => {
        const expenseId = crypto.randomUUID();
        const expenses = {
            id: parseInt(expenseId),
            name: name,
            cost: parseInt(cost),
        }
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expenses
        })
    }

    const handleDeleteExpense = (id: number,) => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: { id, name, cost: parseInt(cost) },
        })
    }

    const handleSetExpense = (expenses: Expenses) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: expenses
        })
    }


    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleCost = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCost(e.target.value);
    }

    const handleReset = () => {
        setCost('');
        setName('');
    }


    return (
        <BudgetContext.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch,
            name,
            cost,
            handleName,
            handleCost,
            handleAddExpense: handleAddExpense,
            handleReset,
            handleDeleteExpense,
            handleSetExpense
        }}>
            {children}
        </BudgetContext.Provider>
    )
}