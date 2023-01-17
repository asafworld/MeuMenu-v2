import React from "react";
import { Form, Button } from "react-bootstrap";

function MenuForm() {
  const [product, setProduct] = React.useState('');
  const [productCost, setProductCost] = React.useState(0);
  const [drink, setDrink] = React.useState('');
  const [drinkCost, setDrinkCost] = React.useState(0);
  const [menu, setMenu] = React.useState([]);
  
  function updateMenu(toAdd) {
    setMenu([...menu, toAdd]);
  }

  return(
    <section>
      <form>
        <div className="menu-form-product-div">
          <Form.Group>
            <Form.Control
              type="text"
              value={ product }
              placeholder="Produto"
              onChange={ ({ target }) => setProduct(target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="number"
              value={ productCost }
              onChange={ ({ target }) => setProductCost(target.value)}
            />
          </Form.Group>
          <Button
            type="submit"
            onClick={ () => updateMenu({ product, productCost })}
            >
              +
            </Button>
        </div>
        <div className="menu-form-drink-div">
          <Form.Group>
            <Form.Control
              type="text"
              value={ drink }
              placeholder="Bebiba"
              onChange={ ({ target }) => setDrink(target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="number"
              value={ drinkCost }
              onChange={ ({ target }) => setDrinkCost(target.value)}
            />
          </Form.Group>
          <Button
            type="submit"
            onClick={ () => updateMenu({ drink, drinkCost })}
            >
              +
            </Button>
        </div>
      </form>
      <br />
      
    </section>
  )
}

export default MenuForm;