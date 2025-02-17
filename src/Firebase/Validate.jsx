export function ValidateEmailAndPassword(name,email,password){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if(!emailPattern) return "Email is not valid"
    const passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(password);
    if(!passwordPattern)return "Password is not valid";
    return null
}