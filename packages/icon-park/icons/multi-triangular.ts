import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMultiTriangularIcon],svg[icon-park-multi-triangular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 6L4 41H44L24 6Z"></svg:path><svg:path d="M39 32.25L34 41"></svg:path><svg:path d="M29 14.75L14 41"></svg:path><svg:path d="M34 23.5L24 41"></svg:path></svg:g>`,
})
export class IconParkMultiTriangularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
