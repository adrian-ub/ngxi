import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMessengerLogoBoldIcon],svg[ph-messenger-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m184.49 120.49l-32 32a12 12 0 0 1-17 0L112 129l-23.51 23.49a12 12 0 0 1-17-17l32-32a12 12 0 0 1 17 0L144 127l23.51-23.52a12 12 0 0 1 17 17ZM236 128a108 108 0 0 1-157.23 96.15L46.34 235A20 20 0 0 1 21 209.66l10.81-32.43A108 108 0 1 1 236 128m-24 0a84 84 0 1 0-156.73 42.05a12 12 0 0 1 1 9.82l-9.93 29.79l29.79-9.93a12.1 12.1 0 0 1 3.8-.62a12 12 0 0 1 6 1.62A84 84 0 0 0 212 128"></svg:path>`,
})
export class PhMessengerLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
