import { useState } from "react";
import { Button, Typography } from "@material-ui/core";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  let color;
  if (count <= 4) {
    color = "green";
  } else if (count <= 9) {
    color = "blue";
  } else {
    color = "red";
  }

  return (
    <div>
      <Typography variant="h1" style={{ color }}>
        {count}
      </Typography>

      <Button variant="contained" color="secondary" onClick={decrement}>
        -
      </Button>
      <Button variant="contained" color="primary" onClick={increment}>
        +
      </Button>
    </div>
  );
}

export default Counter;
