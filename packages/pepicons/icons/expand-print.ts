import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsExpandPrintIcon],svg[pepicons-expand-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm-6 6h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Z" opacity=".8"></svg:path><svg:path d="M11.354 9.354a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708.708l-4 4Zm-6 6a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708.708l-4 4Z"></svg:path><svg:path d="M5 15.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1H5Z"></svg:path><svg:path d="M5.5 15a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0v4Zm10-6a.5.5 0 0 1-1 0V5a.5.5 0 0 1 1 0v4Z"></svg:path><svg:path d="M11 5.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4Z"></svg:path></svg:g>`,
})
export class PepiconsExpandPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
