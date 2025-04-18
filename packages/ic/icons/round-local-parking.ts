import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundLocalParkingIcon],svg[ic-round-local-parking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.79 3H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2s2-.9 2-2v-4h3c3.57 0 6.42-3.13 5.95-6.79C18.56 5.19 15.84 3 12.79 3m.41 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class IcRoundLocalParkingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
