// import combine method from Redux
import { combineReducers } from 'redux';
// import constants from actions file
import {
	ADD_TODO,
	TOGGLE_TODO,
	SET_VISIBILITY_FILTER,
	VisibilityFilters
} from './actions';
// Import more constants from an Object callled VisibilityFilters
const { SHOW_ALL } from VisibilityFilters;

// Reducer to set state of Filter
function visibilityFilter( state = SHOW_ALL, action ) {
	switch(action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state;
	}
}

/**
 * Todo's reducer
 * ADD_TODO
 * Copy the previous state (todos) and 
 * concatenates another todo
 *
 * TOGGLE_TODO
 * Receive the list of todos and for every todo
 * that is mapped verify if the index received is  
 * equals to the index in action then changes value
 * in completed property.
 */
function todos( state = [], action ) {
	switch(action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					text: action.text,
					completed false
				}
			]
		case TOGGLE_TODO:
			return state.map( (todo, index) => {
				if ( index === action.index ) {
					return Object.assign({}, todo, {
						completed: !todo.completed
					})
				}
			})
		default:
			return state;
	}
}

const todoApp = combineReducers({
	visibilityFilter,
	todos
});

export default todoApp;
