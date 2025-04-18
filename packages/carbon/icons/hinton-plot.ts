import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonHintonPlotIcon],svg[carbon-hinton-plot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M2 2h4v4H2z" fill="currentColor"></svg:path><svg:path d="M10 2h4v4h-4z" fill="currentColor"></svg:path><svg:path d="M18 2h4v4h-4z" fill="currentColor"></svg:path><svg:path d="M26 2h4v4h-4z" fill="currentColor"></svg:path><svg:path d="M2 10h4v4H2z" fill="currentColor"></svg:path><svg:path d="M10 10h4v4h-4z" fill="currentColor"></svg:path><svg:path d="M18 10h4v4h-4z" fill="currentColor"></svg:path><svg:path d="M26 10h4v4h-4z" fill="currentColor"></svg:path><svg:path d="M2 18h4v4H2z" fill="currentColor"></svg:path><svg:path d="M10 18h4v4h-4z" fill="currentColor"></svg:path><svg:path d="M18 18h4v4h-4z" fill="currentColor"></svg:path><svg:path d="M26 18h4v4h-4z" fill="currentColor"></svg:path><svg:path d="M2 26h4v4H2z" fill="currentColor"></svg:path><svg:path d="M10 26h4v4h-4z" fill="currentColor"></svg:path><svg:path d="M18 26h4v4h-4z" fill="currentColor"></svg:path><svg:path d="M26 26h4v4h-4z" fill="currentColor"></svg:path>`,
})
export class CarbonHintonPlotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
