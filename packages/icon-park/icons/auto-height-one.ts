import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAutoHeightOneIcon],svg[icon-park-auto-height-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M7 42L7 6"></svg:path><svg:path stroke-linejoin="round" d="M18 13.9907L23.9954 8L30 14"></svg:path><svg:path stroke-linejoin="round" d="M30 34.0093L24.0046 40L18 34"></svg:path><svg:path stroke-linejoin="round" d="M24 8V40"></svg:path><svg:path d="M41 42L41 6"></svg:path></svg:g>`,
})
export class IconParkAutoHeightOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
