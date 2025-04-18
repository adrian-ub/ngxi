import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileTableBoxOutlineIcon],svg[mdi-file-table-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2m0 16H5V5h14zM9 18H6v-2h3zm4 0h-3v-2h3zm-4-3H6v-2h3zm4 0h-3v-2h3zm-4-3H6v-2h3zm4 0h-3v-2h3z"></svg:path>`,
})
export class MdiFileTableBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
