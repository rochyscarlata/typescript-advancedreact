import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/ProductCard"

const product = {
  id: '1',
  title: 'Coffee mug - Card',
  img: './coffee-mug.png'
}


export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping cart</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard product={product} >
          <ProductCard.Image />
          <ProductCard.Title title={'hola'} />
          <ProductCard.Buttons increaseBy={function (value: number): void {
            throw new Error("Function not implemented.")
          }} counter={0} />
        </ProductCard>
        <ProductCard product={product} >
          <ProductImage />
          <ProductTitle title={'hola'} />
          <ProductButtons increaseBy={function (value: number): void {
            throw new Error("Function not implemented.")
          }} counter={0} />
        </ProductCard>
      </div>


    </div>
  )
}