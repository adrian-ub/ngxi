import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintTriangleUpFilledIcon],svg[pepicons-print-triangle-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.636 5.98a1 1 0 0 1 1.728 0l5.259 9.016a1 1 0 0 1-.864 1.504H6.24a1 1 0 0 1-.864-1.504z" opacity=".2"></svg:path><svg:path d="M10 4a.5.5 0 0 1 .429.243l6 10A.5.5 0 0 1 16 15H4a.5.5 0 0 1-.429-.757l6-10A.5.5 0 0 1 10 4M4.883 14h10.234L10 5.472z"></svg:path></svg:g>`,
})
export class PepiconsPrintTriangleUpFilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
