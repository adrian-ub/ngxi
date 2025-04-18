import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsDivisionPrintIcon],svg[pepicons-division-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g opacity=".8"><svg:path d="M6.5 12.5a1.5 1.5 0 0 1 0-3h10a1.5 1.5 0 0 1 0 3h-10Z"></svg:path><svg:circle cx="11" cy="7" r="2"></svg:circle><svg:circle cx="11" cy="15" r="2"></svg:circle></svg:g><svg:path d="M5 10.5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1H5Z"></svg:path><svg:path fill-rule="evenodd" d="M8.5 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0Zm2 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm-2 8a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0Zm2 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsDivisionPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
