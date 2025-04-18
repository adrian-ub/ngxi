import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionBandageOutlineIcon],svg[ion-bandage-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="560.87" height="176.25" x="-24.43" y="167.88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="88.12" ry="88.12" transform="rotate(-45 256 256.002)"></svg:rect><svg:rect width="176" height="196" x="169.41" y="156.59" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="32" ry="32" transform="rotate(45 257.409 254.582)"></svg:rect><svg:circle cx="256" cy="208" r="16" fill="currentColor"></svg:circle><svg:circle cx="304" cy="256" r="16" fill="currentColor"></svg:circle><svg:circle cx="208" cy="256" r="16" fill="currentColor"></svg:circle><svg:circle cx="256" cy="304" r="16" fill="currentColor"></svg:circle>`,
})
export class IonBandageOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
