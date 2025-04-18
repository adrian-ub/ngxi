import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDroneDeliveryIcon],svg[carbon-drone-delivery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 30h-8v-8h8Zm-6-2h4v-4h-4Z"></svg:path><svg:path fill="currentColor" d="M32 11H22v2h4v3H6v-3h4v-2H0v2h4v5h5.132L6 22.697V27h2v-3.697L11.535 18h8.93L24 23.303V27h2v-4.303L22.868 18H28v-5h4zM16 6a5.98 5.98 0 0 0-4.24 1.76l1.413 1.413a3.994 3.994 0 0 1 5.654 0l1.414-1.414A5.98 5.98 0 0 0 16 6"></svg:path><svg:path fill="currentColor" d="m8.932 4.932l1.414 1.414a7.99 7.99 0 0 1 11.308 0l1.414-1.414a9.984 9.984 0 0 0-14.136 0"></svg:path>`,
})
export class CarbonDroneDeliveryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
