import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamTableCellMergeIcon],svg[jam-table-cell-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2H2v2h2zm2 0v2h2V2h2v2h2V2zm6 4H6v6h6zm-8 6v-2H2v2zM2 8h2V6H2zm0-8h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2"></svg:path>`,
})
export class JamTableCellMergeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
