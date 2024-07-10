import ExpenseItem from "./ExpenseItem"
import { useBudgetContext } from "../context/AppContext"
import { Expenses } from "../types"
import { useEffect, useState } from "react"


const ExpenseList = () => {
    const { expenses } = useBudgetContext()
    const [charges, setCharges] = useState<Expenses[]>(expenses)

    useEffect(() => {
        setCharges(expenses)
    }, [expenses])

    const hanleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchResults = expenses.filter((expense) => {
            return expense.name.toLowerCase().includes(e.target.value.toLowerCase())
        });

        setCharges(searchResults)
    }


    return (
        <>
            <div className="input-group mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search Expenses"
                    onChange={hanleInput}
                />
            </div>
            <ul className="list-group mt-2">
                {charges.map((expense, index) => (
                    <ExpenseItem
                        key={index}
                        cost={expense.cost}
                        name={expense.name}
                        id={expense.id}
                    />
                ))}
            </ul>
        </>
    )
}

export default ExpenseList