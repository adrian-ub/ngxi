import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSpreadsheetIcon],svg[mdi-spreadsheet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M19 3H5c-1.104 0-1.99.896-1.99 2l-.008 3H3v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 8h-8v8H9v-8H5V9h4V5h2v4h8v2z" fill="currentColor"></svg:path>`,
})
export class MdiSpreadsheetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
