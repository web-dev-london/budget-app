import Budget from "./components/Budget";
import { BudgetProvider } from "./context/AppContext";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Remaining from "./components/Remaining";
import Spent from "./components/Spent";


function App() {
    return (
        <>
            <BudgetProvider>
                <div className="container">
                    <h1 className="mt-3">Budget Planner App</h1>
                    <div className="row mt-3">
                        <div className="col-sm">
                            <Budget />
                        </div>
                        <div className="col-sm">
                            <Remaining />
                        </div>
                        <div className="col-sm">
                            <Spent />
                        </div>
                    </div>
                    <h3 className="mt-3">Expenses</h3>
                    <div className="row mt-3">
                        <div className="col-sm">
                            <ExpenseList />
                        </div>
                    </div>
                    <h3 className="mt-3">Add Expense</h3>
                    <div className="row mt-3">
                        <div className="col-sm">
                            <ExpenseForm />
                        </div>
                    </div>
                </div>
            </BudgetProvider>
        </>
    );
}

export default App;
