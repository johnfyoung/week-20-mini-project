import React, { useState } from "react";
import BucketForm from "./BucketForm";

function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    text: "",
    eagerness: "",
  });

  console.log(props.bucket);

  const submitUpdate = (value) => {
    props.editBucketItem(edit.id, value);
    // TODO: Write logic to update the `edit` value in state after a user updates an entry in the list
    // TODO: Set the key:value pairs in the `edit` object back to empty strings
    setEdit({
      id: null,
      text: "",
      eagerness: "",
    });
  };

  // If the user is attempting to edit an item, render the bucket form with the edit variable passed as a prop
  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.bucket.map((item, index) => (
    <div
      className={
        item.isComplete
          ? `bucket row complete ${item.eagerness}`
          : `bucket-row ${item.eagerness}`
      }
      key={item.id}
    >
      <div key={item.id} onClick={() => props.completeBucketItem(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        <p
          onClick={() =>
            setEdit({ id: item.id, text: item.text, eagerness: item.eagerness })
          }
        >
          {" "}
          ✏️
        </p>
        {/* TODO: Add an onClick event that will invoke the removeBucketItem method passing in the `item.id` */}
        <p onClick={() => props.removeBucketItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;
