import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundBedtimeIcon],svg[ic-round-bedtime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.65 3.46c.27-.71-.36-1.45-1.12-1.34c-5.52.8-9.47 6.07-8.34 11.88c.78 4.02 4.09 7.21 8.14 7.87c3.74.61 7.16-.87 9.32-3.44c.48-.57.19-1.48-.55-1.62c-6.02-1.15-9.68-7.54-7.45-13.35"></svg:path>`,
})
export class IcRoundBedtimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
