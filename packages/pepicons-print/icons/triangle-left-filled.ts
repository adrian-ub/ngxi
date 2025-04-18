import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintTriangleLeftFilledIcon],svg[pepicons-print-triangle-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.48 11.864a1 1 0 0 1 0-1.728l9.016-5.259A1 1 0 0 1 17 5.741V16.26a1 1 0 0 1-1.504.864z" opacity=".2"></svg:path><svg:path d="M4 10a.5.5 0 0 1 .243-.429l10-6A.5.5 0 0 1 15 4v12a.5.5 0 0 1-.757.429l-10-6A.5.5 0 0 1 4 10m10 5.117V4.883L5.472 10z"></svg:path></svg:g>`,
})
export class PepiconsPrintTriangleLeftFilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
