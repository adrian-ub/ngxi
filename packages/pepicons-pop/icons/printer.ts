import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopPrinterIcon],svg[pepicons-pop-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 3v4a1 1 0 0 1-2 0V3c0-1.068.776-2 1.833-2h8.334C15.224 1 16 1.932 16 3v4a1 1 0 1 1-2 0V3z"></svg:path><svg:path d="M4 6h12a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3"></svg:path><svg:path d="M6 16.8V12a1 1 0 1 0-2 0v4.8c0 1.154.727 2.2 1.833 2.2h8.334C15.273 19 16 17.954 16 16.8V12a1 1 0 1 0-2 0v4.8a.7.7 0 0 1-.029.2H6.029A.7.7 0 0 1 6 16.8"></svg:path><svg:path d="M7 16a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1zm0-2a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1z"></svg:path></svg:g>`,
})
export class PepiconsPopPrinterIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
