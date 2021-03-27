import { AuthModel } from '@shared/models/auth.model';
import { Action } from '@ngrx/store';

export enum AuthActionTypes {
    Login = '[Login] Action',
    Logout = '[Logout] Action',
    Register = '[Register] Action',
    Load = '[Load] Action'
}

export class Login implements Action {
    readonly type = AuthActionTypes.Login;
    constructor(public payload: AuthModel){}
}

export class Logout implements Action {
    readonly type = AuthActionTypes.Logout;
}

export class Register implements Action {
    readonly type = AuthActionTypes.Register;
    constructor(public payload: AuthModel){}
}

export class Load implements Action {
    readonly type = AuthActionTypes.Load;
}

export type AuthActions = Login | Logout | Register | Load;
