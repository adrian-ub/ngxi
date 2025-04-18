import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileTableOutlineIcon],svg[mdi-file-table-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm4 18H6V4h7v5h5zm-8-7H7v-2h3zm4 0h-3v-2h3zm-4 3H7v-2h3zm4 0h-3v-2h3zm-4 3H7v-2h3zm4 0h-3v-2h3z"></svg:path>`,
})
export class MdiFileTableOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
