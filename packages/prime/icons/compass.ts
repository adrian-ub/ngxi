import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeCompassIcon],svg[prime-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.94 7.62l-4.88 2a2.63 2.63 0 0 0-1.48 1.48l-2 4.88a.34.34 0 0 0 .19.44a.36.36 0 0 0 .25 0l4.88-2a2.63 2.63 0 0 0 1.48-1.48l2-4.88a.34.34 0 0 0-.19-.44a.36.36 0 0 0-.25 0M12 13a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path><svg:path fill="currentColor" d="M12 21a9 9 0 1 1 9-9a9 9 0 0 1-9 9m0-16.5a7.5 7.5 0 1 0 7.5 7.5A7.5 7.5 0 0 0 12 4.5"></svg:path>`,
})
export class PrimeCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
