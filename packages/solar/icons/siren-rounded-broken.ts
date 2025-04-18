import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSirenRoundedBrokenIcon],svg[solar-siren-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20 22v-6a8 8 0 0 0-14.93-4M4 22v-6"></svg:path><svg:path stroke-linecap="round" d="M14.29 11.5a4 4 0 0 1 2.21 2.21M12 2v3m9 1l-1.5 1.5M3 6l1.5 1.5"></svg:path><svg:path d="M13.5 17.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke-linecap="round" d="M12 19v3M2 22h12m8 0h-4"></svg:path></svg:g>`,
})
export class SolarSirenRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
