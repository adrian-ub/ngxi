import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCarParkingIcon],svg[arcticons-car-parking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.53 27.943h2.2l-.238-2.321l-1.081-1.266l-8.031-.765L21.737 18h-8.162l-5.038 5.328l-4.43 1.107l-.607 2.901l.633.607h3.534m5.327 0h14.262m-1.876-4.352l-16.843-.263M20.105 18l-.783 5.48M13.575 18l-.78 5.377"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.662 18h7.015l7.523 5.591l8.031.765l1.081 1.266l.188 2.321h-9.77m-9.35-4.352h9.82m-.708 2.031h9.82"></svg:path><svg:circle cx="29.866" cy="27.442" r="2.558" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="10.225" cy="27.442" r="2.558" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.423 27.942a2.556 2.556 0 0 0 5.014 0m14.399 0a2.556 2.556 0 0 0 5.014 0"></svg:path>`,
})
export class ArcticonsCarParkingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
