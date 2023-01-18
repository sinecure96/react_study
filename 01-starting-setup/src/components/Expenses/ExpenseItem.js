import React, {useState} from "react";
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../UI/Card';

function ExpenseItem(props) {
	const [title, setTitle] = useState(props.title);
	// document.getElementById('root').addEventListener()
	// const expenseDate = new Date(2022, 2, 28);
	// const expenseTitle = 'Car Insurance';
	// const expenseAmount = 294.67;

	const clickHandler = () => {
		setTitle('Updated');
		console.log(title);
	};

	return (
		<Card className='expense-item' >
			<ExpenseDate date={props.date}/>
			<div className='expens-item__description'>
				<h2>{title}</h2>
				<div className='expense-item__price'>${props.amount}</div>
			</div>
			<button onClick={clickHandler}>Change Title</button>
		</Card>
	);
}

export default ExpenseItem;