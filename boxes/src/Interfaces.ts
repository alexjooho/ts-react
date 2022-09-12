interface BoxListInterface {
    id: string;
    width: number;
    height: number;
    backgroundColor: string;
}

interface BoxPropsInterface extends BoxListInterface {
    remove: Function;
}

interface NewBoxFormPropsInterface {
    createBox: Function;
}

interface NewBoxFormInterface {
    width: string;
    height: string;
    backgroundColor: string;
}

export type {
    BoxListInterface, BoxPropsInterface, NewBoxFormPropsInterface,
    NewBoxFormInterface
};
