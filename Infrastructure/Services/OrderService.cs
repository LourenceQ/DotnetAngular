using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Entities.OrderAggregate;
using Core.Interfaces;
using Core.Specifications;

namespace Infrastructure.Services
{
    public class OrderService : IOrderService
    {
        private readonly IBasketRepository _basketRepo;
        private readonly IUnityOfWork _unityOfWork;

        public OrderService(IBasketRepository basketRepo, IUnityOfWork unityOfWork)
        {
            _basketRepo = basketRepo;
            _unityOfWork = unityOfWork;
        }

        public async Task<Order> CreateOrderAsync(string buyerEmail, int deliveryMethodId, string basketId, Address shippingAddress)
        {
            var basket = await _basketRepo.GetBasketAsync(basketId);

            var items = new List<OrderItem>();
            foreach (var item in basket.Items)
            {
                var productItem = await _unityOfWork.Repository<Product>().GetByIdAsync(item.Id);
                var itemOrdered = new ProductItemOrdered(productItem.Id, productItem.Name, productItem.PictureUrl);
                var orderItem = new OrderItem(itemOrdered, productItem.Price, item.Quantity);
                items.Add(orderItem);
            }

            var deliveryMethod = await _unityOfWork.Repository<DeliveryMethod>().GetByIdAsync(deliveryMethodId);

            var subtotal = items.Sum(item => item.Price * item.Quantity);

            var order = new Order(buyerEmail, shippingAddress, deliveryMethod, items, subtotal);
            _unityOfWork.Repository<Order>().Add(order);

            var result = await _unityOfWork.Complete();
            if (result <= 0) return null;
            
            await _basketRepo.DeleteBasketAsync(basketId);
            
            return order;

        }

        public async Task<IReadOnlyList<DeliveryMethod>> GetDeliveryMethodAsync()
        {
            return await _unityOfWork.Repository<DeliveryMethod>().ListAllAsync();
        }

        public async Task<Order> GetOrderByIdAsync(int id, string buyerEmail)
        {
            var spec = new OrdersWithItemsAndOrderingSpecification(id, buyerEmail);

            return await _unityOfWork.Repository<Order>().GetEntityWithSpec(spec);
        }

        public async Task<IReadOnlyList<Order>> GetOrdersForUserAsync(string buyerEmail)
        {
            var spec = new OrdersWithItemsAndOrderingSpecification(buyerEmail);

            return await _unityOfWork.Repository<Order>().ListAsync(spec);
        }
    }
}