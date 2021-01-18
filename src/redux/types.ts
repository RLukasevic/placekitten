export interface IKitten {
    name:string,
    image:string,
    id:number
};
export interface FilterInputModal {
    modalShow:boolean,
    error:string
};
export interface Filter {
    current:number
};

export type KittenList = IKitten[];

export type FilterInputModalAction = {
    type:string,
};

export type FilterAction = {
    type:string,
    current:number
};

export type SetKittensAction = {
    type:string,
    data:KittenList
};

export type ResetKittensAction = {
    type:string
};

export type KittenListAction = SetKittensAction | ResetKittensAction;

export type AppState = {
    kittenList: KittenList,
    filterInputModal: FilterInputModal,
    filter: Filter,
}

//export type DispatchType = (args:KittenListAction) => KittenListAction;