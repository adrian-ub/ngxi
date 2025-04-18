import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilTriangleUpIcon],svg[pepicons-pencil-triangle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 4a.5.5 0 0 1 .429.243l6 10A.5.5 0 0 1 16 15H4a.5.5 0 0 1-.429-.757l6-10A.5.5 0 0 1 10 4M4.883 14h10.234L10 5.472z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPencilTriangleUpIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
