import { useState } from "react";

export function CreateTodo(props) {
    // react-query could be used instead of useState. It is advised to use react-query for fetching data from an API.This is a beginner project so we are using useState.
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
        <input id = "title" type = "text" placeholder = "title" style={{
            padding: 10,
            margin: 10
        }} onChange = {(e) => {
            setTitle(e.target.value);
        }}></input> <br />
        <input id = "desc" type = "text" placeholder = "description" style={{
            padding: 10,
            margin: 10
        }} onChange = {(e) => {
            setDescription(e.target.value);
        }}></input>

        <button onClick = {async () => {
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }) 
                .then(async function(res) {
                const json = await res.json();
                alert("Todo added");
            })
        }}>Add Todo</button>
    </div>
}