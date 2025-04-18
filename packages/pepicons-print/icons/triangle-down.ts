import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintTriangleDownIcon],svg[pepicons-print-triangle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.75 14.014L15.528 7.5H7.972zm-.865 2.495a1 1 0 0 0 1.73 0l5.514-9.507a1 1 0 0 0-.865-1.502H6.236a1 1 0 0 0-.865 1.502z" opacity=".2"></svg:path><svg:path d="M10 16a.5.5 0 0 1-.429-.243l-6-10A.5.5 0 0 1 4 5h12a.5.5 0 0 1 .429.757l-6 10A.5.5 0 0 1 10 16m5.117-10H4.883L10 14.528z"></svg:path></svg:g>`,
})
export class PepiconsPrintTriangleDownIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
