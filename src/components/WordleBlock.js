
function WordleBlock(props) {
  var color = "";

  if (props.type === "empty") {
    color = "border-2 border-zinc-700";
  } else if (props.type === "corect") {
    color = "bg-lime-600";
  } else if (props.type === "almost") {
    color = "bg-yellow-500";
  } else if (props.type === "worng") {
    color = "bg-zinc-700";
  }

  return (
    <div className={`w-12 h-12 m-0.5 rounded-sm ${color} text-white font-bold text-2xl flex justify-center items-center`}>
      { props.value }
    </div>
  );
}

export default WordleBlock;
