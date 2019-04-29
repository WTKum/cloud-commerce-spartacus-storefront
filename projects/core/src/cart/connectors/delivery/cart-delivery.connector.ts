import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Address, DeliveryMode } from '../../../occ/occ-models/occ.models';
import { CartDeliveryAdapter } from './cart-delivery.adapter';

@Injectable({
  providedIn: 'root',
})
export class CartDeliveryConnector {
  constructor(private adapter: CartDeliveryAdapter) {}

  public createAddress(
    userId: string,
    cartId: string,
    address: Address
  ): Observable<Address> {
    return this.adapter.createAddress(userId, cartId, address);
  }

  public setAddress(
    userId: string,
    cartId: string,
    addressId: string
  ): Observable<any> {
    return this.adapter.setAddress(userId, cartId, addressId);
  }

  public setMode(
    userId: string,
    cartId: string,
    deliveryModeId: string
  ): Observable<any> {
    return this.adapter.setMode(userId, cartId, deliveryModeId);
  }

  public getMode(userId: string, cartId: string): Observable<DeliveryMode> {
    return this.adapter.getMode(userId, cartId);
  }

  public getSupportedModes(
    userId: string,
    cartId: string
  ): Observable<DeliveryMode[]> {
    return this.adapter.getSupportedModes(userId, cartId);
  }
}
