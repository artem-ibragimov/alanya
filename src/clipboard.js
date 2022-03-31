
export const copy = (s) => {
   if (!navigator.clipboard) { return copyToClipboard(s); }
   return navigator.clipboard.writeText(s);
};


function copyToClipboard(string) {
   let textarea;

   return new Promise((resolve, reject) => {
      try {
         textarea = document.createElement('textarea');
         textarea.setAttribute('readonly', 'true');
         textarea.setAttribute('contenteditable', 'true');
         textarea.style.position = 'fixed'; // prevent scroll from jumping to the bottom when focus is set.
         textarea.value = string;

         document.body.appendChild(textarea);

         textarea.focus();
         textarea.select();

         const range = document.createRange();
         range.selectNodeContents(textarea);

         const sel = window.getSelection();
         if (!sel) { return reject(); }
         sel.removeAllRanges();
         sel.addRange(range);

         textarea.setSelectionRange(0, textarea.value.length);
         resolve(document.execCommand('copy'));
      } catch (err) {
         reject(err);
      }
      document.body.removeChild(textarea);
   });
}