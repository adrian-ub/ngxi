import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSirenBrokenIcon],svg[solar-siren-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20 22v-6c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C16.2 8 14.8 8 12 8s-4.2 0-5.27.545a5 5 0 0 0-2.185 2.185c-.188.37-.311.778-.392 1.27M4 22v-6"></svg:path><svg:path stroke-linecap="round" d="M15 10.815c1.23 0 2.23.955 2.185 2.185M2 22h12m8 0h-4M12 2v3m9 0l-1.5 1.5M3 5l1.5 1.5"></svg:path><svg:path d="M13.5 17.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke-linecap="round" d="M12 19v3"></svg:path></svg:g>`,
})
export class SolarSirenBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
