import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarScissorsSquareBrokenIcon],svg[solar-scissors-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14.5 17.1L8 6m10 10.2c0 .994-.84 1.8-1.875 1.8s-1.875-.806-1.875-1.8s.84-1.8 1.875-1.8S18 15.206 18 16.2Zm-8.5.9L16 6M6 16.2c0 .994.84 1.8 1.875 1.8s1.875-.806 1.875-1.8s-.84-1.8-1.875-1.8S6 15.206 6 16.2Z"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarScissorsSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
