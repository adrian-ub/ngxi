import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCatalogIcon],svg[carbon-catalog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 2H8a2 2 0 0 0-2 2v4H4v2h2v5H4v2h2v5H4v2h2v4a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 26H8v-4h2v-2H8v-5h2v-2H8v-5h2V8H8V4h18Z"></svg:path><svg:path fill="currentColor" d="M14 8h8v2h-8zm0 7h8v2h-8zm0 7h8v2h-8z"></svg:path>`,
})
export class CarbonCatalogIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
