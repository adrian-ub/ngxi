import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFridgeVariantAlertIcon],svg[mdi-fridge-variant-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v15c0 1.11-.89 2-2 2v1h-2v-1h-2.5V2H15a2 2 0 0 1 2 2M5 2h4.5v19H7v1H5v-1a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2m3 8H5v4h3zm11-3v6h2V7zm0 10h2v-2h-2z"></svg:path>`,
})
export class MdiFridgeVariantAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
