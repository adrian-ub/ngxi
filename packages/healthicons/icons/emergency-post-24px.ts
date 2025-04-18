import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsEmergencyPost24pxIcon],svg[healthicons-emergency-post-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.575 9a2 2 0 0 0-1.907 1.398l-2.21 7A2 2 0 0 0 4.363 20h10.219a2 2 0 0 0 1.907-1.398l1.727-5.469l1.493 4.17L18 18l-.5 2l2.818-.791a2 2 0 0 0 1.275-2.58L19 9zm4.667 2.53a1 1 0 0 1 .728 1.213l-.19.757h.72a1 1 0 0 1 0 2h-1.22l-.31 1.243a1 1 0 1 1-1.94-.485l.188-.752l-.713.003a1 1 0 1 1-.01-2l1.223-.005l.312-1.246a1 1 0 0 1 1.213-.728" clip-rule="evenodd"></svg:path><svg:path d="M13 4h6v4h-6z"></svg:path><svg:path d="M17.5 4H19v5h-1.5z"></svg:path></svg:g>`,
})
export class HealthiconsEmergencyPost24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
