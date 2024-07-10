import { useState } from "react"
import { Expenses } from "../types"

const BudgetView = (props: {
    budget: number,
    handleSaveClick: (expenses: Expenses) => void
}) => {
    const [value, setValue] = useState(props.budget);

    return (
        <>
            <input
                type="number"
                className="form-control"
                id="budget"
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
            />
            <button
                className="btn btn-primary"
                onClick={() => props.handleSaveClick({ id: 0, name: "", cost: value })}>
                Save
            </button>
        </>
    )
}

export default BudgetView