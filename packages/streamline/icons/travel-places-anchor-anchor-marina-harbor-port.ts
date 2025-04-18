import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelPlacesAnchorAnchorMarinaHarborPortIcon],svg[streamline-travel-places-anchor-anchor-marina-harbor-port-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3 8H1.5a5.5 5.5 0 0 0 11 0H11"></svg:path><svg:circle cx="7" cy="2" r="1.5"></svg:circle><svg:path d="M7 3.5v10m-1.5-7h3"></svg:path></svg:g>`,
})
export class StreamlineTravelPlacesAnchorAnchorMarinaHarborPortIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
