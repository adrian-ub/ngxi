import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityHostSolidBadgedIcon],svg[clarity-host-solid-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="25.64" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M24 10.49v1.17H12v-1.6h11.7a7.4 7.4 0 0 1-1-2.4H12v-1.6h10.5V6a7.45 7.45 0 0 1 1.25-4.14H9.5A1.5 1.5 0 0 0 8 3.36v30.5h20V13.22a7.5 7.5 0 0 1-4-2.73m-6 18.15a3 3 0 1 1 3-3a3 3 0 0 1-3 3"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor"></svg:circle>`,
})
export class ClarityHostSolidBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
