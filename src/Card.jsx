export const Card = (props) => {

   return <div className={`Card ${props.hidden ? 'hidden' : ''}`} onClick={props.onClick}>
      <div className='row'>
         <div className="category" onClick={(e)=>{
            e.stopPropagation();
            props.onSearch(props.category)
         }}>{props.category}</div>
         <div className="name" >{props.name}</div>
      </div>
      {props.phone && <a className="phone" href={`tel:${props.phone}`} target="_blank">{props.phone}</a>}
      {props.wa && <a className="wa" href={`https://wa.me/${props.wa}`} target="_blank">{props.wa}</a>}
      {props.instagram && <a className="instagram" href={`https://instagram.com/${props.instagram}`} target="_blank">{props.instagram}</a>}
      {props.maps && <a className="maps" href={`https://goo.gl/maps/${props.maps}`} target="_blank">Локация</a>}
      <style jsx>{`
         .Card{
            margin: 8px;
            min-width: 200px;
            border-radius: 8px;
            border: 3px solid #ccc;
            padding: 8px;
            display: flex;
            flex-direction:column;
            cursor:pointer;
         }
         a{
            padding: 7px 0;
            display: flex;
            align-items: flex-start;
            text-decoration: none;
            border-bottom: 1px solid #ccc;
         }
         .hidden{
            display:none;
         }
         .row {
            display: flex;
            justify-content: space-between;
         }
         .Card > div {
            padding:4px 0;
         }
         .category{
            color: dodgerblue;
            text-transform: capitalize;
            font-weight: bold;
         }
         .name{
            color: black;
            text-transform: capitalize;
            font-weight: bold;
         }
         .phone::before {
            content: "📞";
         }
         .wa::before {
            content: url("./wa.svg");
         }
         .maps::before {
            content: url("./maps.svg");
         }
         .instagram::before {
            content: url("./instagram.svg");
         }
         .map::before {
            content: "🌍";
         }
         .link::before {
            content: "🔗";
         }
      `}</style>
   </div>;
};

