import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDangerousZoneSignSolidIcon],svg[streamline-dangerous-zone-sign-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.219.226a1.5 1.5 0 0 1 2.117.596l.002.004l5.5 10.999a1.503 1.503 0 0 1-.606 1.983a1.5 1.5 0 0 1-.73.192H1.5a1.5 1.5 0 0 1-1.335-2.174L5.666.822a1.5 1.5 0 0 1 .553-.596m1.69 5.652a.75.75 0 0 0-1.211-.885L4.676 7.76a.75.75 0 0 0 .605 1.192h1.96l-1.15 1.574a.75.75 0 1 0 1.21.885l2.023-2.766a.75.75 0 0 0-.606-1.193h-1.96z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineDangerousZoneSignSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
