import "./student.css";

function Student({studentName, flower}) {
return(
    <div className="student-container">
        <h1>Hello {studentName}...!</h1>
        <h3>Your fav flower is {flower}. </h3>
    </div>
)

}

export default Student