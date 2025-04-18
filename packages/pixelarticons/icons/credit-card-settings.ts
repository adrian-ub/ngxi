import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCreditCardSettingsIcon],svg[pixelarticons-credit-card-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H2v16h18v-2H4v-6h16V8H4V6h16zm0 0h2v16h-2zm-7 18h-2v2h2zm2 0h2v2h-2zm-6 0H7v2h2z"></svg:path>`,
})
export class PixelarticonsCreditCardSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
