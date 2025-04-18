import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmPowerIcon],svg[charm-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 1.75v6.5m4.25-5s2 1.298 2 4.75a6.25 6.25 0 1 1-12.5 0c0-3.452 2-4.75 2-4.75"></svg:path>`,
})
export class CharmPowerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
