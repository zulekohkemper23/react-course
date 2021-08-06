import { createStore, combineReducers, applyMiddleware } from 'redux';
import {createForms} from 'react-redux-form';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { promotions } from './promotions';
import { leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeeback } from './forms';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: promotions,
            leaders: leaders,
            ...createForms({
                feedback: InitialFeeback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}