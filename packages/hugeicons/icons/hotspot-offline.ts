import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHotspotOfflineIcon],svg[hugeicons-hotspot-offline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 14a2 2 0 1 1-2-2m-8 8.001A9.96 9.96 0 0 1 2 14a9.99 9.99 0 0 1 3.999-8M8.5 4.63A10 10 0 0 1 12 4c5.523 0 10 4.477 10 10c0 1.231-.223 2.41-.63 3.5M7.5 18A6.04 6.04 0 0 1 6 14a6.02 6.02 0 0 1 2.635-5m7.653 9q.406-.462.712-1"></svg:path><svg:path d="M18 14a6 6 0 0 0-6-6M2 2l20 20"></svg:path></svg:g>`,
})
export class HugeiconsHotspotOfflineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
