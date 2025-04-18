import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintCircleFilledOffIcon],svg[pepicons-print-circle-filled-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="12" cy="11" r="6" opacity=".2"></svg:circle><svg:path fill-rule="evenodd" d="M4 10a6 6 0 1 0 12 0a6 6 0 0 0-12 0m11 0a5 5 0 1 1-10 0a5 5 0 0 1 10 0" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPrintCircleFilledOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
