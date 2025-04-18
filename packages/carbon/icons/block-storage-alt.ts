import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBlockStorageAltIcon],svg[carbon-block-storage-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 20h-2v2h2v6H4v-6h2v-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2"></svg:path><svg:circle cx="7" cy="25" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15 20H8v-7h7zm-5-2h3v-3h-3zm14 2h-7v-7h7zm-5-2h3v-3h-3zm-4-7H8V4h7zm-5-2h3V6h-3zm14 2h-7V4h7zm-5-2h3V6h-3z"></svg:path>`,
})
export class CarbonBlockStorageAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
