import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCreditCardIcon],svg[healthicons-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 10a3 3 0 0 0-3 3v4h40v-4a3 3 0 0 0-3-3zm37 13H4v12a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsCreditCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
