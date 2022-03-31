
export const Tooltip = (props) => {
   return <div className={`Tooltip ${props.hidden ? 'hidden' : ''}`}>
      {props.text}
      <style jsx>{`
         .Tooltip{
            background: black;
            color:white;
            padding: 8px;
            position: fixed;
            bottom: 0;
            left:0;
            right:0;
            font-size:1em;
            text-align:center;
            height:auto;
            transition: ease .1s;
         }
         .hidden{
            padding: 0;
            height: 0;
         }
      `}</style>
   </div>;
};