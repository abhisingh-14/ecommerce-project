import axios from 'axios';
import formatMoney from '../../utils/money';
import dayjs from 'dayjs';

function DeliveryOptions({ deliveryOptions, cartItem, loadCart }) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">
        Choose a delivery option:
      </div>
      {deliveryOptions.map((deliveryOption) => {
        let priceString = (deliveryOption.priceCents === 0 ? 'Free Shipping' : `${formatMoney(deliveryOption.priceCents)} - Shipping`);

        const updateDeliveryoption = async () => {
          await axios.put(`/api/cart-items/${cartItem.productId}`, {
            deliveryOptionId: deliveryOption.id
          });
          await loadCart();
        };

        return (
          <div key={deliveryOption.id} className="delivery-option"
            onClick={updateDeliveryoption}
            data-testid="delivery-option">
            <input type="radio"
              checked={deliveryOption.id === cartItem.deliveryOptionId}
              onChange={() => { }}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
              data-testid="delivery-option-input"
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
              </div>
              <div className="delivery-option-price">
                {priceString}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DeliveryOptions;