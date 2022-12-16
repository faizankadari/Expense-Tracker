import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from './UI/Card';
const ExpenseItem = (props) => {
    // function clickHandler() {}
   
    // const expenseDate = new Date(2021,2,28)
    // const expenseTitle = 'Car Insurance'
    // const expenseAmount= 294.67

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">$ {props.amount}</div>
            </div>
        </Card>);
    //  return ( 
    //     <div className="expense-item">
    //         <div>March 28th 2021</div>
    //         <div className="expense-item__description">
    //         <h2>Car Insurance</h2>
    //         <div className="expense-item__price">$294.67</div>
    //         </div>
    //     </div>);
}
export default ExpenseItem