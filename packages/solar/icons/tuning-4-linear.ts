import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTuning4LinearIcon],svg[solar-tuning-4-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="2" transform="rotate(-90 12 12)"></svg:circle><svg:circle cx="10" cy="20" r="2" transform="rotate(-90 10 20)"></svg:circle><svg:circle cx="2" cy="2" r="2" transform="matrix(0 -1 -1 0 16 6)"></svg:circle><svg:path stroke-linecap="round" d="M16 12h3m-5 8h5M10 4H5m0 8h3m-3 8h1M19 4h-1"></svg:path></svg:g>`,
})
export class SolarTuning4LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
