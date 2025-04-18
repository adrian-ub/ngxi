import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMilkOneIcon],svg[icon-park-milk-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="26" height="22" x="6" y="22" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#fff" d="M14 38V28L19 34L24 28V38"></svg:path><svg:path stroke="#000" d="M42 20L30 10"></svg:path><svg:path stroke="#000" d="M20 6V12L30 10V4L20 6Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M32 22L42 20V41L32 44V22Z"></svg:path><svg:path stroke="#000" d="M19.4815 12L6 22H32L19.4815 12Z"></svg:path></svg:g>`,
})
export class IconParkMilkOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
