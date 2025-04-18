import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAsteriskKeyIcon],svg[icon-park-asterisk-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M24 16V32"></svg:path><svg:path stroke="#fff" d="M17.447 19.4114L30.5535 28.5886"></svg:path><svg:path stroke="#fff" d="M30.5532 19.4114L17.4468 28.5886"></svg:path></svg:g>`,
})
export class IconParkAsteriskKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
