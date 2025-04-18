import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laWeightHangingIcon],svg[la-weight-hanging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5c-1.645 0-3 1.355-3 3c0 .352.074.684.188 1h-5l-.157.813l-3 15l-.031.093V27h22v-2.094l-.031-.093l-3-15L23.812 9h-5A3 3 0 0 0 19 8c0-1.645-1.355-3-3-3m0 2c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1m-6.188 4h12.376L25 25H7z"></svg:path>`,
})
export class LaWeightHangingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
