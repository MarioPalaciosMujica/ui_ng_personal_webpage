import { AuthModel } from '@shared/models/auth.model';

export interface AppState {
    authModel?: AuthModel;
    loading?: boolean;
    loaded?: boolean;
}

export const initAppState: AppState = {
    authModel: {
        loggginIn: false,
        clientName: 'guest',
        token: undefined,
        role: undefined
    },
    loading: false,
    loaded: false
}
