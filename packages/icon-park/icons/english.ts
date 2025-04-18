import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEnglishIcon],svg[icon-park-english-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M13 31V17H21"></svg:path><svg:path stroke="#fff" d="M13 24H20.5"></svg:path><svg:path stroke="#fff" d="M13 31H20.5"></svg:path><svg:path stroke="#fff" d="M26 31L26 19"></svg:path><svg:path stroke="#fff" d="M26 31L26 24.5C26 22.0147 28.0147 20 30.5 20V20C32.9853 20 35 22.0147 35 24.5L35 31"></svg:path></svg:g>`,
})
export class IconParkEnglishIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
