// TODO 7: props를 받아서 주문 요약을 렌더링하세요
//         - cart: 장바구니에 담긴 과일 배열
const Contact = ({ cart }) => {
  if (cart.length === 0) {
    <div style={{ padding: "20px" }}>
      <h2>주문 요약</h2>
      {/* 장바구니가 비어있으면 "장바구니에 담긴 상품이 없습니다" 메시지를 보여주세요 */}
      <p>장바구니에 담긴 상품이 없습니다</p>
    </div>;
  }

  const sum = cart.reduce((sum, fruit) => sum + fruit.price, 0);
  return (
    <div style={{ padding: "20px" }}>
      <h2>주문 요약</h2>
      {/* TODO: 장바구니에 담긴 과일의 총 개수와 총 가격을 보여주세요 */}
      <p>총 개수: {cart.length}개</p>
      <p>총 가격: {sum}원</p>
    </div>
  );
};

export default Contact;
