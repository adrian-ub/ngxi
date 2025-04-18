import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeBackwardIcon],svg[prime-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.3 4.31a.76.76 0 0 0-.81.14l-7.27 6.82V5c0-.3-.18-.57-.45-.69a.76.76 0 0 0-.81.14l-7.47 7c-.15.14-.24.34-.24.55s.09.41.24.55l7.47 7a.76.76 0 0 0 .81.14c.27-.12.45-.39.45-.69v-6.27l7.27 6.82a.76.76 0 0 0 .81.14c.27-.12.45-.39.45-.69V5c0-.3-.18-.57-.45-.69m-9.58 12.96L5.1 12l5.62-5.27zm8.53 0L13.63 12l5.62-5.27z"></svg:path>`,
})
export class PrimeBackwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
