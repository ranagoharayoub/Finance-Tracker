import React, { useEffect, useState } from 'react'
import './Tracker.css'
import {UseStateValue} from './Context'
import {Action} from './Reducer'

function Tracker() {

    const [amount, setamount] = useState('')
    const [discription, setdiscription] = useState('')
    const [{expense,income}, dispatch] = UseStateValue()

    const ExpenseArray = expense.map(exp => Math.abs(exp.Price)) 
    const IncomeArray = income.map(inc => Math.abs(inc.Price))

    const TotalIncome = IncomeArray.reduce((acc, result) => acc + result,0)
    const TotalExpense = ExpenseArray.reduce((acc, result) => acc + result,0)  

    const AddTransaction = (e) =>{

        dispatch({
            type: Action.type,
            Discription: discription,
            Price: amount,
        })
        e.preventDefault()
        setdiscription('')
        setamount('')
    }
    
    useEffect(() => {
       document.title='Finance Tracker'
    }, [])

    return (
        <div className='container'>
            <div className='center-cont'>
                <div className='title'>
                    <p>Expense Tracker</p>
                </div>
                <div className='balance'>
                    <p>Balance</p>
                    <p className='balance-amount' style={TotalIncome-TotalExpense<0? {color: 'darkred'}: {color: 'darkblue'}} >${TotalIncome-TotalExpense}</p>
                </div>
                <div className='in-ex'>
                    <div className='income'>
                        <p>Income</p>
                        <p>${TotalIncome}</p>
                    </div>
                    <div className='expense'>
                        <p>Expense</p>
                        <p>${TotalExpense}</p>
                    </div>
                </div>
                <div className='trans-history'>
                        <p>Transaction History</p>
                        <div className='overflow'>
                       { expense.map(disc =>  <div key={Math.random()} className='trans-detail' style={{borderRight: '5px solid darkred',borderBottom: '5px solid darkred' , color: 'darkred'}}>
                            <p  className='trans-disc'>{disc.Discription}</p>
                            <p  className='trans-amount'>${-1 * disc.Price}</p>
                        </div>
                         )

                        }
                        { income.map(disc =>  <div key={Math.random()} className='trans-detail' style={{borderRight: '5px solid darkslateblue',borderBottom: '5px solid darkslateblue' , color: 'darkblue' }}>
                            <p  className='trans-disc'>{disc.Discription}</p>
                            <p  className='trans-amount'>${1*disc.Price}</p>
                        </div>
                         )

                        }
                        </div>
                </div>
                <div className='add-new'>
                        <p>Add New Transaction</p>
                            <form onSubmit={AddTransaction} className='add-trans'>
                                <label>Description</label>
                                <input placeholder='Type here...' value={discription} onChange={e => setdiscription(e.target.value)} type='text'></input>
                                <label>Amount</label>
                                <input placeholder='Insert negative amount for expense ' value={amount} onChange={e => setamount(e.target.value)} type='number'></input>
                                {
                                    discription && amount ?
                                    <button className='active-btn' type='submit'>Add Transaction</button>
                                    :
                                    <button className='dummy-btn' onClick={e => e.preventDefault()} >Add Transaction</button>
                                }
                                
                            </form>
                </div>
            </div>
        </div>

    )
}

export default Tracker
