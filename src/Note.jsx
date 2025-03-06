export default function Note(props){
    function handleDelete(){
        props.del(props.id);
        
    }
    function handleUpdate(){
        props.upd(props.id);
    }
    return (
        <div className="note">
        <h1>{props.note.title}</h1>
        <p>{props.note.content}</p>
        {/* <button onClick={handleUpdate}>UPDATE</button> */}

        <button onClick={handleDelete}>DELETE</button>
      </div>
    )
}