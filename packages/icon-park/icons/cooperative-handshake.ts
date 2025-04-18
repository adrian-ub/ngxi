import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCooperativeHandshakeIcon],svg[icon-park-cooperative-handshake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 40L36 28L32 32L28 36L24 40ZM24 40L4 20L16 8L24 16"></svg:path><svg:path d="M17 23L32 8L44 20L36 28L28 20L22 26L17 23ZM17 23L24 16"></svg:path><svg:path d="M28 36L25 33"></svg:path><svg:path d="M32 32L29 29"></svg:path></svg:g>`,
})
export class IconParkCooperativeHandshakeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
