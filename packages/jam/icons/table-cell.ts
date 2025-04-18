import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamTableCellIcon],svg[jam-table-cell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6h4V2H2zm0 2v4h4V8zm10-2V2H8v4zm0 2H8v4h4zM2 0h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2"></svg:path>`,
})
export class JamTableCellIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
