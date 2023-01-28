import React from "react";
import { Form, Button } from "react-bootstrap";
import menuContext from "../../ContextAPI/MenuContext";
import './MenuForm.css'

function MenuForm() {
  const [product, setProduct] = React.useState('');
  const [productCost, setProductCost] = React.useState(0);
  const [drink, setDrink] = React.useState('');
  const [drinkCost, setDrinkCost] = React.useState(0);
  const [menuName, setMenuName] = React.useState('')
  const [menu, setMenu] = React.useState({
    product: [],
    drink: []
  });
  const { menus, setMenus } = React.useContext(menuContext)
  
  function updateMenu(toAdd, type, event) {
    event.preventDefault()
    if (type === 'product') {
      setMenu({ ...menu, product: [...menu.product, toAdd] });
      setProduct('')
      setProductCost(0)
    } else {
      setMenu({ ...menu, drink: [...menu.drink, toAdd]} );
      setDrink('')
      setDrinkCost(0)
    }
  }

  return(
    <section className="menu-form-section">
      <form>
        <div className="menu-form-product-div">
          <Form.Group className="input-group mb-3">
            <Form.Control
              type="text"
              value={ product }
              className="input-group-text"
              placeholder="Produto"
              onChange={ ({ target }) => setProduct(target.value)}
            />
            <Form.Control
              type="number"
              value={ productCost }
              className="price-input"
              onChange={ ({ target }) => setProductCost(target.value)}
            />
          </Form.Group>
          <Button
            type="submit"
            onClick={ (e) => updateMenu({ product, productCost }, 'product', e)}
            >
              +
          </Button>
        </div>
        <div className="menu-form-drink-div">
          <Form.Group className="input-group mb-3">
            <Form.Control
              type="text"
              value={ drink }
              className="input-group-text"
              placeholder="Bebiba"
              onChange={ ({ target }) => setDrink(target.value)}
            />
            <Form.Control
              type="number"
              value={ drinkCost }
              className="price-input"
              onChange={ ({ target }) => setDrinkCost(target.value)}
            />
          </Form.Group>
          <Button
            type="submit"
            onClick={ (e) => updateMenu({ drink, drinkCost }, 'drink', e)}
            >
              +
          </Button>
        </div>
      </form>
      { menu.product.length || menu.drink.length ? (
        <div>
          <div>
            <h4>Produtos:</h4>
            <ul className="to-add-list">
              {
                menu.product.map((item) => (
                  <li key={ item.product }>{ item.product }: { item.productCost }</li>
                ))
              }
            </ul>
          </div>
          <div>
            <h4>Bebidas</h4>    
            <ul className="to-add-list">
              {
                menu.drink.map((item) => (
                  <li key={ item.drink }>{ item.drink }: { item.drinkCost }</li>
                ))
              }
            </ul> 
          </div>
        </div>) : <div><p>Nenhum item registrado ainda!</p></div>
      }
      <form>
        <Form.Group className="input-group mb-3">
          <Form.Control
            type="text"
            value={ menuName }
            className="input-group-text"
            placeholder="Nome do Menu"
            onChange={ ({ target }) => setMenuName(target.value)}
          />
        </Form.Group>
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            setMenus([...menus, { "name": menuName, menu }])
          }}
        >
          Registrar Menu
        </Button>
      </form>
    </section>
  )
}

export default MenuForm;