import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWashingMachineBrokenIcon],svg[solar-washing-machine-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6 22v-1m12 1v-1M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v3c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3.108 18.765 3.01 17.114 3 14m0-5h9m9 0h-5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M15 15a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.5 5.5h3"></svg:path><svg:path fill="currentColor" d="M15.5 5.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SolarWashingMachineBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
