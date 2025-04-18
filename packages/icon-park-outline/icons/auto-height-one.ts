import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAutoHeightOneIcon],svg[icon-park-outline-auto-height-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path d="M7 42V6"></svg:path><svg:path stroke-linejoin="round" d="M18 13.99L23.995 8L30 14m0 20.01L24.005 40L18 34m6-26v32"></svg:path><svg:path d="M41 42V6"></svg:path></svg:g>`,
})
export class IconParkOutlineAutoHeightOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
