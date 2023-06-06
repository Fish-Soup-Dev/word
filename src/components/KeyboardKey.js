import '../index.css';

function KeyboardKey(props) {
  var width = "w-8 sm:w-10";

  if (props.special === "yes")
  {
    width = "w-14";
  }

  return (
    <div>
      <button 
        className={`keybord-key ${width}`} 
        type="button" 
        onClick={() => props.clickFunc(props.value)}
      >
        { props.value }
      </button>
    </div>
  );
}

export default KeyboardKey;