import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSleepingBrokenIcon],svg[solar-sleeping-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M2 6v12m20-2v2m-10-2v-4.643c0-.798 0-1.197.112-1.518a2 2 0 0 1 1.227-1.227c.321-.112.72-.112 1.518-.112c1.995 0 2.992 0 3.794.28a5 5 0 0 1 3.068 3.069M2 16h20"></svg:path><svg:path d="M9.5 11A2.5 2.5 0 1 0 7 13.5"></svg:path></svg:g>`,
})
export class SolarSleepingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
