import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHangerOneIcon],svg[icon-park-hanger-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 4L24 44"></svg:path><svg:path d="M32 4L24 10"></svg:path><svg:path d="M16 9L24 15"></svg:path><svg:path d="M16 20L24 26"></svg:path><svg:path d="M32 15L24 21"></svg:path><svg:path d="M30 44H18"></svg:path></svg:g>`,
})
export class IconParkHangerOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
