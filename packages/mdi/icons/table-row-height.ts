import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTableRowHeightIcon],svg[mdi-table-row-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m0 4v3h5V9zm7 0v3h5V9zm-7 5v3h5v-3zm7 0v3h5v-3zm13 0V7h-4v2h2v3h-2v2z"></svg:path>`,
})
export class MdiTableRowHeightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
