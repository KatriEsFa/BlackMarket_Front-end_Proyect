import {configureStore} from '@reduxjs/toolkit';

export interface AppStore {
    user: string; //must be a a interface taken from models as an auth model from a user that conenct with the DB
    menu: string;
}

export default configureStore<AppStore>({
    reducer:
})