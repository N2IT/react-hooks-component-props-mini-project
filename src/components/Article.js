import React from "react";

function Article({ id, title, date="January 1, 1970", minutes, preview }) {
    return(
      <article key={id}>
        <h3>{title}</h3>
        <small>{date}</small>
        {/* <p>Minutes to Read: {minutes}</p> */}
        <p>{preview}</p>
      </article>
    )
  }

  export default Article