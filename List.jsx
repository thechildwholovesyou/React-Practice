function List(props) {
  return (
    <ul className="task">
      {props.tasks.map((el, index) => {
        return (
          <ListItem
            removeTask={props.removeTaskHandler}
            key={index}
            taskVal={el}
          />
        );
        // index as a prop isloue pass kiya kyoki ek warning aara tha ki each child should have unique key prop
      })}
    </ul>
  );
}
