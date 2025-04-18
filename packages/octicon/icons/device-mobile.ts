import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconDeviceMobileIcon],svg[octicon-device-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M9 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM5 15.3c-.72 0-1.3-.58-1.3-1.3c0-.72.58-1.3 1.3-1.3c.72 0 1.3.58 1.3 1.3c0 .72-.58 1.3-1.3 1.3zM9 12H1V2h8v10z" fill="currentColor"></svg:path>`,
})
export class OcticonDeviceMobileIcon {
  readonly viewBox = input("0 0 10 16")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
