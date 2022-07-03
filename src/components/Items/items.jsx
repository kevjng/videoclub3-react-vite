
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Items({ products }) {
  const { id, tipo, img, nombre, precio } = products;

  return (
    <Card className="text-center mt-3 w-25 mx-1 shadow">
      <Card.Header as="h5">
        {nombre}
      </Card.Header>
      <Card.Img variant="top" src={img} className="p-2" />
      <Card.Body>
        <Card.Text>{precio}</Card.Text>
        <Button variant="danger"></Button>
      </Card.Body>
    </Card>
  )
}

export default Items;
    