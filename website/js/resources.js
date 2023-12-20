document.addEventListener('DOMContentLoaded', () => {
    const text = "Take action...";
    const typingEffectTextElement = document.getElementById('typing-effect-text');
    let index = 0;

    function typeNextCharacter() {
        if (index < text.length) {
            typingEffectTextElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeNextCharacter, 5000 / text.length);
        }
    }

    typeNextCharacter();
});