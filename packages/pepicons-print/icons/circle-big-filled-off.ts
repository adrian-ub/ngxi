import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintCircleBigFilledOffIcon],svg[pepicons-print-circle-big-filled-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 11a9 9 0 1 1-18 0a9 9 0 0 1 18 0" opacity=".2"></svg:path><svg:path fill-rule="evenodd" d="M10 1.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17M.5 10a9.5 9.5 0 1 1 19 0a9.5 9.5 0 0 1-19 0" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPrintCircleBigFilledOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
