import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLogoDeliciousIcon],svg[carbon-logo-delicious-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16h12v12H4zM16 4h12v12H16z"></svg:path>`,
})
export class CarbonLogoDeliciousIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
