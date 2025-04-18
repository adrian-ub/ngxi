import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkConvergingGatewayIcon],svg[icon-park-converging-gateway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M22.7992 4.20102L4.4144 22.5858C3.63336 23.3668 3.63335 24.6332 4.4144 25.4142L22.7992 43.799C23.5802 44.58 24.8466 44.58 25.6276 43.799L44.0124 25.4142C44.7934 24.6332 44.7934 23.3668 44.0124 22.5858L25.6276 4.20102C24.8466 3.41997 23.5802 3.41997 22.7992 4.20102Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24.0428 15.5342V32.4778"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15.5713 24.0059H32.5149"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M30.0336 18.0151L18.0527 29.9961"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18.0527 18.0151L30.0337 29.996"></svg:path></svg:g>`,
})
export class IconParkConvergingGatewayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
