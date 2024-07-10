import { useBudgetContext } from "../context/AppContext"




const ExpenseForm = () => {
    const { name, cost, handleName, handleCost, handleAddExpense, handleReset } = useBudgetContext()

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleAddExpense();
                handleReset();
            }}
                className="mb-3">
                <div className="row">
                    <div className="col-sm">
                        <label htmlFor="name">Name</label>
                        <input
                            value={name}
                            onChange={handleName}
                            type="text"
                            className="form-control"
                            id="name"
                            required={true} />
                    </div>
                    <div className="col-sm">
                        <label htmlFor="name">Cost</label>
                        <input
                            value={cost}
                            onChange={handleCost}
                            type="number"
                            className="form-control"
                            id="cost"
                            required={true} />
                    </div>
                    <div className="col-sm mt-4">
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ExpenseForm