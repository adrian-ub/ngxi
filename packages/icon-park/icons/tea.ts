import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTeaIcon],svg[icon-park-tea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M11 18.1672C11 18.0749 11.0749 18 11.1672 18H34.8328C34.9251 18 35 18.0749 35 18.1672V30C35 36.6274 29.6274 42 23 42C16.3726 42 11 36.6274 11 30V18.1672Z"></svg:path><svg:path d="M35 30C38.3137 30 41 27.3137 41 24C41 20.6863 38.3137 18 35 18"></svg:path><svg:line x1="11" x2="11" y1="8" y2="11" stroke-linejoin="round"></svg:line><svg:line x1="35" x2="35" y1="8" y2="11" stroke-linejoin="round"></svg:line><svg:line x1="23" x2="23" y1="5" y2="11" stroke-linejoin="round"></svg:line></svg:g>`,
})
export class IconParkTeaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
