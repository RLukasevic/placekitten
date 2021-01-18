import * as types from "../types";

export enum KITTEN_LIST_ACTION_TYPES {
    SET_KITTENS = 'KITTEN_LIST/SET_KITTENS',
    RESET_KITTENS = 'KITTEN_LIST/RESET_KITTENS'
};

export const setKittens = (data:types.KittenList): types.SetKittensAction => ({
    type: KITTEN_LIST_ACTION_TYPES.SET_KITTENS,
    data: data
});

export const resetKittens = (): types.ResetKittensAction => ({
    type: KITTEN_LIST_ACTION_TYPES.RESET_KITTENS
});

///////////////////////////////////////////////////////////////////////////////////////////////

export enum FILTER_INPUT_MODAL_ACTION_TYPES {
    TOGGLE_MODAL = 'FILTER_INPUT_MODAL/TOGGLE_MODAL',
};

export const toggleModal = (): types.FilterInputModalAction => ({
    type: FILTER_INPUT_MODAL_ACTION_TYPES.TOGGLE_MODAL
});

///////////////////////////////////////////////////////////////////////////////////////////////

export enum FILTER_ACTION_TYPES {
    SET_CURRENT = 'FILTER/SET_CURRENT'
};

export const setCurrentFilter = (data:number): types.FilterAction => ({
    type: FILTER_ACTION_TYPES.SET_CURRENT,
    current: data
});