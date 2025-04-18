import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMultiTriangularTwoIcon],svg[icon-park-multi-triangular-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 41H44L24 6L4 41Z"></svg:path><svg:path fill="#2F88FF" d="M34 23.5L24 41L14 23.5H34Z"></svg:path></svg:g>`,
})
export class IconParkMultiTriangularTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
