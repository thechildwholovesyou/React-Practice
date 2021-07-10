function ListItem(props) {
  return (
    <li key={Date.now()}>
      <span>{props.taskVal}</span>
      <button
        onClick={() => {
          props.removeTask(props.taskVal);
        }}
      >
        X
      </button>
    </li>
  );
}
