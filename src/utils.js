import { SecureStore } from 'expo';

const EMAIL = 'email';
const PASSWORD  = 'password';

export async function saveAuthParams({email,password}){
    await SecureStore.setItemAsync(EMAIL,email);
    await SecureStore.setItemAsync(PASSWORD,password);
}

export async function fetchAuthParams() {
    const email = await SecureStore.getItemAsync(EMAIL);
    const password = await SecureStore.getItemAsync(PASSWORD);
    return {email,password};
}

export async function deleteAuthParams() {
    await SecureStore.deleteItemAsync(EMAIL);
    await SecureStore.deleteItemAsync(PASSWORD);
}