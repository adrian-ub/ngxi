import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFolderDetailsIcon],svg[carbon-folder-details-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20h14v2H16zm0 4h14v2H16zm0 4h7v2h-7z"></svg:path><svg:path fill="currentColor" d="M14 26H4V6h7.17l3.42 3.41l.58.59H28v8h2v-8a2 2 0 0 0-2-2H16l-3.41-3.41A2 2 0 0 0 11.17 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10Z"></svg:path>`,
})
export class CarbonFolderDetailsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
