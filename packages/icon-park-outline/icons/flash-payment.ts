import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFlashPaymentIcon],svg[icon-park-outline-flash-payment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M31 4H16l-6 23h8l-4 17l26-28H28z"></svg:path><svg:path d="m21 11l-2 8"></svg:path></svg:g>`,
})
export class IconParkOutlineFlashPaymentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
