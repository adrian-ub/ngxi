import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignVerifyIcon],svg[tdesign-verify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v18H1zm2 2v14h18V5zm12.5 4.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2m2.4 2.8a3 3 0 1 0-4.8 0a4 4 0 0 0-1.6 3.2v1h2v-1a2 2 0 1 1 4 0v1h2v-1c0-1.309-.628-2.47-1.6-3.2M5 9h4.5v2H5zm0 4h4.5v2H5z"></svg:path>`,
})
export class TdesignVerifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
