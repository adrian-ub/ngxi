import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFileExplorerComposeIcon],svg[arcticons-file-explorer-compose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.213 34.25L24 44.5l17.787-10.25v-20.5L24 3.5L6.213 13.75zm.437-20.248l11.967 6.895M24 44V30.203m17.35-16.201l-11.967 6.895"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.967 24A5.96 5.96 0 0 1 24 29.955h0A5.96 5.96 0 0 1 18.033 24h0A5.96 5.96 0 0 1 24 18.045h0A5.96 5.96 0 0 1 29.967 24"></svg:path>`,
})
export class ArcticonsFileExplorerComposeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
