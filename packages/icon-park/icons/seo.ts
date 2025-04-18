import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSeoIcon],svg[icon-park-seo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="40" height="32" x="4" y="8" fill="#2F88FF" stroke="#000" rx="1.633"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M16 18.9479C14 15.9999 10.4978 17.9375 10.7489 20.9687C11 23.9999 15 23.9999 15.2498 27.0311C15.4997 30.0623 12 31.9999 10 29.0519"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M26 18H22V31H26"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M22 25H26"></svg:path><svg:rect width="6" height="13" x="32" y="18" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect></svg:g>`,
})
export class IconParkSeoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
