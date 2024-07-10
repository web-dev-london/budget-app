
const BudgetTotal = (props: {
    budget: number;
    handleEditClick: () => void
}) => {
    return (
        <>
            <span>Budget: ${props.budget}</span>
            <button
                type="button"
                className="btn btn-primary"
                onClick={props.handleEditClick}
            >
                Edit
            </button>
        </>
    )
}

export default BudgetTotal