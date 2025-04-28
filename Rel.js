// Object untuk mapping huruf ke kode Morse
const morseCode = {
  "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.", "G": "--.", "H": "....",
  "I": "..", "J": ".---", "K": "-.-", "L": ".-..", "M": "--", "N": "-.", "O": "---", "P": ".--.",
  "Q": "--.-", "R": ".-.", "S": "...", "T": "-", "U": "..-", "V": "...-", "W": ".--", "X": "-..-",
  "Y": "-.--", "Z": "--..", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....",
  "6": "-....", "7": "--...", "8": "---..", "9": "----.", "0": "-----", " ": "/"
};

function convertToMorse() {
  // Ambil teks yang dimasukkan user
  const inputText = document.getElementById('text-input').value.toUpperCase();

  // Proses untuk mengubah teks ke kode morse
  let morseResult = '';
  for (let i = 0; i < inputText.length; i++) {
    if (morseCode[inputText[i]]) {
      morseResult += morseCode[inputText[i]] + ' ';
    } else {
      morseResult += '? '; // Jika ada karakter yang tidak dikenali
    }
  }

  // Tampilkan hasil ke elemen dengan id 'morse-output'
  document.getElementById('morse-output').textContent = morseResult.trim();
}