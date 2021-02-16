const { v4: uuidv4 } = require('uuid');

let products = [];

const getAllProducts = (req, res) => {
  res.send(products)
}

const addProducts = (req, res) => {
    const id = uuidv4();
    products = [
        ...products,
        {...req.body, id}
    ];
    res.send(products)
}

const deleteProducts = (req, res) => {
  products = products.filter(({id}) => id !== req.params.id);
  res.send(products)
}

const updateProducts = (req, res) => {
  products = products.reduce((acc, product) => {
    if(product.id !== req.body.id) {
      return [...acc, product];
    }

    return [...acc, {...product, ...req.body}];
  }, []);

  res.send(products);
}

module.exports = {
    getAllProducts,
    addProducts,
    updateProducts,
    deleteProducts
}