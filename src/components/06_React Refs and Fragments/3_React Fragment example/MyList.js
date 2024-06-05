function MyList(props) {
    return (
      <>
        {props.items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </>
    );
  }
export default MyList;  