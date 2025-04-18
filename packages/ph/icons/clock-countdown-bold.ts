import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phClockCountdownBoldIcon],svg[ph-clock-countdown-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 137A108.13 108.13 0 1 1 119 20a12 12 0 0 1 2 24a84.12 84.12 0 1 0 91 91a12 12 0 1 1 24 2M116 76v52a12 12 0 0 0 12 12h52a12 12 0 0 0 0-24h-40V76a12 12 0 0 0-24 0m92 20a16 16 0 1 0-16-16a16 16 0 0 0 16 16m-32-32a16 16 0 1 0-16-16a16 16 0 0 0 16 16"></svg:path>`,
})
export class PhClockCountdownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
