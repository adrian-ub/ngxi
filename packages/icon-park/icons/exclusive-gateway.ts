import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkExclusiveGatewayIcon],svg[icon-park-exclusive-gateway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M22.7992 4.20102L4.4144 22.5858C3.63336 23.3668 3.63335 24.6332 4.4144 25.4142L22.7992 43.799C23.5802 44.58 24.8466 44.58 25.6276 43.799L44.0124 25.4142C44.7934 24.6332 44.7934 23.3668 44.0124 22.5858L25.6276 4.20102C24.8466 3.41997 23.5802 3.41997 22.7992 4.20102Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18.043 29.9871L30.0427 18.0249"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18.0527 18.0156L30.0337 29.9965"></svg:path></svg:g>`,
})
export class IconParkExclusiveGatewayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
