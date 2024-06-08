function transformString(str) {
    const length = str.length;

    if (length % 15 === 0) {
        // If length is divisible by both 3 and 5 (i.e., 15)
        str = str.split('').reverse().join(''); // Reverse the string
        str = str.split('').map(char => char.charCodeAt(0)).join(' '); // Replace with ASCII codes
    } else if (length % 3 === 0) {
        // If length is divisible by 3
        str = str.split('').reverse().join(''); // Reverse the string
    } else if (length % 5 === 0) {
        // If length is divisible by 5
        str = str.split('').map(char => char.charCodeAt(0)).join(' '); // Replace with ASCII codes
    }

    return str;
}

// Example usage:
console.log(transformString("Hamburger"));          // Output: "regrubmaH"
console.log(transformString("Pizza"));              // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie"));// Output: "eikooC pihC etalocohC"
