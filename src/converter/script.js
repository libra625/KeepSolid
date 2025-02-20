const layoutMap = {
    q: 'й', w: 'ц', e: 'у', r: 'к', t: 'е', y: 'н', u: 'г', i: 'ш', o: 'щ', p: 'з',
    '[': 'х', ']': 'ї', a: 'ф', s: 'і', d: 'в', f: 'а', g: 'п', h: 'р', j: 'о', k: 'л',
    l: 'д', ';': 'ж', "'": 'є', z: 'я', x: 'ч', c: 'с', v: 'м', b: 'и', n: 'т', m: 'ь',
    ',': 'б', '.': 'ю', A: 'Ф', S: 'І', D: 'В', F: 'А', G: 'П', H: 'Р', J: 'О',
    K: 'Л', L: 'Д', ':': 'Ж', '"': 'Є', Z: 'Я', X: 'Ч', C: 'С', V: 'М', B: 'И', N: 'Т',
    M: 'Ь', '<': 'Б', '>': 'Ю', '}': 'Ї', '/' : '.', 'U' : 'Г', 'Q' : 'Й', 'E' : 'У', 'Y' : 'Н',
    'I' : 'Ш', 'T' : 'Е', 'W': 'Ц', 'P': 'З', 'R': 'К', '{': 'Х', 'O': 'Щ', '&': '?', '?': ','
};

const inputField = document.getElementById('inputText')
const outputField = document.getElementById('outputText')

function convertText() {
    let inputText = inputField.value || 'Cghj,eqnt ojcm ddtcnb';
    let outputText = '';

    for (let char of inputText) {
        outputText += layoutMap[char] || char;
    }

    outputField.value = outputText;
}

inputField.addEventListener('input', convertText);
document.addEventListener('DOMContentLoaded', () => {
    convertText();
});
