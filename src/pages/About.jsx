// TODO 6: props를 받아서 장바구니 목록을 렌더링하세요
//         - cart: 장바구니에 담긴 과일 배열
//         - onRemoveFromCart: 장바구니 제거 함수
const About = ({ cart, onRemoveFromCart }) => {
  if (cart.length === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>장바구니</h2>
        <p>장바구니가 비어 있습니다</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>장바구니</h2>
      {/* TODO: cart 배열을 map으로 순회하며 장바구니 아이템을 렌더링하세요 */}
      {/* 각 아이템에는 이모지, 이름, 가격, "제거" 버튼이 있어야 합니다 */}
      {/* 장바구니가 비어있으면 "장바구니가 비어있습니다" 메시지를 보여주세요 */}

      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <p>{item.emoji}</p>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button type="button" onClick={() => onRemoveFromCart(item.id)}>
              제거
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
