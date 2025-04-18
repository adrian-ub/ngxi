import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsMediaSpreadsheetIcon],svg[dashicons-media-spreadsheet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2l4 4v12H4V2zm-1 4V3H5v3zM8 8V7H5v1zm3 0V7H9v1zm4 0V7h-3v1zm-7 2V9H5v1zm3 0V9H9v1zm4 0V9h-3v1zm-7 2v-1H5v1zm3 0v-1H9v1zm4 0v-1h-3v1zm-7 2v-1H5v1zm3 0v-1H9v1zm4 0v-1h-3v1zm-7 2v-1H5v1zm3 0v-1H9v1z"></svg:path>`,
})
export class DashiconsMediaSpreadsheetIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
