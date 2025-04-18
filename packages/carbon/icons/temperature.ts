import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTemperatureIcon],svg[carbon-temperature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17.26V6a4 4 0 0 0-8 0v11.26a7 7 0 1 0 8 0M9 4a2 2 0 0 1 2 2v7H7V6a2 2 0 0 1 2-2m0 24a5 5 0 0 1-2.5-9.33l.5-.28V15h4v3.39l.5.28A5 5 0 0 1 9 28M20 4h10v2H20zm0 6h7v2h-7zm0 6h10v2H20zm0 6h7v2h-7z"></svg:path>`,
})
export class CarbonTemperatureIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
