export function validateEmail(email) {
    if (!email) return false;

    // Allows common email formats (uppercase, plus signs, multi-part domains).
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
