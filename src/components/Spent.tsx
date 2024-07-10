import { useBudgetContext } from "../context/AppContext"

const Spent = () => {
    const { expenses } = useBudgetContext()

    const totalExpenses = expenses.reduce((result, current) => {
        return result + current.cost
    }, 0)

    const alertBudget = totalExpenses < 4000 ? `alert alert-success` : `alert alert-danger`

    return (
        <>
            <div className={alertBudget}>
                <span>Spent: ${totalExpenses}</span>
            </div>
        </>
    )
}

export default Spent