import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintTriangleLeftIcon],svg[pepicons-print-triangle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="m7.986 10.75l6.514 3.778V6.972zm-2.495-.865a1 1 0 0 0 0 1.73l9.507 5.514a1 1 0 0 0 1.502-.865V5.236a1 1 0 0 0-1.502-.865z" opacity=".2"></svg:path><svg:path d="M4 10a.5.5 0 0 1 .243-.429l10-6A.5.5 0 0 1 15 4v12a.5.5 0 0 1-.757.429l-10-6A.5.5 0 0 1 4 10m10 5.117V4.883L5.472 10z"></svg:path></svg:g>`,
})
export class PepiconsPrintTriangleLeftIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
