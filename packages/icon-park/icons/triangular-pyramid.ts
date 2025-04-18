import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTriangularPyramidIcon],svg[icon-park-triangular-pyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44L42 35L24 4L6 35L24 44Z"></svg:path><svg:path d="M24 44V4"></svg:path></svg:g>`,
})
export class IconParkTriangularPyramidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
