import { combineReducers } from 'redux';
import { countriesReducer } from './countries/countries-reduces';
import { themeReducer } from './theme/theme-reducer';

export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
});
