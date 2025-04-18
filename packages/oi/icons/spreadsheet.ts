import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiSpreadsheetIcon],svg[oi-spreadsheet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.75 0C.34 0 0 .34 0 .75v5.5c0 .41.34.75.75.75h6.5c.41 0 .75-.34.75-.75V.75C8 .34 7.66 0 7.25 0zM1 1h1v1H1zm2 0h4v1H3zM1 3h1v1H1zm2 0h4v1H3zM1 5h1v1H1zm2 0h4v1H3z"></svg:path>`,
})
export class OiSpreadsheetIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
