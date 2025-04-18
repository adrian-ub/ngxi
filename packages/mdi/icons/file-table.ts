import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileTableIcon],svg[mdi-file-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-4 17H7v-2h3zm0-3H7v-2h3zm0-3H7v-2h3zm4 6h-3v-2h3zm0-3h-3v-2h3zm0-3h-3v-2h3zm-1-4V3.5L18.5 9z"></svg:path>`,
})
export class MdiFileTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
