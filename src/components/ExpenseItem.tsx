import { TiDelete } from 'react-icons/ti'
import { useBudgetContext } from '../context/AppContext';
interface ExpenseItemProps {
    name: string;
    cost: number;
    id: number;
}
const ExpenseItem = ({ name, cost, id }: ExpenseItemProps) => {
    const { handleDeleteExpense } = useBudgetContext()
    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                {name}
                <div>
                    <span className="badge bg-primary me-4 p-2">${cost}</span>
                    <TiDelete
                        onClick={() => handleDeleteExpense(id)}
                        size='1.5em'
                        style={{ cursor: 'pointer' }}
                    />
                </div>
            </li>
        </>
    )
}

export default ExpenseItem