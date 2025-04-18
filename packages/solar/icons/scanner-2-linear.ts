import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarScanner2LinearIcon],svg[solar-scanner-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6 13s1.8-2 6-2s6 2 6 2m4 1c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22m-4 0c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14m8-12C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10m12-8c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10"></svg:path>`,
})
export class SolarScanner2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
