import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCooperativeHandshakeIcon],svg[icon-park-outline-cooperative-handshake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m24 40l12-12l-4 4l-4 4zm0 0L4 20L16 8l8 8"></svg:path><svg:path d="M17 23L32 8l12 12l-8 8l-8-8l-6 6zm0 0l7-7m4 20l-3-3m7-1l-3-3"></svg:path></svg:g>`,
})
export class IconParkOutlineCooperativeHandshakeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
