import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintDivisionOffIcon],svg[pepicons-print-division-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g opacity=".2"><svg:path d="M6.5 12.5a1.5 1.5 0 0 1 0-3h10a1.5 1.5 0 0 1 0 3z"></svg:path><svg:circle cx="11" cy="7" r="2"></svg:circle><svg:circle cx="11" cy="15" r="2"></svg:circle></svg:g><svg:path d="M5 10.5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1z"></svg:path><svg:path fill-rule="evenodd" d="M8.5 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m2 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-2 8a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m2 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPrintDivisionOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
