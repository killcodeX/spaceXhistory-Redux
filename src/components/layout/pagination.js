import React, {useState} from "react";
import { Pagination } from "react-bootstrap";

export default function Pagintion() {
  const [offset, setOffset] = useState(0);
  const [counter, setCounter] = useState(1);

  const handleClickPrev = () => {
    setOffset(offset - 10)
    setCounter(counter-1)

    console.log('offset -->', offset)
    console.log('counter -->', counter)
  }

  const handleClickNext = () => {
    setOffset(offset + 10)
    setCounter(counter+1)
    console.log('offset -->', offset)
    console.log('counter -->', counter)
  }
  return (
    <Pagination className="brdr">
      {offset !== 0 && <Pagination.Prev onClick={() => handleClickPrev()} />}
      <Pagination.Item>{counter}</Pagination.Item>
      <Pagination.Next onClick={() => handleClickNext()} />
    </Pagination>
  );
}
