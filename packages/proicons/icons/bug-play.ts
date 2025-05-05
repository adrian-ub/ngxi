import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBugPlayIcon],svg[proicons-bug-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 19.85a4.5 4.5 0 0 1-4.5-4.5V9.08a3.23 3.23 0 0 1 3.23-3.23h2.54a3.23 3.23 0 0 1 3.23 3.23v1.326M2.75 12.85H7.5m2.25-9.7v.45A2.25 2.25 0 0 0 12 5.85v0a2.25 2.25 0 0 0 2.25-2.25v-.45M7.5 16.6H6.247a2.5 2.5 0 0 0-2.5 2.5v1.75M16.5 9.1h1.253a2.5 2.5 0 0 0 2.5-2.5V4.85M7.5 9.1H6.247a2.5 2.5 0 0 1-2.5-2.5V4.85"></svg:path><svg:path d="M14.496 13.978c0-.89.982-1.428 1.731-.95l4.505 2.872a1.126 1.126 0 0 1 0 1.9l-4.505 2.872a1.126 1.126 0 0 1-1.731-.95z"></svg:path></svg:g>`,
})
export class ProiconsBugPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
