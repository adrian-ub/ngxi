import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBackIcon],svg[icon-park-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M44 40.8361C39.1069 34.8632 34.7617 31.4739 30.9644 30.6682C27.1671 29.8625 23.5517 29.7408 20.1182 30.303V41L4 23.5453L20.1182 7V17.167C26.4667 17.2172 31.8638 19.4948 36.3095 24C40.7553 28.5052 43.3187 34.1172 44 40.8361Z" clip-rule="evenodd"></svg:path>`,
})
export class IconParkBackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
