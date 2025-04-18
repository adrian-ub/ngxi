import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShippingCenterIcon],svg[hugeicons-shipping-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:rect width="20" height="6" x="2" y="15" rx="3"></svg:rect><svg:path d="M6 9c0-2.828 0-4.243.879-5.121C7.757 3 9.172 3 12 3s4.243 0 5.121.879C18 4.757 18 6.172 18 9s0 4.243-.879 5.121C16.243 15 14.828 15 12 15s-4.243 0-5.121-.879C6 13.243 6 11.828 6 9m5.996 9h.008M7 18h.009m9.982 0H17M10.5 6h3"></svg:path></svg:g>`,
})
export class HugeiconsShippingCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
