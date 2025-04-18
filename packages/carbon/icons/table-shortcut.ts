import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTableShortcutIcon],svg[carbon-table-shortcut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18v2h5.586L3 27.586L4.414 29L12 21.414V27h2v-9z"></svg:path><svg:path fill="currentColor" d="M27 3H5a2 2 0 0 0-2 2v10h2v-4h10v4h2v-4h10v7H17v2h10v7H17v2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 6H5V5h22Z"></svg:path>`,
})
export class CarbonTableShortcutIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
