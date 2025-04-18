import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosGoogleTagManagerIcon],svg[logos-google-tag-manager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8AB4F8" d="m150.262 245.516l-44.437-43.331l95.433-97.454l46.007 45.091z"></svg:path><svg:path fill="#4285F4" d="M150.45 53.938L106.176 8.731L9.36 104.629c-12.48 12.48-12.48 32.713 0 45.207l95.36 95.986l45.09-42.182l-72.654-76.407z"></svg:path><svg:path fill="#8AB4F8" d="m246.625 105.37l-96-96c-12.494-12.494-32.756-12.494-45.25 0s-12.495 32.757 0 45.252l96 96c12.494 12.494 32.756 12.494 45.25 0s12.495-32.757 0-45.251"></svg:path><svg:circle cx="127.265" cy="224.731" r="31.273" fill="#246FDB"></svg:circle>`,
})
export class LogosGoogleTagManagerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
