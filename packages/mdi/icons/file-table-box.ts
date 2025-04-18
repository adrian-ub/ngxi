import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileTableBoxIcon],svg[mdi-file-table-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.11 0-2 .89-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2M9 18H6v-2h3zm0-3H6v-2h3zm0-3H6v-2h3zm4 6h-3v-2h3zm0-3h-3v-2h3zm0-3h-3v-2h3z"></svg:path>`,
})
export class MdiFileTableBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
