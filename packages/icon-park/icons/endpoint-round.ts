import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEndpointRoundIcon],svg[icon-park-endpoint-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 24L26 24"></svg:path><svg:circle cx="22" cy="24" r="3"></svg:circle><svg:path d="M42 40H22C13.1634 40 6 32.8366 6 24C6 15.1634 13.1634 8 22 8H42"></svg:path></svg:g>`,
})
export class IconParkEndpointRoundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
