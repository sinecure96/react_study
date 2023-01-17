import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from './Card';

function ExpenseItem(props) {
	// const expenseDate = new Date(2022, 2, 28);
	// const expenseTitle = 'Car Insurance';
	// const expenseAmount = 294.67;

	return (
		<Card className='expense-item' >
			<ExpenseDate date={props.date}/>
			<div className='expens-item__description'>
				<h2>{props.title}</h2>
				<div className='expense-item__price'>${props.amount}</div>
			</div>
		</Card>
	);
}

export default ExpenseItem;