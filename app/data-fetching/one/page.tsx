import React from "react";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const One = async () => {
  const data: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }[] = await getData();
  console.log(data);

  return (
    <>
      <div>One</div>
      <ul className=" list-decimal">
        {data.map((item) => (
          <li className=" list-disc" key={item.id}>
            {item.title}
            <br/>
            <br/>
          </li>
        ))}
      </ul>
    </>
  );
};

export default One;
