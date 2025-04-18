import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPulse2LinearIcon],svg[solar-pulse-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 15h3c.634 0 .95 0 1.234.121c.283.122.501.351.938.81l1.142 1.199c.384.403.576.605.81.59c.234-.017.397-.242.724-.693l3.63-5.01c.34-.47.51-.704.75-.715c.24-.01.431.207.813.643l1.777 2.03c.441.505.662.757.957.891c.296.134.63.134 1.3.134H22"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarPulse2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
