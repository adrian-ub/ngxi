import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTuning2BrokenIcon],svg[solar-tuning-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9.5 14a3 3 0 1 1 0 6a3 3 0 0 1 0-6Zm5-10a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"></svg:path><svg:path stroke-linecap="round" d="M11 7H6M3 7H2m11 10h5m3 0h1M2 17h4M22 7h-4"></svg:path></svg:g>`,
})
export class SolarTuning2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
