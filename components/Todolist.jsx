import React, { useState, useEffect } from "react";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";

export default function Todolsit(props) {
  return (
    <div className="border-bottom p-1 py-2 fs-2 d-flex gap-2">
      <span
        className="me-auto"
        style={props.completed ? { textDecoration: "line-through" } : null}
      >
        {props.title}
      </span>

      <button className="btn btn-success" onClick={props.onMark}>
        <IconCheck />
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => {
          props.onMoveUp();
        }}
      >
        <IconArrowUp />
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => {
          props.onMoveDown();
        }}
      >
        <IconArrowDown />
      </button>
      <button className="btn btn-danger" onClick={props.onDelete}>
        <IconTrash />
      </button>
    </div>
  );
}
