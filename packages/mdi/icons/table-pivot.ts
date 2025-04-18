import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTablePivotIcon],svg[mdi-table-pivot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 15h-2v3c0 1.11-.89 2-2 2h-3v2l-3-3l3-3v2h3v-3h-2l3-3zm0-11v4c0 1.1-.9 2-2 2H10v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2M4 8h4V4H4zm0 2v4h4v-4zm4 10v-4H4v4zm6-12V4h-4v4zm6-4h-4v4h4z"></svg:path>`,
})
export class MdiTablePivotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
