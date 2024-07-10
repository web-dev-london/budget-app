import { useBudgetContext } from "../context/AppContext"

const Remaining = () => {
    const { budget, expenses } = useBudgetContext()

    const totalExpenses = expenses.reduce((result, current) => {
        return result + current.cost
    }, 0)

    const remaining = budget - totalExpenses

    const alertBudget = remaining === 0 ? `alert alert-danger` :
        remaining < 200 ? `alert alert-success` : `alert alert-primary`


    return (
        <>
            <div className={alertBudget}>
                <span>Remaining: ${remaining}</span>
            </div>
        </>
    )
}

export default Remaining