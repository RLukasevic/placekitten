import { KittenList, KittenListAction, SetKittensAction, FilterInputModal, FilterInputModalAction, Filter, FilterAction, IKitten } from "../types";
import * as homeActions from "../actions/HomeScreen.actions";
import { combineReducers } from 'redux';

const initialKittenListState: KittenList = [];

export const kittenList = (
    state: KittenList = initialKittenListState,
    action: KittenListAction
) => {
    switch (action.type) {
        case homeActions.KITTEN_LIST_ACTION_TYPES.SET_KITTENS:
            const data = <SetKittensAction>action;
            return {
                kittenList: data.data
            };
        
        case homeActions.KITTEN_LIST_ACTION_TYPES.RESET_KITTENS:
            const newState:KittenList = [];
            return newState;

        default:
            return state;
    }
}

const initialFilterInputState: FilterInputModal = {
    modalShow: false,
    error: '',
};

export const filterInput = (
    state: FilterInputModal = initialFilterInputState,
    action: FilterInputModalAction
) => {
    switch (action.type) {
        case homeActions.FILTER_INPUT_MODAL_ACTION_TYPES.TOGGLE_MODAL:
            return {...state, modalShow: !state.modalShow}

        default:
            return state;
    }
}

const initialFilterState: Filter = {
    current: 30,
};

export const setFilter = (
    state: Filter = initialFilterState,
    action: FilterAction
) => {
    switch (action.type) {
        case homeActions.FILTER_ACTION_TYPES.SET_CURRENT:
            return {...state, current: action.current}

        default:
            return state;
    }
}

export const root = combineReducers({kittenList:kittenList, filterInputModal:filterInput, filter:setFilter})