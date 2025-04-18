import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFolderSharedIcon],svg[carbon-folder-shared-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 8H16l-3.41-3.41A2 2 0 0 0 11.17 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2m-6 18h-8v-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Zm6 0h-4v-1a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v1H4V6h7.17l3.42 3.41l.58.59H28Z"></svg:path><svg:path fill="currentColor" d="M14 17a4 4 0 1 0 4-4a4 4 0 0 0-4 4m4-2a2 2 0 1 1-2 2a2 2 0 0 1 2-2"></svg:path>`,
})
export class CarbonFolderSharedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
