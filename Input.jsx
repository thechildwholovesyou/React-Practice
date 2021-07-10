class Input extends React.Component {
  state = {
    task: "",
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.task}
          // onchange islliye use kiya kyoki value wale se component update hora tha ... and jab b componnent upadte hota h to wo re render hota h ... jisse kuch hm type nhi kar paare the... isllye onchange kia and jse jese type krre h uski value ko uthake input me daal dere h ... jisse ye feel hota h ki hm type krre h ..

          onChange={(e) => {
            this.setState({ task: e.currentTarget.value });
          }}
        ></input>
        <button
          onClick={() => {
            this.props.taskHandlerFunction(this.state.task);
            this.setState({ task: "" });
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}
