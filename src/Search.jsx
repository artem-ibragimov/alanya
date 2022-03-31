export const Search = (props) => {
   return <>
      <input
         type="search"
         value={props.value}
         spellCheck
         autoCorrect='on' 
         placeholder='Поиск'
         onInput={(e) => {
            e.preventDefault();
            props.onInput(e.target.value.toLowerCase());
         }}
      />
      <style jsx>{`
      input[type="search"]{
         margin:8px;
         padding:8px;
         font-size:1em;
      }
      `}</style>
   </>;
};