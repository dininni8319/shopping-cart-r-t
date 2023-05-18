import {Row, Col } from 'react-bootstrap';
import storeItems from '../data/items.json';

type Item = {
  id: number,
  price: number,
  name: string,
  imgUrl: string
}
const Store = () => {
  return (
    <>
    <Row md={2} xs={1} lg={3} className="g-3">
      {storeItems.map((item: Item) => <Col> 
        {JSON.stringify(item)}
        </Col>
      )}
    </Row>
    </>
  )
} 

export default Store