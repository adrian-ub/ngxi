import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsSpreadsheetIcon],svg[bxs-spreadsheet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2m7 2h8v2h-8zm0 4h8v2h-8zm0 4h8v2h-8zM6 7h2v2H6zm0 4h2v2H6zm0 4h2v2H6z"></svg:path>`,
})
export class BxsSpreadsheetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
