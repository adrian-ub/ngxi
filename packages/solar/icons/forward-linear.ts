import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarForwardLinearIcon],svg[solar-forward-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 12l-5-5m5 5l-5 5m5-5h-10c-1.667 0-5 1-5 5"></svg:path>`,
})
export class SolarForwardLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
