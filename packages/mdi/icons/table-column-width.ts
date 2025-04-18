import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTableColumnWidthIcon],svg[mdi-table-column-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2m0 4v3h6v-3zm8 0v3h6v-3zm-8 5v3h6v-3zm8 0v3h6v-3zM11 2h10v4h-2V4h-6v2h-2z"></svg:path>`,
})
export class MdiTableColumnWidthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
