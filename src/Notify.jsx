

const Status = ({user,handleStatusChange}) => {

 

    return (
       
      <select
      id="status"
      value={user.status}
      className={`${
        user.status === "Completed" ? "light-green-sts" : "bg-danger"
      }`}
      onChange={(e) => handleStatusChange(e.target.value)}
    >
      <option style={{ backgroundColor: "#13ad89" }} value="Completed">
        Completed
      </option>
      <option className="btn btn-danger" value="Not Completed">
        Not Completed
      </option>
    </select>
   
    )
  }
  export default Status