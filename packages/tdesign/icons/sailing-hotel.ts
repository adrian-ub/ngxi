import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSailingHotelIcon],svg[tdesign-sailing-hotel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 .811l1.171.204c3.987.693 6.584 2.801 8.154 5.48c.974 1.661 1.538 3.519 1.822 5.352c.28 1.812.29 3.624.135 5.248c-.139 1.463-.416 2.819-.774 3.905H21v2H4v-2h3zM9 21h6.376c.299-.708.588-1.747.78-3H9zm0-5h7.357c.049-.966.03-1.98-.077-3H9zm0-5h6.95a12.8 12.8 0 0 0-1.079-3H9zm0-5h4.513C12.426 4.77 10.961 3.793 9 3.248z"></svg:path>`,
})
export class TdesignSailingHotelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
