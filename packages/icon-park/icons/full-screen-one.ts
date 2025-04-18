import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFullScreenOneIcon],svg[icon-park-full-screen-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 6L16 15.8995"></svg:path><svg:path d="M6 41.8995L16 32"></svg:path><svg:path d="M42.0001 41.8995L32.1006 32"></svg:path><svg:path d="M41.8995 6L32 15.8995"></svg:path><svg:path d="M33 6H42V15"></svg:path><svg:path d="M42 33V42H33"></svg:path><svg:path d="M15 42H6V33"></svg:path><svg:path d="M6 15V6H15"></svg:path></svg:g>`,
})
export class IconParkFullScreenOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
