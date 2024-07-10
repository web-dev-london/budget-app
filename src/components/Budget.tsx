import { useState } from "react";
import { useBudgetContext } from "../context/AppContext"
import { Expenses } from "../types";
import BudgetView from "./BudgetView";
import BudgetTotal from "./BudgetTotal";

const Budget = () => {
    const { budget, handleSetExpense } = useBudgetContext();
    const [isEdit, setIsEdit] = useState(false);

    const handleEditClick = () => {
        setIsEdit(true)
    }

    const handleSaveClick = (expenses: Expenses) => {
        handleSetExpense(expenses)
        setIsEdit(false)
    }



    return (
        <>
            <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
                {
                    isEdit ? (
                        <BudgetView
                            budget={budget}
                            handleSaveClick={handleSaveClick}
                        />
                    ) : (
                        <BudgetTotal
                            budget={budget}
                            handleEditClick={handleEditClick}
                        />
                    )
                }
            </div>
        </>
    )
}

export default Budget