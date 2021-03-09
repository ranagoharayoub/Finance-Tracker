export const initialState = {
    expense: [
        ],
    income: [
        ]
}

const Add_Transaction = 'Add_Transaction'

export const Action = {
    type: Add_Transaction
}

export const reducer = (state, action) =>{
    switch (action.type) {

        case Add_Transaction:

            if (action.Price<0){
                return {...state , expense: [{Discription: action.Discription, Price: action.Price}, ...state.expense]}
            }
            else{
                return {...state, income: [{Discription: action.Discription,Price: action.Price}, ...state.income]}
            }


        default:
            return state
    }
}

export default reducer