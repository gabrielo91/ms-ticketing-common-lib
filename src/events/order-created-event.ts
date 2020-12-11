import { Subjects } from './subjects';
import { OrderStatus } from './types/order-status';

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    expiresAt: string;
    status: OrderStatus;
    userId: string;
    version: number;
    ticket: {
      id: string;
      price: number;
    };
  };
}
