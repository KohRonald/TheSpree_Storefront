import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  return (
    <Card classname={classes.root}>
      <CardMedia className={classes.media} image={product.image.url} title={product.name}/> 
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterbottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.fromatted_with_symbol}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{__html: product.descriptionc}} variant="body2" color="textSecondary" />
      </CardContent>
      
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
      
    </Card>
  )
}

export default Product;