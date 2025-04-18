import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laFileExcelIcon],svg[la-file-excel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.6l-.3-.3l-6-6l-.3-.3zm2 2h10v6h6v16H8zm12 1.4L22.6 9H20zM11 13l3.8 5.5L11 24h2.4l2.6-3.8l2.6 3.8H21l-3.8-5.5L21 13h-2.4L16 16.8L13.4 13z"></svg:path>`,
})
export class LaFileExcelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
