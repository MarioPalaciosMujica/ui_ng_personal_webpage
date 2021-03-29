import { AppState, initAppState } from '@core/reducers/app.state';
import { AuthActionTypes, AuthActions } from '@core/actions/auth.actions';
import { AuthModel } from '@shared/models/auth.model';

export function authReducer(state: AppState = initAppState, action: AuthActions){
    switch(action.type){
        case AuthActionTypes.Login: {
            console.log("authReducer Login");
            const authModel: AuthModel = action.payload;
            return Object.assign({}, state, {
                authModel: {
                    loggedIn: true,
                    clientName: authModel.clientName,
                    token: authModel.token,
                    role: authModel.role
                },
                loading: false,
                load: true
            });
        }
        case AuthActionTypes.Logout: {
            return Object.assign({}, state, initAppState);
        }
        case AuthActionTypes.Register: {
            console.log("authReducer Register");
            const authModel: AuthModel = action.payload;
            return Object.assign({}, state, {
                authModel: {
                    loggedIn: true,
                    clientName: authModel.clientName,
                    token: authModel.token,
                    role: authModel.role
                },
                loading: false,
                load: true
            });
        }
        case AuthActionTypes.Load: {
            console.log("authReducer Load");
            return {
                ...state,
                loading: true,
                load: false
            };
        }
        default: {
            console.log("authReducer default");
            return state;
        }
    };
}
