import { login, logout } from "../../actions/auth";

test('should generate login action object', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abc123'
    };
    const result = login('abc123');
    expect(result).toEqual(action);
});

test('should generate logout action object', () => {
    const action = {
        type: 'LOGOUT',
    };
    const result = logout();
    expect(result).toEqual(action);
});