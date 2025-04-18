import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsContractPrintIcon],svg[pepicons-contract-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 5.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5ZM7 11h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Z" opacity=".8"></svg:path><svg:path d="M5.354 15.354a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708.708l-4 4Z"></svg:path><svg:path d="M9.5 15a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0v4Z"></svg:path><svg:path d="M5 11.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1H5Zm6.354-2.146a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708.708l-4 4Z"></svg:path><svg:path d="M11 9.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4Z"></svg:path><svg:path d="M11.5 9a.5.5 0 0 1-1 0V5a.5.5 0 0 1 1 0v4Z"></svg:path></svg:g>`,
})
export class PepiconsContractPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
