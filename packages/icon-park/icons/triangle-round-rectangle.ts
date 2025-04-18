import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTriangleRoundRectangleIcon],svg[icon-park-triangle-round-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 29H6V43H20V29Z"></svg:path><svg:path d="M24 4L34 21H14L24 4Z"></svg:path><svg:path d="M36 44C40.4183 44 44 40.4183 44 36C44 31.5817 40.4183 28 36 28C31.5817 28 28 31.5817 28 36C28 40.4183 31.5817 44 36 44Z"></svg:path></svg:g>`,
})
export class IconParkTriangleRoundRectangleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
