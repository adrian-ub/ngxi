import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMultiTriangularThreeIcon],svg[icon-park-multi-triangular-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 41H44L24 6L4 41Z"></svg:path><svg:path d="M24 30L24 6"></svg:path><svg:path d="M24 30L4 41"></svg:path><svg:path d="M24 30L44 41"></svg:path></svg:g>`,
})
export class IconParkMultiTriangularThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
