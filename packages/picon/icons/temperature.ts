import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTemperatureIcon],svg[picon-temperature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h1l1 1H4v1l1 1H4v1c3 2.5-4 2.5-1 0M0 6l3 1l3-1l2 1v1L6 7L3 8L0 7"></svg:path>`,
})
export class PiconTemperatureIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
