import "../css/home.css";

export default () => {
    const titleStyle = {
        color: "red",
        backgroundColor: "blue",
        fontFamily: "monospace"
    }

    return <>
        <h1 style={titleStyle}>Home page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non ullamcorper magna. Cras a ornare felis, nec egestas massa. Fusce et velit pretium, sodales urna vel, molestie magna.</p>
    
        <h1 style={titleStyle}>This is title 2</h1>
    </>
}