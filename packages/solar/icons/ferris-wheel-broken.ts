import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarFerrisWheelBrokenIcon],svg[solar-ferris-wheel-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M14 11a2 2 0 1 1-2-2"></svg:path><svg:path d="M20.5 7.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-15-8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM12 2.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm0 16a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z"></svg:path><svg:path stroke-linecap="round" d="m18.5 22l-3.333-6M10.5 13l-5 9"></svg:path><svg:path d="M10.564 3.783a3 3 0 0 1 2.872 0l4.794 2.614a3 3 0 0 1 1.564 2.634v4.938a3 3 0 0 1-1.564 2.634l-4.794 2.614a3 3 0 0 1-2.872 0L5.77 16.603a3 3 0 0 1-1.564-2.634V9.03A3 3 0 0 1 5.77 6.397z"></svg:path></svg:g>`,
})
export class SolarFerrisWheelBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
