import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMultiTriangularTwoIcon],svg[icon-park-outline-multi-triangular-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 41h40L24 6z"></svg:path><svg:path d="M34 23.5L24 41L14 23.5z"></svg:path></svg:g>`,
})
export class IconParkOutlineMultiTriangularTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
