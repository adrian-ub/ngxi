import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsLocationCrosshairsIcon],svg[meteor-icons-location-crosshairs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M23 12h-3M4 12H1m11-8V1m0 22v-3"></svg:path><svg:circle cx="12" cy="12" r="8"></svg:circle><svg:circle cx="12" cy="12" r="3"></svg:circle></svg:g>`,
})
export class MeteorIconsLocationCrosshairsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
