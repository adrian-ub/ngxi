import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintTriangleDownFilledIcon],svg[pepicons-print-triangle-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.864 16.52a1 1 0 0 1-1.728 0L6.877 7.503A1 1 0 0 1 7.741 6H18.26a1 1 0 0 1 .864 1.504z" opacity=".2"></svg:path><svg:path d="M10 16a.5.5 0 0 1-.429-.243l-6-10A.5.5 0 0 1 4 5h12a.5.5 0 0 1 .429.757l-6 10A.5.5 0 0 1 10 16m5.117-10H4.883L10 14.528z"></svg:path></svg:g>`,
})
export class PepiconsPrintTriangleDownFilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
