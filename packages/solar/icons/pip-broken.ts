import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPipBrokenIcon],svg[solar-pip-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M11 21h-1c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13v-2m20 0c0-3.771 0-5.657-1.172-6.828S17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172C2.518 4.825 2.229 5.7 2.102 7"></svg:path><svg:path d="M13 17c0-1.886 0-2.828.586-3.414S15.114 13 17 13h1c1.886 0 2.828 0 3.414.586S22 15.114 22 17s0 2.828-.586 3.414S19.886 21 18 21h-1c-1.886 0-2.828 0-3.414-.586S13 18.886 13 17Z"></svg:path></svg:g>`,
})
export class SolarPipBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
