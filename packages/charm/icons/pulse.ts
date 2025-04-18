import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmPulseIcon],svg[charm-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.75 8.25h2.5l2-4.5l3.5 8.5l2-4h2.5"></svg:path>`,
})
export class CharmPulseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
