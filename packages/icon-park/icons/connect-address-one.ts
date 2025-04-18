import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkConnectAddressOneIcon],svg[icon-park-connect-address-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24"></svg:path><svg:path d="M24 14L24 42"></svg:path><svg:circle cx="24" cy="10" r="4" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkConnectAddressOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
