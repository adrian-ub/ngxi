import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkQuadrangularPyramidIcon],svg[icon-park-quadrangular-pyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 24L24 4L4 24L24 44L44 24Z"></svg:path><svg:path d="M4 24H44"></svg:path><svg:path d="M24 44L18 24L24 4"></svg:path><svg:path d="M24 44L30 24L24 4"></svg:path></svg:g>`,
})
export class IconParkQuadrangularPyramidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
