document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('copyBibtex');
  const code = document.getElementById('bibtexCode');
  if (!button || !code) return;

  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(code.innerText);
      const old = button.innerHTML;
      button.innerHTML = '<i class="fas fa-check"></i> Copied';
      setTimeout(() => { button.innerHTML = old; }, 1400);
    } catch (_) {
      const range = document.createRange();
      range.selectNodeContents(code);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
  });
});
