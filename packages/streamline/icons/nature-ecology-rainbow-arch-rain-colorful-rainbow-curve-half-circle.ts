import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNatureEcologyRainbowArchRainColorfulRainbowCurveHalfCircleIcon],svg[streamline-nature-ecology-rainbow-arch-rain-colorful-rainbow-curve-half-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 10.25a6.5 6.5 0 0 1 13 0"></svg:path><svg:path d="M3 10.25a4 4 0 0 1 8 0"></svg:path><svg:path d="M5.5 10.25a1.5 1.5 0 0 1 3 0"></svg:path></svg:g>`,
})
export class StreamlineNatureEcologyRainbowArchRainColorfulRainbowCurveHalfCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
