import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCreditCardOutlineIcon],svg[healthicons-credit-card-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 38a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v22a3 3 0 0 1-3 3zM6 13a1 1 0 0 1 1-1h34a1 1 0 0 1 1 1v3H6zm1 23a1 1 0 0 1-1-1V24h36v11a1 1 0 0 1-1 1z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsCreditCardOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
