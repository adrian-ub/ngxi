import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFridgeAlertIcon],svg[mdi-fridge-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h10a2 2 0 0 1 2 2v5H3V4c0-1.1.9-2 2-2m12 17c0 1.11-.89 2-2 2v1h-2v-1H7v1H5v-1a2 2 0 0 1-2-2v-9h14zM6 5v2h2V5zm0 7v3h2v-3zm13 3h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class MdiFridgeAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
