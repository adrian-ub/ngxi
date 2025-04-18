import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAirplayBoldIcon],svg[ph-airplay-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M137.11 152.19a12 12 0 0 0-18.22 0l-48 56A12 12 0 0 0 80 228h96a12 12 0 0 0 9.11-19.81Zm-31 51.81L128 178.44L149.91 204ZM236 64v112a28 28 0 0 1-28 28h-4a12 12 0 0 1 0-24h4a4 4 0 0 0 4-4V64a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v112a4 4 0 0 0 4 4h4a12 12 0 0 1 0 24h-4a28 28 0 0 1-28-28V64a28 28 0 0 1 28-28h160a28 28 0 0 1 28 28"></svg:path>`,
})
export class PhAirplayBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
