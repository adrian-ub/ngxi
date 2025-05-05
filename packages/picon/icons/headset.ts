import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHeadsetIcon],svg[picon-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4v2H0V4c0-5.5 8-5.5 8 0v4H4V7h3V6H5V4h2c0-4-6-4-6 0"></svg:path>`,
})
export class PiconHeadsetIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
