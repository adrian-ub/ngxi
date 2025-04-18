import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsContractIcon],svg[pepicons-contract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.707 9.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414l-4 4Z"></svg:path><svg:path d="M11 10a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2h-4Z"></svg:path><svg:path d="M12 9a1 1 0 1 1-2 0V5a1 1 0 1 1 2 0v4Zm-6.293 6.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414l-4 4Z"></svg:path><svg:path d="M10 15a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0v4Z"></svg:path><svg:path d="M5 12a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2H5Z"></svg:path></svg:g>`,
})
export class PepiconsContractIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
