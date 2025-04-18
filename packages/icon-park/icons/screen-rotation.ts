import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkScreenRotationIcon],svg[icon-park-screen-rotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 24C4 35.0457 12.9543 44 24 44L19 39"></svg:path><svg:path d="M44 24C44 12.9543 35.0457 4 24 4L29 9"></svg:path><svg:path fill="#2F88FF" d="M30 41L7 18L18 7L41 30L30 41Z"></svg:path></svg:g>`,
})
export class IconParkScreenRotationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
