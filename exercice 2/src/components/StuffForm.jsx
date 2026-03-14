import React, {useState} from "react";

export default function StuffForm({onAddStuff}) {
  const [name, setName] = useState("");
  const [price, setprice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStuff(name, Number(price));

    setName("");
    setprice("");
  }
  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input type="search" placeholder="Banana"
      value={name} onChange={(e) => setName(e.target.value)}
      />

      <p>Stuff price</p>
      <input type="search" placeholder="15"
      value={price} onChange={(e) => setprice(e.target.value)}
      />

      <button>Add Stuff</button>
    </form>
  );
}
