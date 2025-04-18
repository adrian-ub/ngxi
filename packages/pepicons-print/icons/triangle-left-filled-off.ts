import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintTriangleLeftFilledOffIcon],svg[pepicons-print-triangle-left-filled-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.48 11.864a1 1 0 0 1 0-1.728l9.016-5.259A1 1 0 0 1 17 5.741V16.26a1 1 0 0 1-1.504.864z" clip-rule="evenodd" opacity=".2"></svg:path><svg:path fill-rule="evenodd" d="M4 10a.5.5 0 0 1 .243-.429l10-6A.5.5 0 0 1 15 4v12a.5.5 0 0 1-.757.429l-10-6A.5.5 0 0 1 4 10m10 5.117V4.883L5.472 10z" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPrintTriangleLeftFilledOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
