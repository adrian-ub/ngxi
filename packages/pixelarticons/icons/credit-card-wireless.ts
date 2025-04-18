import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCreditCardWirelessIcon],svg[pixelarticons-credit-card-wireless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2H8v2H6v2h2V4h8v2h2V4h-2zM8 8h2v2H8zm6 0V6h-4v2zm0 0h2v2h-2zM4 11h16v12H4zm14 10v-3H6v3zm0-6v-2H6v2z"></svg:path>`,
})
export class PixelarticonsCreditCardWirelessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
